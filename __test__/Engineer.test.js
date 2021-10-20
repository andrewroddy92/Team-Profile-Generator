const Engineer = require("../lib/engineer");

describe("Engineer", () => {

    describe("Initialization", () => {
        it("should return an object containing the 'name', 'id', 'email', and 'github' properties when called with the 'new' keyword", () => {
            const obj = new Engineer("Andrew", "123", "andrew_test@hotmail.com", "andrew");

            expect("name" in obj).toEqual(true); 
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        })
    })

    describe("getGithub", () => {
        it("should return a string 'github' from Engineer object", () => {
          const obj = new Engineer("Andrew", "123", "andrew_test@hotmail.com", "andrew");
          const github = obj.getGithub();
    
          expect(github).toEqual("andrew");
        });
    })

    describe("getRole", () => {
        it("should return a string 'Engineer' from Engineer object", () => {
          const obj = new Engineer("Andrew", "123", "andrew_test@hotmail.com", "andrew");
          const role = obj.getRole();
    
          expect(role).toEqual("Engineer");
        });
    })

})
