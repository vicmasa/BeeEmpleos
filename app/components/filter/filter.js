const HomeItemsViewModel = require("./filter-model");

const modalViewModule = "components/modal/details/single";

let page;
function onNavigatingTo(args) {
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
    page.getViewById('nbButton' + item.nbSelected).text = '\uf105';
    page.getViewById('nbButton' + item.nbSelected).color = 'black';
    page.getViewById('nbLabel' + item.nbSelected).color = 'black';
}

function onItemTap(args) {
    const view = args.view;
    const tappedItem = view.bindingContext;
    const mainView = args.object;
    const option = {
        context: tappedItem,
        closeCallback: (username, password) => {
            console.log(`Username: ${username} : Password: ${password}`);
        },
        fullscreen: true,
        transition: {
            name: "slideTop",
            duration: 200,
            curve: "ease"
        }
    };
    mainView.showModal(modalViewModule, option);
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
