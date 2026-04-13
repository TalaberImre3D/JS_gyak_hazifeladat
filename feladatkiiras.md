# METU Gyakorló — Feladatkiírás

## HTML + CSS + JavaScript alapok

---

## Fájlok

| Fájl | Mit csinálj vele |
|------|-----------------|
| `index.html` | Nyisd meg böngészőben — NE módosítsd |
| `style.css` | **Töltsd ki a FELADAT részeket** (flexbox) |
| `script.js` | **Töltsd ki a FELADAT részeket** (JavaScript) |

**Tanári megoldások** (ne add ki!): `style-megoldas.css`, `script-megoldas.js`

---

## 1. rész: CSS Flexbox (style.css)

Nyisd meg a `style.css` fájlt. A `/* --- FELADAT --- */` kommenteknél írd be a hiányzó CSS-t.

| # | Feladat | Amit be kell írnod |
|---|---------|-------------------|
| 1 | Navigáció: logo balra, menü jobbra | `display: flex; justify-content: space-between; align-items: center;` |
| 1 | Menü linkek egymás mellé | `display: flex; gap: 1rem;` |
| 2 | 3 kártya egymás mellé | `display: flex; gap: 1rem;` + `.kartya`-ra `flex: 1;` |
| 3 | Profil kép + szöveg egymás mellé | `display: flex; align-items: center; gap: 1.5rem;` |
| 4 | Lábléc: bal-jobb | `display: flex; justify-content: space-between;` |

### Flexbox összefoglaló

```
display: flex;              → flexbox bekapcsolása
justify-content:            → VÍZSZINTES elrendezés
    space-between           → széttolja az elemeket (bal-jobb)
    center                  → középre
    space-around            → egyenlő távolság
align-items:                → FÜGGŐLEGES igazítás
    center                  → középre
    flex-start              → felülre
    flex-end                → alulra
gap: 1rem;                  → elemek közötti távolság
flex: 1;                    → egyenlő szélességűek
flex-wrap: wrap;            → sortörés ha nem fér el
```

---

## 2. rész: JavaScript (script.js)

Nyisd meg a `script.js` fájlt. Oldd meg a feladatokat a `// --- IDE ÍRD ---` helyekre.

| # | Feladat | Kulcs JS tudás |
|---|---------|---------------|
| 0 | `console.log("neved")` | Konzol használata |
| 5a | Gombra kattintás → szöveg megváltozik | `elem.textContent = "szöveg"` |
| 5b | Gombra kattintás → háttérszín változik | `elem.style.backgroundColor = "szín"` |
| 5c | Számláló: +1 / -1 gombok | Változó növelése/csökkentése |
| 5d | Input → elem hozzáadása listához | `createElement`, `appendChild`, `.value` |
| 5e | Elem megjelenítése / elrejtése | `style.display = "none"` / `"block"` |

### JS összefoglaló

```javascript
// Változó
var x = 0;

// Elem megkeresése
var elem = document.getElementById("id-neve");

// Szöveg beírása
elem.textContent = "új szöveg";

// CSS módosítása
elem.style.backgroundColor = "red";
elem.style.display = "none";

// Kattintás kezelése
gomb.onclick = function() {
    // amit csináljon
};

// Új elem létrehozása
var li = document.createElement("li");
li.textContent = "szöveg";
lista.appendChild(li);

// Input érték kiolvasása
var nev = input.value;

// Feltétel
if (x === 0) {
    // ha igaz
} else {
    // ha nem igaz
}
```

---

## Beadás

- A kész `style.css` + `script.js` fájlokat
- GitHub-ra

## Értékelés

| Szempont | Súly |
|----------|------|
| Flexbox feladatok (1–4) | 40% |
| JS feladatok (5a–5e) | 50% |
| Bónusz feladatok | 10% |
