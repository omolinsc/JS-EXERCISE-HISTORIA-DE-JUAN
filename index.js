//* Ejercicio. Define la función.



const pasarLaNavidad = function (film, xmasFilm, actor, holidayPlans, endOfStory, me, boolean, notDefined) {
    //bloque de código que se ejecuta
    console.log(me, "estas Navidades🎄☃ quería ver la película de 🤮 el", film);
    console.log("pero por la tele 📺 solamente emitirán todas las pelis 🎬 de", xmasFilm[0], "como cada año...");
    console.log(xmasFilm[2], "un piso con mis gatos 🐱, cuando griten eso de...", xmasFilm[1]());
    console.log("van a pegar un bote mayor que el que pegámos el día que", xmasFilm[3], boolean);
    console.log("Yo no soy mucho de celebrar la Navidad 🎄, y en lugar de una", holidayPlans.noche);
    console.log("Así que iré a 🍽", holidayPlans.medioDia, "y aprovecharemos a discutir donde salimos la noche del", holidayPlans.dia);
    console.log("También hablaremos de", holidayPlans.function(), "al", holidayPlans.destinoVacaciones[2]);
    console.log("Los amigos mandarán seguro un meme de", actor, "celebrando las fiestas 🎊🎉 en el", holidayPlans.destinoVacaciones[1]);
    console.log("...que el meme es más cansino que los errores de javascript con", notDefined, ".....🤣");
    console.log(endOfStory);
}

pasarLaNavidad('grinch', [
    "Solo en casa", function () {
    console.log("AaRrrrGgggggg ¡Llegan los ladrones!")
    },
    "Como vivo en",  //! ¿Santa o Reyes Magos?
    "Recibimos los regalos el día",
], "Michael Knight", {
    medioDia: "Comer con los amigos",
    dia: 24,
    noche: "Cena familiar",
    destinoVacaciones: [
        "Honolulu",
        "Polo Norte",
        "Caribe",
        "Torrevieja",
        "Badajoz",
    ],
    function() {
        console.log("Mis vacaciones")
    },
}, function () {
    return "Fin de la Historia";
}, "Oriol", true, undefined);