# Test log

| ID | Dátum | Tesztelő | Teszt leírása | Várt eredmény | Kapott eredmény | Átment/Megbukott |
|----|-------|----------|---------------|---------------|----------------|------------------|
| T1 | 2023.09.24. | Eperjesi Patrik | A kezdés gomb lenyomása témaválasztás nélkül | Nem lehet interaktálni a gombbal | Nem lehet interaktálni a gombbal | Átment |
| T2 | 2023.09.24. | Eperjesi Patrik | A kezdés gomb lenyomása témaválasztással | Megjelenik az első kérdés | Megjelenik az első kérdés | Átment |
| T3 | 2023.09.24 | Eperjesi Patrik | Json-ben helyesnek jelölt válasz választása | Zöld hátterű lesz a választott gomb | Zöld hátterű lett a választott gomb | Átment
| T4 | 2023.09.24 | Eperjesi Patrik | Json-ben hibásnak jelölt válasz választása | Piros hátterű lesz a választott gomb | Piros hátterű lett a választott gomb | Átment
| T5 | 2023.09.24 | Eperjesi Patrik | Kérdések téma szerinti szűrésének tesztelése | Csak a kijelölt téma kérdései jelennek meg | Csak a kijelölt téma kérdései jelentek meg | Átment |
| T6 | 2023.09.24 | Eperjesi Patrik | Kilépés gomb tesztelése | Minden kérdésnél van lehetőség visszalépni a kezdőképernyőre | Minden kérdésnél van lehetőség visszalépni a kezdőképernyőre | Átment
| T7 | 2023.09.24 | Eperjesi Patrik | Pontszám tesztelése | A helyes válaszokkal megegyező a kapott pontok száma | A helyes válaszokkal megegyező a kapott pontok száma | Átment
| T8 | 2023.09.24 | Eperjesi Patrik | Eredmény kiírása | Eredmény kiírása az utolsó kérdés után | Kiiratta az eredményt | Átment |
| T9 | 2023.09.24 | Eperjesi Patrik | Összes kérdés megjelenítése adott témában | Végigmegy az összes kérdésen az adott témából | Végigment az összes kérdésen az adott témából | Átment |
| T10 | 2023.09.24 | Eperjesi Patrik | Több jó válasz tesztelése | Minden jó válasz beleszámít a pontszámba | Minden jó válasz beleszámít a pontszámba | Átment