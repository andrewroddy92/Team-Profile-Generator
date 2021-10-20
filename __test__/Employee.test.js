const Employee = require("../lib/employee"); 

describe("Employee", () => { 

    describe("Initialization", () => { 

      it("should return an object containing the 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
        const obj = new Employee("Andrew", "123", "andrew_test@hotmail.com");
  
        expect("name" in obj).toEqual(true); 
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
      });
  
    });
  
    describe("getName", () => {
      it("should return a string 'name' from Employee object", () => {
        const obj = new Employee("Andrew", "123", "andrew_test@hotmail.com");
        const name = obj.getName();
  
        expect(name).toEqual("Andrew");
      });
    });
  
    describe("getId", () => {
      it("should return a string 'id' from Employee object", () => {
        const obj = new Employee("Andrew", "123", "andrew_test@hotmail.com");
        const id = obj.getId();
  
        expect(id).toEqual("123");
      });
    });
  
    describe("getEmail", () => {
      it("should return a string 'email' from Employee object", () => {
        const obj = new Employee("Andrew", "123", "andrew_test@hotmail.com");
        const email = obj.getEmail();
  
        expect(email).toEqual("andrew_test@hotmail.com");
      });
    });

    describe("getRole", () => {
        it("should return a string 'Employee' from Employee object", () => {
          const obj = new Employee("Andrew", "123", "andrew_test@hotmail.com");
          const role = obj.getRole();
    
          expect(role).toEqual("Employee");
        });
      });

  });
  