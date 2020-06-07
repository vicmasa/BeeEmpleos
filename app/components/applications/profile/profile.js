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
    item.status = '';
    page.bindingContext = item;
};
exports.tapBack = function () {
    nav.goBack(page.page); 
};
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