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

## Jelenlegi üzleti folyamatok leírása

Jelenleg ha a tanárok kvízt szeretnének a diákoknak adni

1. Otthon külön össze kell írniuk kérdéseket - megvan a kérdéssor
2. Word dokumentumban összeállítani egy saját kérdéssort - kérdések hozzáadása a kvízhez
3. Kinyomtatni azt otthon vagy az iskolai nyomtatón
4. Kiosztani a papírokat az osztályban - több felhasználó egyszerre használhatja
5. Beszedni a diákoktól
6. Hazavinni
7. Otthon egyesével magának kijavítani - eredmény megjelenítése

Ez egy lassú, hosszadalmas és költséges folyamat, melyet egy alkalmazás jelentősen leegyszerüsítene.

## Igényelt üzleti folyamatok leírása

1. Kvíz Kitöltése

- Cél: A felhasználók kitölthetik a kvízt, válaszokat adnak a kérdésekre, majd az oldal kiértékeli a válaszaikat és megjeleníti az eredményüket.
- Leírás:
- A felhasználók elérhetik a weboldalt és kiválaszthatják a kitöltendő kvízt.
  - A felhasználók a kérdésekre válaszokat adnak.
  - Az oldal nyomon követi a válaszokat és ellenőrzi, hogy helyesek-e.
  - Az oldal megjeleníti az eredményt, például a helyes válaszok számát és az elért pontszámot.

2. Kvíz Készítése

- Cél: Adminisztrátorok létrehozhatnak új kvízeket és kérdéseket a weboldalon.
- Leírás:
  - Csak adminisztrátoroknak van hozzáférésük ehhez a funkcióhoz.
  - Az adminisztrátorok létrehozhatnak új kérdéseket az adott témakörökön belül, valamint meghatározhatják a helyes válaszokat.

3. Eredmények Megjelenítése

- Cél: Az oldal megjeleníti a kvíz kitöltése során elért eredményeket a felhasználók számára.
- Leírás:
  - Az oldal azonnal megjeleníti az eredményt, amint a felhasználó befejezte a kvíz kitöltését.
  - Az eredmény tartalmazza a helyes válaszok számát és az elért pontszámot.
  - Az eredmény megjelenítése után a felhasználók visszaléphetnek az oldal kezdőlapjára vagy választhatnak egy újabb kvízt a kitöltéshez.

## Használati esetek

A felhasználó kiválasztja a kvíz témáját és elkezdi annak megoldását. A kvíz megoldása folyamán bármikor ki lehet lépni. Amikor a felhasználó megválaszolt adott számú kérdést, a kvíz befejeződik és lehetőség van újbóli megoldására

![Eset](Image/funkspec_hasznalati_eset1.png)

## Képernyő tervek
