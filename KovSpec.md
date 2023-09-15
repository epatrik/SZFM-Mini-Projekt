# Követelmény specifikáció

## Jelenlegi helyzet leírása

A Kvíznélküli Mihály Általános Iskolánkban jelenleg csak tankönyvekből és saját füzetben írt jegyzeteikből tudnak a tanulók felkészülni a dolgozataikra. Sok diáknak megfelel ez a módszer, de vannak olyan diákok, akik túl unalmasnak találják a leadott anyagokat és nem tudnak megfelelően felkészülni a dolgozatokra, aminek következtében a jegyeik romlanak. Ennek egy megoldásaként szeretnénk egy kvíz alapú tanulási módszerrel felkelteni a tanulás iránti érdeklődésüket ezeknek a tanulóknak.

## Vágyálom rendszer

Ideális esetben egy egyszerűen átlátható és használható feleletválasztós kvízt akarnánk, ami felkelti a figyelmét azoknak akik használják, és arra törekvik őket, hogy bővebben is utánanézzenek azokra a témákra amik felkeltették érdeklődésüket.

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

## Követelménylista

| ID | Név | Kifejtés |
|----|-----|----------|
| K1 | Átláthatóság | A kvíz egyértelmű legyen használat során, mindenki bármilyen ismerettség hiányában is megfelelően tudja használni a funkciókat. |
| K2 | Vonzó kinézet | Mivel a kvíz főleg gyerekek számára van tervezve nagyon fontos, hogy a weboldalnak szép kinézete legyen. |
| K3 | Kérdések véletlenszerű megjelenítése | A kérdéseknek minden indításkor véletlenszrű sorrendben kell megjelennie egymás után. |
| K4 | 4 válaszlehetőség | Minden kérdéshez legyen négy lehetséges válasz amire rá lehet kattintani. |
| K5 | Válasz helyességének jelzése | Válaszadás után meg kell jeleníteni vizuálisan, hogy az adott válasz helyes vagy helytelen volt. Például a helyes válasz zöld lesz a többi meg piros.|
| K6 | Következő kérdésre lépés | Válaszadás után a következő kérdésre való lépésnek a lehetőségét biztosítani kell. |
| K7 | Végeredmény megjelenítése | A kvíz végén meg kell jeleníteni hogyan teljesített a felhasználó elért pont/max pont vagy százalék formájában. |
| K8 | Újrakezdés gomb | A kvíz végén vagy közben vissza lehessen lépni a kezdő állapotba.
