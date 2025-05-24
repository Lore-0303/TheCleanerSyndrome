
let imageContainer = document.getElementById('container');
let tieni = document.getElementById('tieni');
let oscura = document.getElementById('oscura');
let imageElement = imageContainer.querySelector('img');

let immagini = [
    'foto/1.jpg',
    'foto/2.jpg',
    'foto/3.jpg',
    'foto/4.jpg',
    'foto/5.jpg',
    'foto/6.jpg',
    'foto/7.jpg',
    'foto/8.jpg',
    'foto/9.jpg',
    'foto/10.jpg',
    'foto/11.jpg',
    'foto/12.jpg',
    'foto/13.jpg',
    'foto/14.jpg',
    'foto/15.jpg',
    'foto/16.jpg',
    'foto/17.jpg',
    'foto/18.jpg',
    'foto/19.jpg',
    'foto/20.jpg'
];
// vettore con le immagini con le percentuali
let immagini_risultato = [
    'censura_senza_percentuali/1.jpg',
    'censura_senza_percentuali/2.jpg',
    'censura_senza_percentuali/3.jpg',
    'censura_senza_percentuali/4.jpg',
    'censura_senza_percentuali/5.jpg',
    'censura_senza_percentuali/6.jpg',
    'censura_senza_percentuali/7.jpg',
    'censura_senza_percentuali/8.jpg',
    'censura_senza_percentuali/9.jpg',
    'censura_senza_percentuali/10.jpg',
    'censura_senza_percentuali/11.jpg',
    'censura_senza_percentuali/12.png',
    'censura_senza_percentuali/13.jpg',
    'censura_senza_percentuali/14.jpg',
    'censura_senza_percentuali/15.jpg',
    'censura_senza_percentuali/16.jpg',
    'censura_senza_percentuali/17.jpg',
    'censura_senza_percentuali/18.jpg',
    'censura_senza_percentuali/19.jpg',
    'censura_senza_percentuali/20.jpg'
]
// vettore con le immagini senza percentuali

let immaginiTenute = [];
let immaginiOscurate = [];

let indice = 0;
let primaSceltaFatta = false; 

function altrapagina() {
    let immaginiTenuteSerializzato = JSON.stringify(immaginiTenute);
    let immaginiOscurateSerializzato = JSON.stringify(immaginiOscurate);
    let url = `risultato.html?dati1=${encodeURIComponent(immaginiOscurateSerializzato)}&dati2=${encodeURIComponent(immaginiTenuteSerializzato)}`;
    window.location.href = url;
}

function gestisciClickTieni() {
    if (indice < immagini.length) {
        if (!primaSceltaFatta && indice === 0) {
            immaginiTenute.push(immagini_risultato[indice]);
            primaSceltaFatta = true;
            indice++;
        } else if (primaSceltaFatta) {
            immaginiTenute.push(immagini_risultato[indice]);
            indice++;
        }
        if (indice < immagini_risultato.length) {
            imageElement.src = immagini_risultato[indice];
        } else {
            verificaFineImmagini();
        }
    } else {
        verificaFineImmagini();
    }
}

function gestisciClickOscura() {
    if (indice < immagini.length) {
        if (!primaSceltaFatta && indice === 0) {
            immaginiOscurate.push(immagini_risultato[indice]);
            primaSceltaFatta = true;
            indice++;
        } else if (primaSceltaFatta) {
            immaginiOscurate.push(immagini_risultato[indice]);
            indice++;
        }
        if (indice < immagini_risultato.length) {
            imageElement.src = immagini_risultato[indice];
        } else {
            verificaFineImmagini();
        }
    } else {
        verificaFineImmagini();
    }
}

function verificaFineImmagini() {
    if (immaginiTenute.length + immaginiOscurate.length === 20) {
        altrapagina();
    }
}


if (immagini.length > 0) {
    imageElement.src = immagini_risultato[indice];
}

tieni.addEventListener('click', gestisciClickTieni);
oscura.addEventListener('click', gestisciClickOscura);