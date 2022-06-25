/* 
    OOP in TypeScript
*/

/*
    - Interfaces
    - Extending Interfaces
*/

/* interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    readonly empCode: number; // read only
}

let newEmployee: Employee;

newEmployee = {
    empCode: 123,
    name: "Gara",
    age: 22
} */

/*
    - Implementing Interfaces
*/

interface IEmployee {
    empCode: number;
    name: string;
    age: number;
    getSalary: (number) => number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;
    age: number;

    constructor(empCode: number, name: string, age: number) {

    }

    getSalary = (empCode: number) => {
        return 10000;
    }
}

let newEmployee = new Employee(1, "Gara", 22);

console.log(newEmployee);
