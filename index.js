// /**
//  * fungsi unntuk penjumlahan
//  * @param v1 - untuk nilai pertana dari fungsi penjumlahan yang bertipe data number
//  * @param v2 
//  * @returns - ngembaliin hasil jumlah dengan tipe data number
//  * Logika pembuatan : ini tuh cara kerjanya si fungsi bla bla bala
//  */
// function tambah(v1: number, v2:number){
//     return v1 + v2
// }
// function v1 (){
//     return 1;
// }
// function v2 (){
//     return 2
// }
// console.log(tambah(v1(), v2()))
// let nilai = 'sebuah string';
// nilai = 13;
// console.log(nilai)
function sumTimes(v1, v2, v3) {
    if (v3) {
        return (v1 + v2) * v3;
    }
    return v1 + v2;
}
function nama(v1 = 'pret') {
    console.log(`hello ${v1}`);
}
function createString(v1) {
    return v1;
}
function stringLength(v1) {
    return v1.length;
}
let anArray = [];
function addElement(el) {
    anArray.push(el);
    console.log(el + ' added');
}
function showElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
addElement('halo');
addElement(1);
addElement(true);
showElements(anArray);
console.log(stringLength('galo'));
console.log(sumTimes(1, 2, 3));
console.log(sumTimes(1, 2));
let namaOrangsMentah = ['bob', 'john', 47, 'katekyo'];
let namaOrangsChecked = [];
function checkArrayString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            console.log('the type not string');
        }
        else {
            namaOrangsChecked.push(arr[i]);
        }
    }
}
;
checkArrayString(namaOrangsMentah);
console.log(namaOrangsChecked);
let lalala = [['lala'], []];
for (let i = 0; i < lalala.length; i++) {
    for (let j = 0; j < lalala[i].length; j++) {
        console.log(typeof lalala[i][j]);
    }
}
namaOrangsChecked[namaOrangsChecked.length] = [['lala', 'lala']];
let ningen;
ningen = ['bob', 'laki', 50];
//ini mau karena efek dari type inference nya typescript
let engkau = ['pembaca', 'kelamin relative', 15];
let tup = [1, 2, 3];
// let concatResult: [number, number, number, number, number, number] = tup.concat(tup); // concatRe
function bab(...lala) {
}
let srinum = [];
function showNames(...names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
showNames('saha', 'yak', 'dah', 'lah', 'males');
let items = ['car', 'banana', 'fish'];
console.log();
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];
console.log(result);
let waduk = ['air keruh', 'air keruh'];
let limaAir = ['air', 'air', 'air', 'air', 'air'];
waduk.push(...limaAir);
console.log(waduk);
let dunia = 'world';
let kumpe = [...'halo', ...dunia];
console.log(kumpe);
var Kintil;
(function (Kintil) {
    Kintil[Kintil["Kuat"] = 0] = "Kuat";
    Kintil[Kintil["Lemah"] = 1] = "Lemah";
    Kintil[Kintil["TakBerdaya"] = 2] = "TakBerdaya";
})(Kintil || (Kintil = {}));
console.log(Kintil.Lemah);
