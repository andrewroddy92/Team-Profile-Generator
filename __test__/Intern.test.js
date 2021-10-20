const Intern = require("../lib/intern");

describe("Intern", () => {

    describe("Initialization", () => {
        it("should return an object containing the 'name', 'id', 'email', and 'school' properties when called with the 'new' keyword", () => {
            const obj = new Intern("Andrew", "123", "andrew_test@hotmail.com", "GATech");

            expect("name" in obj).toEqual(true); 
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        })
    })

    describe("school", () => {
        it("should return a string 'school' from Intern object", () => {
          const obj = new Intern("Andrew", "123", "andrew_test@hotmail.com", "GATech");
          const school = obj.getSchool();
    
          expect(school).toEqual("GATech");
        });
    })

    describe("getRole", () => {
        it("should return a string 'Intern' from Intern object", () => {
          const obj = new Intern("Andrew", "123", "andrew_test@hotmail.com", "GATech");
          const role = obj.getRole();
    
          expect(role).toEqual("Intern");
        });
    })

})
