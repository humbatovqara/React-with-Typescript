/*
    Functions
    Default, Optional Params
*/

const add = (num1: number, num2: number) => {
    console.log(num1 + num2)
    // return num1 + num2;
};

add(2, 3);

// Optional Params - ?
const logUser = (firstName: string, lastName?: string) => {
    console.log(firstName + " " + lastName);
};

logUser("Qara", "Humbatov");

// Default Params
const signUser = (firstName: string, lastName = "Lastname") => {
    console.log(firstName + " " + lastName);
};

signUser("Qara"); // İkinci parametr göndərilərsə, default parametr nəzərə alınmır

// Params - Custom, Union, Literal types
type Active = {
    visible: string;
    link: string;
};

const logOutUser = (active: Active) => {
    console.log(active);    
};

logOutUser({
    link: "google.com",
    visible: "true"
})