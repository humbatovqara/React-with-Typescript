/*
    Functions
    Default, Optional Params
*/
var add = function (num1, num2) {
    console.log(num1 + num2);
    // return num1 + num2;
};
add(2, 3);
// Optional Params - ?
var logUser = function (firstName, lastName) {
    console.log(firstName + " " + lastName);
};
logUser("Qara", "Humbatov");
// Default Params
var signUser = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Lastname"; }
    console.log(firstName + " " + lastName);
};
signUser("Qara"); // İkinci parametr göndərilərsə, default parametr nəzərə alınmır
var logOutUser = function (active) {
    console.log(active);
};
logOutUser({
    link: "google.com",
    visible: "true"
});
