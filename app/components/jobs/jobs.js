const nav = require('~/common/nav');
//const actionbar = require('~/components/custom/actionbar/search');

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
exports.onItemTap = function (args) {
	const item = args.view.bindingContext;
	nav.goTo(page.page, 'jobs/profile/profile', 'slideTop', false, item);
}