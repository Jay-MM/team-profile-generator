const Manager = require('../lib/Manager')
// Arrange
const name = "John Doe"
const  id = 1
const email = "johndoe@example.com"
describe("Manager constructor", () => {
    it("Has an office phone number", () => {
        // Act
        const expectedOfficeNumber = 369;
        const manager = new Manager(name, id, email, expectedOfficeNumber);
        // Assert
        expect(manager.officeNumber).toBe(expectedOfficeNumber);
    });
});