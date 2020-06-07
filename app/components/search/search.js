const enums = require("ui/enums");

const ViewModel = require('./search-model');

const ls = require('~/common/ls');

let page;
exports.onNavigatingTo = function (args) {
    page = args.object;
    const item = page.navigationContext;
    setInit(item);
    page.bindingContext = ViewModel;
}
function setInit(item) {
    loadSearch();
    setScrollers();
}
function setScrollers(){
    ViewModel.set('repeater_select', ['Gerente de operaciones', 'Supervisor', 'Fiscalizador', 'Superintendente de IT']);
}
exports.tapButton = function (args) {
    const btn = args.object;
    btn.animate({
        backgroundColor: '#fec400',
        width: ls.getNumber('screenWidth')-70,
        duration: 300, 
        iterations: 1,
        curve: enums.AnimationCurve.ease
    }).then(() => {
        const items = ViewModel.get('items');
        const index = items.indexOf(btn.bindingContext);
        if (index !== -1) {
            items.splice(index, 1);
            page.getViewById('repeater').refresh();
        }
    }).catch(() => {
        //console.log(e.message);
    });
}
function setChangeSearch(isSearch) {
    ViewModel.set('isSearch', isSearch);
    console.log(ViewModel.get('isSearch'));
}
function loadSearch() {
    const items = ['Lider de proyecto',
        'Supervisor de operaciones',
        'Jefe de operación',
        'COO',
        'Analita de proyectos',
        'Porject manager'];
    ViewModel.set('items', items);
    setChangeSearch(false);
}
exports.itemTap = function (args) {
    //const item = args.view.bindingContext;
    setChangeSearch(false);
}
function getData() {
    const items = [{
        name: 'Gerente general'
    }, {
        name: 'Gerente de operaciones'
    }, {
        name: 'Gerente financiero'
    }, {
        name: 'Gerente de empresa'
    }, {
        name: 'Gerente de ventas'
    }, {
        name: 'Gerente financiero'
    }, {
        name: 'Gerente de innovación'
    }, {
        name: 'Gerente comercial'
    }, {
        name: 'Gerente de marketing'
    }, {
        name: 'Gerente'
    }, {
        name: 'Gerente general'
    }, {
        name: 'Gerente de operaciones'
    }, {
        name: 'Gerente financiero'
    }, {
        name: 'Gerente de empresa'
    }, {
        name: 'Gerente de ventas'
    }, {
        name: 'Gerente financiero'
    }, {
        name: 'Gerente de innovación'
    }, {
        name: 'Gerente comercial'
    }, {
        name: 'Gerente de marketing'
    }, {
        name: 'Gerente'
    }, {
        name: 'Gerente general'
    }, {
        name: 'Gerente de operaciones'
    }, {
        name: 'Gerente financiero'
    }, {
        name: 'Gerente de empresa'
    }, {
        name: 'Gerente de ventas'
    }, {
        name: 'Gerente financiero'
    }, {
        name: 'Gerente de innovación'
    }, {
        name: 'Gerente comercial'
    }, {
        name: 'Gerente de marketing'
    }, {
        name: 'Gerente'
    }];
    ViewModel.set('listView_search', items);
    setChangeSearch(true);
}
//logic search
function hideKeyBoard(searchBar) {
    if (searchBar.ios) {
        searchBar.ios.endEditing(true);
    } else if (searchBar.android) {
        searchBar.android.clearFocus();
    }
}
let timer = 0;
exports.setSearchBar = function (args) {
    clearTimeout(timer);
    const searchBar = args.object;
    hideKeyBoard(searchBar);
    ViewModel.set('sbHint', 'Buscar');
    searchBar.on('textChange', function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            // ViewModel.set('offset', undefined);
            // ViewModel.set('last_page', undefined);
            //if (ViewModel.get('loaded')) {
            getData();
            //}
            timer = 0;
        }, 1000);
    });
}
//