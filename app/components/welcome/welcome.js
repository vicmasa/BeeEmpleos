const ViewModel = require("./welcome-view-model");
const enums = require("ui/enums");

const ls = require('~/common/ls');
const nav = require('~/common/nav');
const session = require('~/common/session');
const platform = require('~/common/platform');

let page;
exports.onNavigatingTo = function (args) {
    page = args.object;
    page.bindingContext = ViewModel;
    setInit();
    setConfig();
}
function setInit() {
    const width = 300;
    ViewModel.set('selected', 0);
    ViewModel.set('width', width);
    page.getViewById('btn').scaleX = 1;
    page.getViewById('btn').scaleY = 1;
    page.getViewById('btn').translateX = 0;
    page.getViewById('btn').translateY = 0;
    page.getViewById('btn').width = width;
    page.getViewById('btn').text = 'Empezar';
}
function setConfig() {
    session.deleteConfig();
    const width = platform.getScreenDimensions('width');
    const height = platform.getScreenDimensions('height');
    ls.setNumber('screenWidth', parseInt(width));
    ls.setNumber('screenHeight', parseInt(height));
    session.setConfig(platform.getPlatform());
}
exports.selectedIndexChanged = function (args) {
    ViewModel.set('selected', args.newIndex);
}
exports.tapBack = function (args) {
    page.getViewById('tab').selectedIndex = ViewModel.get('selected') - 1;
}
exports.tapNext = function (args) {
    page.getViewById('tab').selectedIndex = ViewModel.get('selected') + 1;
}
exports.tapLogin = function (args) {
    const btn = args.object;
    btn.text = "";
    btn.width = 50;
    btn.height = 50;
    btn.boderRadius = 50;
    btn.opacity = 1;
    btn.animate({
        opacity: 1, //0.5,
        translate: { x: 0, y: ViewModel.get('width') * (-1) },
        scale: { x: 5, y: 5 },
        rotate: 360,
        duration: 300,
        delay: 20,
        iterations: 1,
        curve: enums.AnimationCurve.easeIn
    })
        .then(() => {
            return btn.animate({
                opacity: 1,
                translate: { x: 0, y: ViewModel.get('width') * (-1) },
                scale: { x: 30, y: 30 },
                rotate: 360,
                duration: 300,
                delay: 20,
                iterations: 1,
                curve: enums.AnimationCurve.easeOut
            });
        })
        .then(() => {
            nav.goTo(page.page, "jobs/jobs", "flip", true);
        }).catch(() => {
            //console.log(e.message);
        });
}