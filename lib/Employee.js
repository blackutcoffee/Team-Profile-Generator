class Employee {
  //Employee Code Constructor Defined Then Exports Template class.  HINT: This Employee Template Should Be Imported For Other Roles.
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
  
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  getRole() {
    return 'Employee';
  }
};

module.exports = Employee;