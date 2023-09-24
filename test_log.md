# Test log

| ID | Dátum | Tesztelő | Teszt leírása | Várt eredmény | Kapott eredmény | Átment/Megbukott |
|----|-------|----------|---------------|---------------|-----------------|------------------|
| T1 | 2023.09.24 | Eperjesi Patrik | A kezdés gomb lenyomása témaválasztás nélkül | Nem lehet interaktálni a gombbal | Nem lehet interaktálni a gombbal | Átment |
| T2 | 2023.09.24 | Eperjesi Patrik | A kezdés gomb lenyomása témaválasztással | Megjelenik az első kérdés | Megjelenik az első kérdés | Átment |
| T3 | 2023.09.24 | Eperjesi Patrik | Json-ben helyesnek jelölt válasz választása | Zöld hátterű lesz a választott gomb | Zöld hátterű lett a választott gomb | Átment |
| T4 | 2023.09.24 | Eperjesi Patrik | Json-ben hibásnak jelölt válasz választása | Piros hátterű lesz a választott gomb | Piros hátterű lett a választott gomb | Átment |
| T5 | 2023.09.24 | Eperjesi Patrik | Kérdések téma szerinti szűrésének tesztelése | Csak a kijelölt téma kérdései jelennek meg | Csak a kijelölt téma kérdései jelentek meg | Átment |
| T6 | 2023.09.24 | Eperjesi Patrik | Kilépés gomb tesztelése | Minden kérdésnél van lehetőség visszalépni a kezdőképernyőre | Minden kérdésnél van lehetőség visszalépni a kezdőképernyőre | Átment |
| T7 | 2023.09.24 | Eperjesi Patrik | Pontszám tesztelése | A helyes válaszokkal megegyező a kapott pontok száma | A helyes válaszokkal megegyező a kapott pontok száma | Átment |
| T8 | 2023.09.24 | Eperjesi Patrik | Eredmény kiírása | Eredmény kiírása az utolsó kérdés után | Kiiratta az eredményt | Átment |
| T9 | 2023.09.24 | Eperjesi Patrik | Összes kérdés megjelenítése adott témában | Végigmegy az összes kérdésen az adott témából | Végigment az összes kérdésen az adott témából | Átment |
| T10 | 2023.09.24 | Eperjesi Patrik | Több jó válasz tesztelése | Minden jó válasz beleszámít a pontszámba | Minden jó válasz beleszámít a pontszámba | Átment |
| T11 | 2023.09.24 | Vadon Dániel | Megnyílik-e az oldalt a böngészőben | Megnyílik az oldal | Megnyílt az oldal | Átment |
| T12 | 2023.09.24 | Vadon Dániel | Minden kifér-e a képernyőre | Minden kifér a képernyőre | Minden kifért a képernyőre | Átment |
| T12 | 2023.09.24 | Vadon Dániel | Nem lógnak-e egymásba az elemek | Nem lógnak egymásba az elemek | Nem lógtak egymásba az elemek | Átment |
| T13 | 2023.09.24 | Vadon Dániel | Téma gomb használható-e | Téma gombok reagálnak kattintásra | Téma gombok reagáltak kattintásra | Átment |
| T14 | 2023.09.24 | Vadon Dániel | Téma választása | Kiválasztott téma ki lesz jelölve | Kiválasztott téma ki lett jelölve | Átment |
| T15 | 2023.09.24 | Vadon Dániel | Téma újraválasztása | Csak az újonnan kiválasztott téma lesz kijelölve | Csak az újonnan kiválasztott téma lett kijelölve | Átment |
| T16 | 2023.09.24 | Vadon Dániel | Témával indítás | Választott témakörből ad kérdéseket | Választott témakörből adott kérdéseket | Átment |
| T17 | 2023.09.24 | Vadon Dániel | Téma gombok eltűnnek-e | Indítás után a téma gombok eltűnnek | Indítás után a téma gombok eltűntek | Átment |
| T18 | 2023.09.24 | Vadon Dániel | Adott kérdésnél minden hozzárendelt válasz megjelenik-e | Minden válaszlehetőség megjelenik | Minden válaszlehetőség megjelent | Átment |
| T19 | 2023.09.24 | Vadon Dániel | Válaszok véletlenszerűen jelennek-e meg | A válaszok véletlenszerűen jelennek meg | A válaszok véletlenszerűen jelentek meg | Átment |
| T20 | 2023.09.24 | Vadon Dániel | Kérdések véletlenszerűen jelennek-e meg | A kérdések véletlenszerűen jelennek meg | A kérdések véletlenszerűen jelentek meg | Átment |
| T21 | 2023.09.24 | Vadon Dániel | Következő gomb megjelenik-e | Válaszadás után megjelenik a Következő gomb | Válaszadás után megjelent a Következő gomb | Átment |
| T22 | 2023.09.24 | Vadon Dániel | Következő gomb eltűnik-e | Következő gomb eltűnik használat után | Következő gomb eltűnt használat után | Átment |
| T23 | 2023.09.24 | Vadon Dániel | Következő gomb láthatósága | A Következő gomb nem látható kérdés megválaszolása közben | A Következő gomb nem volt látható kérdés megválaszolása közben | Átment |
| T24 | 2023.09.24 | Vadon Dániel | Következő gomb működése | Használat után megjelenik a következő kérdés | Használat után megjelent a következő kérdés | Átment |
| T25 | 2023.09.24 | Vadon Dániel | Válaszadás | Válasz választás után nem lehet új választ választani | Válasz választás után nem lehetett új választ választani | Átment |
| T26 | 2023.09.24 | Vadon Dániel | Kilépés funkció tesztelése | Lenullázza az elért pontszámot és visszaállítja a kérdéslistát | Lenulláztza az elért pontszámot és visszaállította a kérdéslistát | Átment |
| T27 | 2023.09.24 | Vadon Dániel | Kilépés gomb eltűnik-e | Használat után eltűnik a Kilépés gomb | Használat után eltűnt a Kilépés gomb | Átment |
| T28 | 2023.09.24 | Vadon Dániel | Bezárás gomb megjelenik-e az eredménykor | Bezárás gomb megjelenik az eredménykor | Bezárás gomb megjelent az eredménykor | Átment |
| T29 | 2023.09.24 | Vadon Dániel | Bezárás gomb bezárja-e az eredményt | Bezárás gomb bezárja az eredményt | Bezárás gomb bezárta az eredményt | Átment |
| T30 | 2023.09.24 | Vadon Dániel | Bezárás gomb eltűnik-e | Használat után eltűnik a Bezárás gomb | Használat után eltűnt a Bezárás gomb | Átment |
| T31 | 2023.09.24 | Csepreghy Tamás | Háttérszín változás jó válasz esetén zöld színre | Zöldre változik a háttérszín jó válasz esetén | Zöldre változott a háttérszín jó válasz esetén | Átment |
| T32 | 2023.09.24 | Csepreghy Tamás | Háttérszín változás rossz válasz esetén piros színre | Pirosra változik a háttérszín rossz válasz esetén | Pirosra változott a háttérszín rossz válasz esetén | Átment |
| T33 | 2023.09.24 | Csepreghy Tamás | Kiválasztott téma gomb háttér- és betűszín megváltozása | Megváltozik a kiválasztott téma háttér- és betűszíne | Megváltozott a kiválasztott téma háttér- és betűszíne | Átment |
| T34 | 2023.09.24 | Csepreghy Tamás | Kezdés gomb háttér- és betűszínének megváltozása amikor rajta van a kurzor, ha nincs téma kiválasztva | Nem változik meg a kezdés gomb hátter- és betűszíne, ha nincs kiválasztva téma | Nem változott meg a kezdés gomb háttér- és betűszíne | Átment |
| T35 | 2023.09.24 | Csepreghy Tamás | Válaszlehetőségek keret- és háttérszín megváltozása, ha a kurzor rajta van | Megváltozik a keret- és háttérszín | Megváltozott a keret- és háttérszín | Átment |
| T36 | 2023.09.24 | Csepreghy Tamás | Vissza gomb háttérszín megváltozása, ha a kurzor rajta van | Megváltozik a háttérszín | Megváltozott a háttérszín | Átment |
| T37 | 2023.09.24 | Csepreghy Tamás | Következő gomb háttérszín megváltozása, ha a kurzor rajta van | Megváltozik a háttérszín | Megváltozott a háttérszín | Átment |
| T38 | 2023.09.24 | Csepreghy Tamás | A gombok szövegei nem-e lógnak ki a keretükből méretváltozás esetén | Nem lógnak ki a szövegek | Nem lógtak ki a szövegek | Átment
| T39 | 2023.09.24 | Csepreghy Tamás | Betűtípus beimportálása és felhasználása css-ben | A beimportált betűtípus használható és működik | A beimportált betűtípus működött | Átment |
| T40 | 2023.09.24 | Csepreghy Tamás | Az ablak átméretezése esetén a kvíz alkalmazkodik az új felbontáshoz | Alkalmazkodik az új felbontáshoz | Alkalmazkodott az új felbontáshoz | Átment | 