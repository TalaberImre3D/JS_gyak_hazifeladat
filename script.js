// ============================================
//  METU GYAKORLÓ — script.js
// ============================================
//
//  Ez a JavaScript fájl az index.html-hez tartozik.
//  Oldd meg a feladatokat sorban!
//
//  FONTOS:
//  - F12 → Console tab → itt látod a console.log üzeneteket
//  - Ha valami nem működik, a Console-ban pirossal jelzi a hibát
//
// ============================================


// ============================================
//  0. LÉPÉS: CONSOLE.LOG — próbáld ki!
// ============================================
//  A console.log() kiír valamit a böngésző konzolba (F12).
//  Nem a weboldalon jelenik meg, hanem a fejlesztői eszközökben!

console.log("Hello! A script.js sikeresen betöltődött.");
console.log("Nyisd meg a konzolt: F12 → Console tab");

//  FELADAT: Írd ki a saját neved a konzolba!
//  Példa: console.log("Kiss Anna");

// --- IDE ÍRD ---




// ============================================
//  5a. FELADAT: Szöveg megváltoztatása
// ============================================
//
//  Cél: ha rákattintunk a gombra, a bekezdés szövege megváltozik.
//
//  Lépések:
//  1. Keresd meg az elemet: document.getElementById("szoveg-1")
//  2. Keresd meg a gombot: document.getElementById("gomb-1")
//  3. A gomb onclick-jére írd meg a változtatást
//
//  Tipp: elem.textContent = "új szöveg";

var szoveg1 = document.getElementById("szoveg-1");
var gomb1 = document.getElementById("gomb-1");

gomb1.onclick = function() {
    // --- FELADAT: változtasd meg a szoveg1 szövegét ---
    // Példa: szoveg1.textContent = "Megváltoztam!";

    // --- IDE ÍRD ---


};


// ============================================
//  5b. FELADAT: Háttérszín megváltoztatása
// ============================================
//
//  Cél: ha rákattintunk a gombra, a doboz háttérszíne megváltozik.
//
//  Tipp: elem.style.backgroundColor = "lightblue";
//
//  Színek amiket használhatsz:
//  "lightblue", "salmon", "lightgreen", "#ff6600", "#3366ff"

var szinesdoboz = document.getElementById("szines-doboz");
var gomb2 = document.getElementById("gomb-2");

gomb2.onclick = function() {
    // --- FELADAT: változtasd meg a szinesdoboz háttérszínét ---

    // --- IDE ÍRD ---


};


// ============================================
//  5c. FELADAT: Számláló
// ============================================
//
//  Cél: a + gomb növeli, a - gomb csökkenti a számot.
//
//  Lépések:
//  1. Hozz létre egy változót: var ertek = 0;
//  2. A + gombnál: ertek = ertek + 1;
//  3. Írd ki: szamlaloElem.textContent = ertek;
//  4. A - gombnál: ertek = ertek - 1;

var szamlaloElem = document.getElementById("szamlalo");
var gombPlus = document.getElementById("gomb-plus");
var gombMinus = document.getElementById("gomb-minus");

var ertek = 0;

gombPlus.onclick = function() {
    // --- FELADAT: növeld az értéket 1-gyel és jelenítsd meg ---

    // --- IDE ÍRD ---


};

gombMinus.onclick = function() {
    // --- FELADAT: csökkentsd az értéket 1-gyel és jelenítsd meg ---

    // --- IDE ÍRD ---


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


};


// ============================================
//  5e. FELADAT: Megjelenítés / elrejtés (toggle)
// ============================================
//
//  Cél: ha kattintunk, a szöveg eltűnik. Ha újra kattintunk, megjelenik.
//
//  Tipp: 
//  if (elem.style.display === "none") {
//      elem.style.display = "block";
//  } else {
//      elem.style.display = "none";
//  }

var gombToggle = document.getElementById("gomb-toggle");
var rejtettSzoveg = document.getElementById("rejtett-szoveg");

gombToggle.onclick = function() {
    // --- FELADAT: ha látszik → rejtsd el, ha rejtett → mutasd meg ---

    // --- IDE ÍRD ---


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
