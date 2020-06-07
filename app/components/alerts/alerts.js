const HomeItemsViewModel = require("./alerts-model");
const nav = require('~/common/nav');

let page;
exports.onNavigatingTo = function (args) {
    page = args.object;
    const item = page.navigationContext;
    setInit(item);
    page.bindingContext = new HomeItemsViewModel();
}
function setInit(item) {
    for (const i in item) {
        console.log(i, item[i]);
    }
    page.getViewById('nbButton' + item.nbSelected).text = '\uf105';
    page.getViewById('nbButton' + item.nbSelected).color = 'black';
    page.getViewById('nbLabel' + item.nbSelected).color = 'black';
}
exports.tapAdd = function (args) {
    const item = args.object;
    // console.log(item.focus());
    //item.focus(true);
    // nav.goTo(page.page, 'alerts/add/add', 'slideTop', false, false, false);
    nav.goTo(page.page, 'alerts/add/add', 'slideTop', false, false);
}