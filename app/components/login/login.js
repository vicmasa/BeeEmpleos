const ls = require('~/common/ls');
const nav = require('~/common/nav');
let page;
exports.loaded = function (args) {
	page = args.object;
}
exports.goTo = function (args) {
	//page.page.frame.navigate("~/components/home/home");
	nav.goTo(page.page, "jobs/jobs", "flip");
}