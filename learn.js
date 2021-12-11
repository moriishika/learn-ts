// [ -> ] the next text is the result
/*
    Type Annotation
    giving any storage location a type, example : variable, properties, parameters and etc
*/
// ❌ let number : number -> this will make typescript not letting you to read the number variable;
// ✅ you need to assing a value first if you give the variable a type
var number = 0;
console.log(number);
/*
    Type Inference
    Typescript will automatically giving a static type based on the initial value
*/
var angka = 123;
// ❌ angka = "trying to change the value to string" -> Type 'string' is not assignable to type 'number'.
// ✅ only the same type with the initial value is able to reassign the value
angka = 12;
console.log(angka);
var priceAfterDiscount = 100;
var countries = [];
var contryes = [];
// let coordinates : [number, number] = [1,2];
// let coordinates : [number, number] = [[1,2], [1,2]];
var coordinates = [[[1, 2]], [[1, 2]]];
var people = [
    {
        name: "aku",
        grade: 12,
        studies: {
            name: "matematika",
            learnHours: 10
        }
    },
];
