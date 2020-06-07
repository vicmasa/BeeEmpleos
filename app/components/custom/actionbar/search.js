const nav = require('~/common/nav');
let page;
exports.loaded = function (args) {
    page = args.object;
    page = page.parent;
}
exports.tapFilter = function (args) {
    const item = page.bindingContext;
    nav.goTo(page.page, 'search/search', 'slideBottom', false, item);
}