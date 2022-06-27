/*
    Type Assertions
*/

let message;
message = "Page Not Found";
// message = 23; // Xəta verəcək - Assertion ilə aldatmaq işə yaramır

const newMessage = (<string>message).toLowerCase();
const newMessage2 = (message as string).toLowerCase();

/*
    Object Type
*/

// TS - Type Inference
let emp1 = {
    name: "Nurlan",
    age: 21,
    department: "IT"
}

let emp2: {
    name: string;
    age: number;
    department: string;
} = {
    name: "Ulvi",
    age: 20,
    department: "Teacher"
}

let emp: {
    name: string;
    age: number;
    department: string;
}

emp = {
    name: "Tabriz",
    age: 22,
    department: "Teacher"
}

/*
    Union Type
    (type1 | type2 | type3 | .. | typeN)

    Literal Type
*/

let user: {
    name: string;
    age: number | string;
    role: "admin" | "user"; // literal types
};

// user.role = "admin"

/*
    Custom Type
*/
type Color = {
    name: "black" | "white";
    hex: "#000" | "#fff";
};

type local = {
    name: string;
    age: number | string;
    role: "admin" | "user"; // literal types
    color: Color;
}

// local.color.name = "black";

let newUser: local;

newUser = {
    name: "Qara",
    age: 22,
    role: "admin",
    color: {
        name: "black",
        hex: "#000"
    }
}