console.log("Hello! A script.js sikeresen betöltődött.");
console.log("Nyisd meg a konzolt: F12 → Console tab");
console.log("Talabér Imre");

var szoveg1 = document.getElementById("szoveg-1");
var gomb1 = document.getElementById("gomb-1");

gomb1.onclick = function() {
    // --- FELADAT: változtasd meg a szoveg1 szövegét ---
    // Példa: szoveg1.textContent = "Megváltoztam!";
szoveg1.textContent = "Hello there general Kenobi!"
};

var szinesdoboz = document.getElementById("szines-doboz");
var gomb2 = document.getElementById("gomb-2");
var szinek = ["red", "blue", "green", "lightblue"];
let index = 0;

gomb2.onclick = function() {
    szinesdoboz.style.backgroundColor = szinek[index];
    index++;

};

var szamlaloElem = document.getElementById("szamlalo");
var gombPlus = document.getElementById("gomb-plus");
var gombMinus = document.getElementById("gomb-minus");

var ertek = 0;

gombPlus.onclick = function() {//hozzaadas
    ertek++;
    szamlaloElem.textContent = ertek;
};

gombMinus.onclick = function() {//kivonás
    
    if(ertek>0){
        ertek = ertek-1;
        szamlaloElem.textContent = ertek;
    }
    else{
        return;
    }
};


// ============================================
//  5d. FELADAT: Lista bővítés
// ============================================
//
//  Cél: a felhasználó beír egy nevet, és az megjelenik a listában.
//
//  Lépések:
//  1. Olvasd ki az input értékét: nevInput.value
//  2. Hozz létre egy új <li> elemet: document.createElement("li")
//  3. Írd bele a nevet: li.textContent = nevInput.value
//  4. Fűzd hozzá a listához: nevLista.appendChild(li)
//  5. Töröld az inputot: nevInput.value = ""

var nevInput = document.getElementById("nev-input");
var gombHozzaad = document.getElementById("gomb-hozzaad");
var nevLista = document.getElementById("nev-lista");

gombHozzaad.onclick = function() {
    // --- FELADAT: olvasd ki a nevet és add hozzá a listához ---

    // --- IDE ÍRD ---
var nev = nevInput.value;//nev kiolvas

var li = document.createElement("li");
li.textContent = nev;

nevLista.appendChild(li);

};


// ============================================
//  5e. FELADAT: Megjelenítés / elrejtés (toggle)
// ============================================
//
//  Cél: ha kattintunk, a szöveg eltűnik. Ha újra kattintunk, megjelenik.

var gombToggle = document.getElementById("gomb-toggle");
var rejtettSzoveg = document.getElementById("rejtett-szoveg");

gombToggle.onclick = function() {
    // --- FELADAT: ha látszik → rejtsd el, ha rejtett → mutasd meg ---
    
    if (rejtettSzoveg.style.display === "none") {
        rejtettSzoveg.style.display = "block";
    } else {
        rejtettSzoveg.style.display = "none";
    }
};


// ============================================
//  🎉 BÓNUSZ FELADATOK
// ============================================
//
//  Ha elkészültél, próbáld ki ezeket:
//
//  B1. A számlálónál ne engedje 0 alá menni
//      Tipp: if (ertek > 0) { ... }
//
//  B2. A szín gombnál minden kattintásra MÁS szín legyen
//      Tipp: hozz létre egy tömböt: var szinek = ["red", "blue", "green"];
//      és egy indexet ami növekszik
//
//  B3. A lista hozzáadásnál ne engedje üres nevet hozzáadni
//      Tipp: if (nevInput.value !== "") { ... }
//
//  B4. A szövegváltoztatásnál írja ki az aktuális dátumot/időt
//      Tipp: new Date().toLocaleTimeString("hu-HU")
