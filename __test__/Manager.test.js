const Manager = require("../lib/manager");

describe("Manager", () => {

    describe("Initialization", () => {
        it("should return an object containing the 'name', 'id', 'email', and 'officeNumber' properties when called with the 'new' keyword", () => {
            const obj = new Manager("Andrew", "123", "andrew_test@hotmail.com", "01");

            expect("name" in obj).toEqual(true); 
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        })
    })

    describe("getOfficeNumber", () => {
        it("should return a string 'OfficeNumber' from Manager object", () => {
          const obj = new Manager("Andrew", "123", "andrew_test@hotmail.com", "01");
          const officeNumber = obj.getOfficeNumber();
    
          expect(officeNumber).toEqual("01");
        });
    })

    describe("getRole", () => {
        it("should return a string 'Manager' from Manager object", () => {
          const obj = new Manager("Andrew", "123", "andrew_test@hotmail.com", "01");
          const role = obj.getRole();
    
          expect(role).toEqual("Manager");
        });
    })

})
