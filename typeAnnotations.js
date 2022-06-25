// tsc - type script compiler
function sayHi(message) {
    console.log(message);
}
sayHi("Hello");
/*
    @typeAnnotations :type
    - Any
    - Number
    - String
    - Boolean
    - Arrays string[], number[], any[]
    - Enum
    - Tuple [type1, type2]
    - Unknown
    - Type Inference?
*/
// -----Static Typing-----
/*
    let x = "string";
    x = 5;
*/
// -----Any-----
/*
    let x;
    x = "string";
*/
// -----String-----
/*
    let x: string;
    x = "string";
*/
// ----Type Inferance: String, Number type----
// let name: string = "Gara"; // Bu formada yazmağa ehtiyac yoxdu. Type inferance asanlıq yaradır
var name2 = "Gara";
var age; // Əgər birbaşa mənimsətmə yoxdursa, tip göstərilməlidir
age = 22;
// -----Any-----
/*
    let a: any;
    a = 5;
    a = "Any String";
    a = false;
*/
// ----Boolean----
/*
    let b: boolean;
    b = true;
*/
// ----Array----
/*
    let myStrArray: string[];
    let myNumArray: number[];
    let myAnyArray: any[];
    myStrArray = ["a", "b", "c"];
    myNumArray = [5, 6, 7];
    myAnyArray = ["a", 5, false];
*/
// ---Enum---
/* enum Color {Red, Black, Blue, White};
let bgColor = Color.Blue;
bgColor = Color.Black; */
// Tuple - fix Array-in (müəyyən size-da olan Array varsa) və Array-da daxil olan elementlərin tipləri bəllidirsə
var error;
error = ["Not Found", 404];
// Unknown = Any
var booleanValue = true;
var t;
booleanValue = t; // Any və Unknown arasındakı fərq, mənimsətmək olur
var notSure;
notSure = "String";
notSure = 12;
notSure = false;
notSure = ["a", "b"];
// booleanValue = notSure; // Any və Unknown arasındakı fərq, mənimsətmək olmur
