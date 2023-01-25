const Employee = require("../lib/Employee");

describe("Employee constructor", () => {
    //Arrange
    const name = 'John Doe'
    const id = 0
    const email = 'johndoe@example.com'
    it("Returns an instance of an Employee object ", () => {
        // Act
        const employee = new Employee(name, id, email)
        console.log(employee)
        // Assert
        expect(employee instanceof Employee).toBe(true)
    })
    it("Has employee's role", () => {
        //  Act
        const employee = new Employee(name, id, email);
        //  Assert
        expect(employee.getRole()).toBe("Employee");
    }); 
})