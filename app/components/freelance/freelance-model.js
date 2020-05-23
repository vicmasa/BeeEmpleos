const observableModule = require("tns-core-modules/data/observable");

function getLastIndex(index) {
    const val = index.toString();
    return val.charAt(parseInt(val.length - 1));
}
function setImgUrl(id) {
    return "~/images/avatar/" + getLastIndex(id) + ".png";
}
function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                id: 1,
                imgUrl: setImgUrl(1),
                name: "Ana",
                lastname: "Gallardo",
                job: "Administradora de empresas",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 5,
                currency: "S/",
                salary: "5500",
                distance: "a 100 m",
                type: 0
            },
            {
                id: 2,
                imgUrl: setImgUrl(2),
                name: "Victor",
                lastname: "Mantilla",
                job: "Abogado",
                location: "Cajamarca (Cajamarca)",
                experience: "1 años",
                rating: 5,
                currency: "S/",
                salary: "3500",
                distance: "a 160 m",
                tags: undefined,
                type: 0
            },
            {
                id: 3,
                imgUrl: setImgUrl(3),
                name: "Luca",
                lastname: "Huchida",
                job: "Diseñador gráfico",
                location: "Cajamarca (Cajamarca)",
                experience: "estudiante",
                rating: 4,
                currency: "S/",
                salary: "2500",
                distance: "a 200 m",
                type: 0
            },
            {
                id: 4,
                imgUrl: setImgUrl(4),
                name: "Luis",
                lastname: "Ventura",
                job: "Urbanista",
                location: "Cajamarca (Cajamarca)",
                experience: "1 años",
                rating: 3,
                currency: "Salario",
                salary: "a tratar",
                distance: "a 220 m",
                tags: undefined,
                type: 0
            },
            {
                id: 5,
                imgUrl: setImgUrl(5),
                name: "Luisa",
                lastname: "Cornejo",
                job: "Economista",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 4,
                currency: "Salario",
                salary: "a tratar",
                distance: "a 300 m",
                tags: undefined,
                type: 0
            },
            {
                id: 6,
                imgUrl: setImgUrl(6),
                name: "Carla",
                lastname: "Rodriguez",
                job: "Comunicadora social",
                location: "Cajamarca (Chota)",
                experience: "3 años",
                rating: 3,
                currency: "S/",
                salary: "6000",
                distance: "a 400 m",
                tags: undefined,
                type: 0
            },
            {
                id: 7,
                imgUrl: setImgUrl(7),
                name: "Claudio",
                lastname: "López",
                job: "Chef",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 5,
                currency: "S/",
                salary: "5500",
                distance: "a 1 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 8,
                imgUrl: setImgUrl(8),
                name: "Victoria",
                lastname: "Palacios",
                job: "Ingeniero civil",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 5,
                currency: "Salario",
                salary: "a tratar",
                distance: "a 1 Km",
                type: 0
            },
            {
                id: 9,
                imgUrl: setImgUrl(9),
                name: "Pedro",
                lastname: "Gálvez",
                job: "Arquitecto",
                location: "Cajamarca (Cajamarca)",
                experience: "estudiante",
                rating: 5,
                currency: "S/",
                salary: "2500",
                distance: "a 1.5 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 10,
                imgUrl: setImgUrl(10),
                name: "Sara",
                lastname: "Villareal",
                job: "Efermera",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 5,
                currency: "S/",
                salary: "3500",
                distance: "a 1.5 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 11,
                imgUrl: setImgUrl(11),
                name: "Angela",
                lastname: "Ruíz",
                job: "Médico cirujano",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 5,
                currency: "S/",
                salary: "4500",
                distance: "a 2 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 12,
                imgUrl: setImgUrl(12),
                name: "José",
                lastname: "Aguilar",
                job: "Docente de física",
                location: "Cajamarca (Cajamarca)",
                experience: "estudiante",
                rating: 2,
                currency: "S/",
                salary: "1500",
                distance: "a 2.5 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 13,
                imgUrl: setImgUrl(13),
                name: "Rocio",
                lastname: "Perez",
                job: "Obstetra",
                location: "Cajamarca (Cajamarca)",
                experience: "2 años",
                rating: 5,
                currency: "S/",
                salary: "2500",
                distance: "a 3 Km",
                type: 0
            },
            {
                id: 14,
                imgUrl: setImgUrl(14),
                name: "Jorge",
                lastname: "Rubio",
                job: "Ingeniero de software",
                location: "Cajamarca (Cajamarca)",
                experience: "1 años",
                rating: 5,
                currency: "Salario",
                salary: "a tratar",
                distance: "a 4 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 15,
                imgUrl: setImgUrl(15),
                name: "Carlos",
                lastname: "Fernández",
                job: "Ingeniero industrial",
                location: "Cajamarca (Cajamarca)",
                experience: "3 años",
                rating: 4,
                currency: "S/",
                salary: "4500",
                distance: "a 5 Km",
                tags: undefined,
                type: 0
            },
            {
                id: 16,
                imgUrl: setImgUrl(16),
                name: "Anilú",
                lastname: "Ferreira",
                job: "Fotógrafa profesional",
                location: "Cajamarca (Cajamarca)",
                experience: "4 años",
                rating: 5,
                currency: "S/",
                salary: "7500",
                distance: "a 10 Km",
                tags: undefined,
                type: 0
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
