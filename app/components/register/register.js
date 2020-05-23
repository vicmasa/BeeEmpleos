const ls = require("~/common/ls");
const nav = require("~/common/nav");

let page;
exports.onNavigatingTo = function (args) {
    page = args.object;
    const item = page.navigationContext;
    setInit(item);
    //page.bindingContext = ViewModel;
}
function setInit(item) {
    for (const i in item) {
        //ViewModel.set(i, item[i]);
        console.log(i, item[i]);
    }
    page.getViewById('nbButton' + item.nbSelected).text = '\uf101';
    page.getViewById('nbButton' + item.nbSelected).color = 'black';
    page.getViewById('nbLabel' + item.nbSelected).color = 'black';
}
exports.tapNav = function (args) {

};
