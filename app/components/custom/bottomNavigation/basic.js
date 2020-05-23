exports.tapItem = function (args) {
    const item = args.object;
    // console.log('nbIndex', nbIndex);
    // console.log("goTo()", "./components/" + item.nav);
    item.page.frame.navigate({
        moduleName: "./components/" + item.nav,
        context: { nbSelected: item.col },
        animated: true,
        transition: {
            name: "fade",
            duration: 200,
            curve: "ease"
        },
        clearHistory: false,
        backstackVisible: true
    });
}