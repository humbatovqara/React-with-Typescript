/*
    Type Assertions
*/
var message;
message = "Page Not Found";
// message = 23; // Xəta verəcək - Assertion ilə aldatmaq işə yaramır
var newMessage = message.toLowerCase();
var newMessage2 = message.toLowerCase();
/*
    Object Type
*/
// TS - Type Inference
var emp1 = {
    name: "Nurlan",
    age: 21,
    department: "IT"
};
var emp2 = {
    name: "Ulvi",
    age: 20,
    department: "Teacher"
};
var emp;
emp = {
    name: "Tabriz",
    age: 22,
    department: "Teacher"
};
/*
    Union Type
    (type1 | type2 | type3 | .. | typeN)

    Literal Type
*/
var user;
// local.color.name = "black";
var newUser;
newUser = {
    name: "Qara",
    age: 22,
    role: "admin",
    color: {
        name: "black",
        hex: "#000"
    }
};
