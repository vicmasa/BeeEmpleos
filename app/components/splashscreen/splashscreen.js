const ls = require('~/common/ls');
exports.loaded = function (args) {
	const page = args.object;
	const module = {
		moduleName: "~/components/welcome/welcome",
		transition: {
			name: "fade",
			duration: 200,
			curve: "ease"
		},
		clearHistory: true
	};
	if (typeof (ls.getString('token')) == 'string') {
		page.page.frame.navigate(module);
	} else {
		page.page.frame.navigate(module);
	}
}