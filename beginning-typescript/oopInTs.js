/*
    OOP in TypeScript
*/
var Employee = /** @class */ (function () {
    function Employee(empCode, name, age) {
        this.getSalary = function (empCode) {
            return 10000;
        };
    }
    return Employee;
}());
var newEmployee = new Employee(1, "Gara", 22);
console.log(newEmployee);
