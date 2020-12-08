const Employee = require('./Employee');
  //Code to define and export new Engineer class.  
class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return 'Engineer';
  }

  getGithub() {
    return this.github;
  }
};

module.exports = Engineer;