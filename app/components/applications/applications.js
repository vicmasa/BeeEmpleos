const nav = require('~/common/nav');
const HomeItemsViewModel = require('./applications-model');

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
    page.getViewById('nbButton' + item.nbSelected).text = '\uf103';
    page.getViewById('nbButton' + item.nbSelected).className += ' selected';
    page.getViewById('nbLabel' + item.nbSelected).className += ' selected';
}
exports.onItemTap = function (args) {
	const item = args.view.bindingContext;
	nav.goTo(page.page, 'jobs/profile/profile', 'slideTop', false, item);
}