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
/*
  Function types
  Parameters and the return value type can be determined
*/
// an example of a simple regular function that return a number
function returnNumber(num) {
    return num;
}
// ❌ Any value other than 'number' is unable to passed as argument
// console.log(returnNumber('a string of anything'));
// ✅ Number type value can be used
console.log(returnNumber(13));
// An example with rest parameter where it only accepts number values
function returnNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num;
}
// ❌ It wouldnt accepts any type of value except numbers
// console.log(returnNumbers('halo','its','me','moriishikaa'))
// ✅ Numbers can be used
console.log(returnNumbers(1, 2, 3, 4, 5, 6));
// a simple arrow function
var returnNomber = function (num) {
    return num;
};
// we can specify the shape of a callback as well
function doSomething(callback) {
    return callback("hallo");
}
doSomething(function (mantap) {
    return mantap;
});
/*
  Void Function
  where the function return undefined or just implicitly return undefined
  void function is usually used for a function that wont return anything
*/
// Explicitly return undefined
function explicitReturn() {
    // return 12; -> ❌ error because the function will return number
    // ✅ it accepts undefined
    return undefined;
}
console.log(explicitReturn());
// Implicitly return undefined by not add any return
function implicitReturn() { }
console.log(explicitReturn());
/*
    Optional Parameters
    using '?' after the name of the parameter to make it optional
 */
function optionalParam(callback) {
    if (callback === undefined) {
        callback = function () {
            return "anytihing";
        };
        return callback;
    }
    return callback();
}
console.log(optionalParam);
console.log(function () {
    return "keren";
});
/*
  Default value parameter
  Use '=' to gives a default value to a parameter
*/
// Because of the default value we dont have to give the type
// ❌ thanks to the type inference
function defaultValueWithType(name, grade) {
    if (name === void 0) { name = "mantap"; }
    if (grade === void 0) { grade = 13; }
    return {
        name: name,
        grade: grade
    };
}
// ✅ this is enough
function defaultValueWithout(name, grade) {
    if (name === void 0) { name = "mantap"; }
    if (grade === void 0) { grade = 13; }
    return {
        name: name,
        grade: grade
    };
}
// Hover the error the type will be 
// string | undefined because default value added to the parameter
// console.log(defaultValueWithout(12, 15)); 
console.log(defaultValueWithout('seorang siswa', 12));
/*
  Union Types
  
*/
