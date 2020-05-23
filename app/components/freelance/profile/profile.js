const nav = require('~/common/nav');

const utilsModule = require('tns-core-modules/utils/utils');

let page;
exports.loaded = function (args) {
    page = args.object;
    const item = page.navigationContext;
    const requirements = getRequirements();
    item.requirements = requirements;
    item.title = '';
    item.requirementsTitle = 'Requerimientos: ';
    item.descriptionTitle = 'Descripción: ';
    item.stars = [1, 2, 3, 4];
    item.description = 'Soy un profesional altamente comprometido con los trabajos de mis clientes. Me caracterizo por brinda calidad y confianza';
    item.skills = ['Diseño gráfico', 'Ilustrator', 'Gestion de proyectos', 'Photoshop'];
    item.images = getImages();
    item.reviews = getReviews();
    page.bindingContext = item;
};
exports.tapBack = function () {
    nav.goBack(page.page);
};
function getReviews() {
    return [
        { name: 5, color: 'green', bar_value_perc: '70%', bar_value: 140 },
        { name: 4, color: 'lime', bar_value_perc: '20%', bar_value: 40 },
        { name: 3, color: 'yellow', bar_value_perc: '2%', bar_value: 4 },
        { name: 2, color: 'orange', bar_value_perc: '3%', bar_value: 6 },
        { name: 1, color: 'red', bar_value_perc: '5%', bar_value: 10 },
    ];
}
function setImgUrl(id) {
    return '~/images/portfolio/' + id + '.png';
}
function getImages() {
    const images = [];
    for (let i = 0; i < 10; i++) {
        images.push(setImgUrl(i));
    }
    return images;
}
function getRequirements() {
    const items = [{
        key: 'Educación mínima',
        value: 'Título profesional'
    }, {
        key: 'Años de experiencia',
        value: '2'
    }, {
        key: 'Idiomas',
        value: 'Inglés'
    }, {
        key: 'Disponibilidad para viajar',
        value: 'No'
    }];
    return items;
};
exports.tapContact = function (args) {
    let text = "*Mensaje de BeeEmpleos*%0A%0A";
    text += "_*Lionel Messi*_ desea contactarte 😱%0A";
    text += "Puedes contactarlo al número 987654321 💪";
    utilsModule.openUrl('https://wa.me/51986709663?text=' + text);
};