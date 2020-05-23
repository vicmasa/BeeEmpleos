const observableModule = require("tns-core-modules/data/observable");

function getLastIndex(index) {
    const val = index.toString();
    return val.charAt(parseInt(val.length - 1));
}
function setImgUrl(id) {
    return "~/images/advertisers/" + getLastIndex(id) + ".png";
}
function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                id: 1,
                imgUrl: setImgUrl(1),
                quantity: 2,
                name: "Analistas de procesos",
                advertieser: "Yanacocha SRL",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "5500",
                createdAt: "Hace 2 min",
                tags: "Urgente",
                type: 1
            },
            {
                id: 2,
                imgUrl: setImgUrl(2),
                quantity: 1,
                name: "Profesor de Inglés",
                advertieser: "UPN",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "3500",
                createdAt: "Hace 40 min",
                tags: undefined,
                type: 1
            },
            {
                id: 3,
                imgUrl: setImgUrl(3),
                quantity: 8,
                name: "Promotores de eventos",
                advertieser: "El Quinde Shopping Plaza",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "2500",
                createdAt: "Hace 3 horas",
                tags: "Urgente",
                type: 1
            },
            {
                id: 4,
                imgUrl: setImgUrl(4),
                quantity: 4,
                name: "Personal de vigilancia",
                advertieser: "Real Plaza",
                location: "Cajamarca (Cajamarca)",
                currency: "Salario",
                salary: "a tratar",
                createdAt: "Hace 1 día",
                tags: undefined,
                type: 1
            },
            {
                id: 5,
                imgUrl: setImgUrl(5),
                quantity: 1,
                name: "Personal de servicio",
                advertieser: "Universidad Nacional de Cajamarca",
                location: "Cajamarca (Cajamarca)",
                currency: "Salario",
                salary: "a tratar",
                createdAt: "Hace 2 min",
                tags: undefined,
                type: 0
            },
            {
                id: 6,
                imgUrl: setImgUrl(6),
                quantity: 13,
                name: "Ingenieros civiles",
                advertieser: "Gonbierno Regional de Cajamarca",
                location: "Cajamarca (Chota)",
                currency: "S/",
                salary: "6000",
                createdAt: "Hace 35 min",
                tags: undefined,
                type: 0
            },
            {
                id: 7,
                imgUrl: setImgUrl(7),
                quantity: 1,
                name: "Ingeniero industrial",
                advertieser: "Nestlé",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "5500",
                createdAt: "Hace 4 horas",
                tags: undefined,
                type: 0
            },
            {
                id: 8,
                imgUrl: setImgUrl(8),
                quantity: 1,
                name: "Analista de calidad",
                advertieser: "Huacariz",
                location: "Cajamarca (Cajamarca)",
                currency: "Salario",
                salary: "a tratar",
                createdAt: "Hace 6 horas",
                tags: "Urgente",
                type: 0
            },
            {
                id: 9,
                imgUrl: setImgUrl(9),
                quantity: 1,
                name: "Ingeniero ambiental",
                advertieser: "Grupo Gloria",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "2500",
                createdAt: "Hace 6 horas",
                tags: undefined,
                type: 0
            },
            {
                id: 10,
                imgUrl: setImgUrl(10),
                quantity: 13,
                name: "Conductores A3",
                advertieser: "Bus Star",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "3500",
                createdAt: "Hace 8 horas",
                tags: undefined,
                type: 0
            },
            {
                id: 11,
                imgUrl: setImgUrl(11),
                quantity: 3,
                name: "Topógrafos",
                advertieser: "Yanacocha SRL",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "4500",
                createdAt: "Hace 1 día",
                tags: undefined,
                type: 0
            },
            {
                id: 12,
                imgUrl: setImgUrl(12),
                quantity: 10,
                name: "Personal de limpieza",
                advertieser: "UPN",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "1500",
                createdAt: "Hace 1 día",
                tags: undefined,
                type: 0
            },
            {
                id: 13,
                imgUrl: setImgUrl(13),
                quantity: 2,
                name: "Anfitrionas",
                advertieser: "El Quinde Shopping Plaza",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "2500",
                createdAt: "Hace 2 días",
                tags: "Urgente",
                type: 0
            },
            {
                id: 14,
                imgUrl: setImgUrl(14),
                quantity: 1,
                name: "Comunity Manager",
                advertieser: "Real Plaza",
                location: "Cajamarca (Cajamarca)",
                currency: "Salario",
                salary: "a tratar",
                createdAt: "Hace 2 días",
                tags: undefined,
                type: 0
            },
            {
                id: 15,
                imgUrl: setImgUrl(15),
                quantity: 1,
                name: "Analista de procesos",
                advertieser: "Universidad Nacional de Cajamarca",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "4500",
                createdAt: "Hace 2 días",
                tags: undefined,
                type: 0
            },
            {
                id: 16,
                imgUrl: setImgUrl(16),
                quantity: 1,
                name: "Ingeneiro de sistemas",
                advertieser: "Yanacocha SRL",
                location: "Cajamarca (Cajamarca)",
                currency: "S/",
                salary: "7500",
                createdAt: "Hace 3 días",
                tags: undefined,
                type: 0
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
