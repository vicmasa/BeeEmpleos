exports.goBack = function (page) {
    page.frame.goBack();
};
function getTransition(type) {
    let transition;
    switch (type) {
        case 'slide':
            transition = {
                name: "slide",
                duration: 200,
                curve: "ease"
            };
            break;
        case 'slideTop':
            transition = {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            };
            break;
        case 'slideBottom':
            transition = {
                name: "slideBottom",
                duration: 200,
                curve: "ease"
            };
            break;
        default:
            transition = {
                name: "fade",
                duration: 200,
                curve: "ease"
            };
            break;
    }
    return transition;
}
function goToFunc(page, nav, transition, history, context, backstack) {
    page.frame.navigate({
        moduleName: "./components/" + nav,
        context: context,
        animated: true,
        transition: getTransition(transition),
        clearHistory: history,
        backstackVisible: backstack
    });
}
exports.goTo = function (page, nav, transition, history, context, backstack) {
    goToFunc(page, nav, transition, history, context, backstack);
};
function getCurrentPage(args) {
    const page = args.object.page;
    return page;
}
exports.getCurrentPage = function (args) {
    getCurrentPage(args);
};
exports.error = function (code) {
    switch (code) {
        case 401:
            goToFunc("login/login", true);
            break;
        default:
            break;
    }
};
function toggleVisivilityTabBottom(args, visibility) {
    let currentPage = getCurrentPage(args);
    console.log(currentPage);
    while (currentPage.parent) {
        currentPage = currentPage.parent;
    }
    console.log(currentPage);
    currentPage = currentPage.getViewById("tabStripBottom");
    console.log(currentPage);
    currentPage.visibility = visibility;
}
exports.toggleVisivilityTabBottom = function (args, visibility) {
    toggleVisivilityTabBottom(args, visibility);
};
