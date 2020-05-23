const nav = require('~/common/nav');
let page;
exports.loaded = function (args) {
	page = args.object;
}
exports.goTo = function (args) {
	nav.goBack(page.page);
}
exports.goToRoot = function (args) {
	console.log("goTo()");
	const button = args.object;
	const page = button.page;
	page.frame.navigate("~/components/root/root");
}
exports.goToJobs = function (args) {
	console.log("goTo()");
	const button = args.object;
	const page = button.page;
	page.frame.navigate("~/components/jobs/jobs");
}