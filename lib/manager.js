const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
      super(name, id, email)
      this.officeNumber = officeNumber;
    }
    // TODO: may need to add git officeNumber 
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;