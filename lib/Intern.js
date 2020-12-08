const Employee = require('./Employee');
  //Code to define and Export new Intern class. 
class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return this.school;
  }
};

module.exports = Intern;