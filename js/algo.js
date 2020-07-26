let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];

/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: " + sum);

/*
Számlálás algoritmusa:

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: " + db);

/*
Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE

legkisebb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám < legkisebb, AKKOR
        legkisebb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: " + biggest);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("The smallest element: " + smallest);

/*
Eldöntés tétele (algoritmusa):

találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HAMIS, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }    
}
console.log("This array contains 5: " + contains);