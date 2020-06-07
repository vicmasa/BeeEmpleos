const nav = require('~/common/nav');
const HomeItemsViewModel = require('./jobs-model');

let page;
exports.loaded = function (args) {
    page = args.object;
    const item = page.navigationContext;
    setInit(item);
    page.bindingContext = new HomeItemsViewModel();
}
function setInit(item) {
    for (const i in item) {
        // ViewModel.set(i, item[i]);
        console.log(i, item[i]);
    }
    page.getViewById('nbButton0').text = '\uf107';
    page.getViewById('nbButton0').color = 'black';
    page.getViewById('nbLabel0').color = 'black';
}
exports.cardLoaded = function (args) {
    const layer = args.object.ios.layer;
    layer.backgroundColor = UIColor.whiteColor.CGColor; //UIColor[args.object.bg_color + 'Color'].CGColor; //(args.object.bg_color == 'white' ? UIColor.whiteColor.CGColor : UIColor.yellowColor.CGColor);
    layer.shadowOffset = CGSizeMake(0, 7);
    layer.shadowOpacity = 0.1; 
    layer.shadowRadius = 5;
    layer.cornerRadius = 15;
}
exports.onItemTap = function (args) {
    const item = args.view.bindingContext;
    nav.goTo(page.page, 'jobs/profile/profile', 'slideTop', false, item);
}