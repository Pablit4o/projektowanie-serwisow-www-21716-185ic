// Zad 1 funkcja zwrotna (callback)

liczenie = () => $.getJSON('../js/data.json', function( userData ) {
    let liczbaC = userData.liczba.całkowita;
    let liczbaU = userData.liczba.ułamek.mieszany;
    console.log(liczbaC.map((x, y) => x*=liczbaU[y]));
   });

tekst = () => $.getJSON('../js/data.json', function( userData ) {
        let imie = userData.użytkownik.imie;
        let miasto = userData.użytkownik.adres.miasto;
        let conTekst = (imie, miasto) => Text(imie,miasto)
        conTekst(imie, miasto)
    });
    
function Text(imie, miasto){
           console.log(`Imie: ${imie}, Miasto: ${miasto}`)
        }

// Zad 2 obiekt Promise

function getNumber(type) {
    return new Promise((resolve, reject) => {
        if (type === true) {
            resolve(
                fetch('../js/data.json')
                .then(response => response.json())
                .then(userData =>{ 
                    let liczbaC = userData.liczba.całkowita;
                    let liczbaU = userData.liczba.ułamek.mieszany;
                    console.log(liczbaC.map((x, y) => x*=liczbaU[y]));
                }).catch(error => {
                        console.log(error);
                }).finally(() => {
                    console.log(`😊`);
                })
            );
        } else {
            reject('Error 404');
        }
    });
}

function getTekst(type) {
    return new Promise((resolve, reject) => {
        if (type === true) {
            resolve(
                fetch('../js/data.json')
                .then(response => response.json())
                .then(userData =>{ 
                    let imie = userData.użytkownik.imie;
                    let miasto = userData.użytkownik.adres.miasto;
                    let conTekst = (imie, miasto) => Text(imie,miasto)
                    conTekst(imie, miasto)
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    console.log(`👌`);
                })
            );
        } else {
            reject('Error 404');
        }
    });
}

// Zad 3 async/await

async function ascGetNumber(url = '../js/data.json'){
    let response = await fetch(url);
    let userData = await response.json();
    let liczbaC = userData.liczba.całkowita;
    let liczbaU = userData.liczba.ułamek.mieszany;
    console.log(liczbaC.map((x, y) => x*=liczbaU[y]));
}

async function ascGetTekst(url = '../js/data.json'){
    let response = await fetch(url);
    let userData = await response.json();
    let imie = userData.użytkownik.imie;
    let miasto = userData.użytkownik.adres.miasto;
    let conTekst = (imie, miasto) => Text(imie,miasto)
    conTekst(imie, miasto)
}

// Zad 4 Zapytania AJAX

let xhr = new XMLHttpRequest();

xhr.open('GET', '../js/data.json');

xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    let userData = xhr.response;
    let imie = userData.użytkownik.imie;
    let miasto = userData.użytkownik.adres.miasto;
    let conTekst = (imie, miasto) => Text(imie,miasto)
    conTekst(imie, miasto)

    let liczbaC = userData.liczba.całkowita;
    let liczbaU = userData.liczba.ułamek.mieszany;
    console.log(liczbaC.map((x, y) => x*=liczbaU[y]));
};
xhr.onerror = function() {
  alert(`Network Error`);
};

// Zad 5 metoda fetch

fetch('../js/data.json')
    .then(response => response.json())
    .then(userData =>{ 
        let liczbaC = userData.liczba.całkowita;
        let liczbaU = userData.liczba.ułamek.mieszany;
        console.log(liczbaC.map((x, y) => x*=liczbaU[y]));
    });

fetch('../js/data.json')
    .then(response => response.json())
    .then(userData =>{ 
        let imie = userData.użytkownik.imie;
        let miasto = userData.użytkownik.adres.miasto;
        let conTekst = (imie, miasto) => Text(imie,miasto)
        conTekst(imie, miasto)
    });

// Zad 6 biblioteka axios

axios.get('../js/data.json')
    .then(function (response) {
        let liczbaC = response.data.liczba.całkowita;
        let liczbaU = response.data.liczba.ułamek.mieszany;
        console.log(liczbaC.map((x, y) => x*=liczbaU[y]));
    }).catch(function (error) {
        console.log(error);
    })

axios.get('../js/data.json')
    .then(function (response) {
        let imie = response.data.użytkownik.imie;
        let miasto = response.data.użytkownik.adres.miasto;
        let conTekst = (imie, miasto) => Text(imie,miasto)
        conTekst(imie, miasto)
    }).catch(function (error) {
        console.log(error);
    })
