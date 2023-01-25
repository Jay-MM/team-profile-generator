const Engineer = require("../lib/Engineer")
// Arrange
const name = 'Jane Doe'
const id = 2
const email = 'janedoe@example.com'

describe("Engineer constructor", () => {
    it("Has the correct name", () => {
        // Act
        const engineer = new Engineer(name, id, email)
        // Assert
        expect(engineer.name).toBe(name)
    })
    it("Has a Github username", () => {
        // Arrange
        const github = 'janeDoe99'
        // Act 
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer)
        // Assert
        expect(engineer.getGithub()).toBe(github);
    })

})