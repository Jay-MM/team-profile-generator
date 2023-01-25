const Intern = require('../lib/Intern')
// Arrange
const name = 'Jesus Marquez'
const id = 3
const email = 'jesusmarquez@example.com'

describe("Intern constructor", () => {
    it("Has the correct id", () => {
        // Act
        const intern = new Intern(name, id, email)
        console.log(intern)
        // Assert
        expect(intern.id).toBe(id)
    })
    it("Has employee's role.", () => {
        // Arrange
        const title = "Intern";
        // Act
        const intern = new Intern(name, id, email);
        // Assert
        expect(intern.getRole()).toBe(title);
    });
})