let page;
exports.loaded = function (args) {
    console.log('loaded');
    page = args.object;
    page = page.parent;
}
exports.tapBack = function (args) {
    page.page.frame.goBack();
}