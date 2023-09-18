# Funkcionális specifikáció

## Jelenlegi helyzet leírása

A Kvíznélküli Mihály Általános Iskola szeretne egy kvízt készíttetni annak érdekében, hogy órákon vagy azonokon kívül gyakorolni tudjanak különböző órákra.
Jelenleg papír alapon történnek a kvízek megírása nyomtatott dokumentumokon.
Ennek megoldásaként szeretnének egy kvízt egy webes felületen amit többször is újrapróbálhatnak.

## Vágyálom rendszer

A cél egy olyan webes felület létrehozása, ami 
- Kényelmesen használható
- Több felhasználó is tudja egy időben használni
- Különböző témák közül lehet választani kvíz megkezdése előtt
- Érdekes kérdéseket tesz fel

## Követelménylista
A követelménylista felsorolva (részletesebben a követelmény specifikációban):
- K1 - Átláthatóság
- K2 - Vonzó megjelenés
- K3 - Kérdések véletlenszerű megjelenítése
- K4 - 4 válaszlehetőség
- K5 - Válasz helyességének jelzése
- K6 - Következő kérdésre lépés
- K7 - Végeredmény megjelenítése 
- K8 - Újrakezdés gomb
- K9 - Téma választása 

A követelmény specifikációban leírtakból a minimális funkcionális követelmények egy használható kvízhez a K5, K6 és K7. Csak ezek használatával egy egyszerű, de nem felhasználóbarát kvízt kapunk.

A K1, K2, K3, K4, K8, K9 fontos funkciók amelyek bár nem szükségesek egy működő kvízhez, hiányuk nagyban károsítják a kvíz újrajátszhatóságát és minőségét.

## Jelenlegi üzleti folyamatok modellje

## Igényelt üzleti folyamatok modellje

## Használati esetek

A felhasználó kiválasztja a kvíz témáját és elkezdi annak megoldását. A kvíz megoldása folyamán bármikor ki lehet lépni. Amikor a felhasználó megválaszolt adott számú kérdést, a kvíz befejeződik és lehetőség van újbóli megoldására

![Eset](Image/funkspec_hasznalati_eset1.png)

## Képernyő tervek