// NPM Modules
const inquirer = require('inquirer');
const path = require('path');
// Imported Constructors
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Resolve to an absolute path i.e.  docs.
const OUTPUT_DIR = path.resolve(__dirname, 'docs');
//Returns a normalized path by merging two paths together
const outputFileName = path.join(OUTPUT_DIR, 'index.html');
//Renders required page-template
const render = require('./src/page-template.js');
//TeamMembers objects array
const teamMembers = [];


const init = () => {
//Prompt user for employee role then add employee object to employees array
  const createTeam = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'teamMemberChoice',
        message: 'What type of team member do you need to add?',
        choices: [
          'Manager',
          'Engineer',
          'Intern',
          'I do not want to add anymore team members'
        ]
      }
    ])
     //Prompt For Next Employee/Exit
      .then(userChoice => {
        switch (userChoice.teamMemberChoice) {
          case 'Engineer':
            createEngineer();
            break;
          case 'Intern':
            createIntern();
            break;
          case 'Manager':
            createManager();
          default:
            buildTeamHtmlFile();
        }
      })
       // Throws an error, you could also catch it here
      .catch(err => {
        if (err) {
          throw err;
        }
      });
  };
//Function That Generates Manager Queries/Validator Constructors

  const createManager = () => {
    console.log(`Let's build our team!`);
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: `What is ur team Manager's name?`,
        validate: answer => {
          if (answer !== '') {
            return true;
          }
          return 'Select at minimun one character.'
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: `Clarify your team Manager's ID?`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please select a positive number greater than zero.'
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: `What is yo team Manager's email address?`,
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please select a valid email address.'
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNum',
        message: `What is your team Manager's office number?`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please select a positive number greater than nonzero.'
        }
      }
    ])
      .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
        teamMembers.push(manager);
        // Ports Name, Id, Email/Office Number
        console.log(teamMembers);
        createTeam();
      })
      .catch(err => {
        if (err) {
          throw err;
        }; // throws an error..also catch it here

      });
  };
//Function That Generates Engineer Questions/Validator Constructors
  const createEngineer = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your Engineer?',
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please select at minimun one character.";
        }
      },
      {
        type: 'input',
        name: 'engineerId',
        message: `What is your Engineer's ID?`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please select a positive number greater than zero.'
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: `What is your Engineer's email address?`,
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please select a valid email address.'
        }
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: `What is your Engineer's Github Username?`,
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please select at minimun one character.";
        }
      },
    ])
      .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
         // Displays New Object teamMembersArray
        console.log(teamMembers);
        createTeam()
      })
      .catch(err => {
        if (err) {
          throw err;
        } // throws an error, you could also catch it here

      });
  };
//Function That Generates Intern Questions/Validator Constructors
  const createIntern = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: `Enter the intern's name.`,
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please select at minimun one character.";
        }
      },
      {
        type: 'input',
        name: 'internId',
        message: `Please enter the intern's ID.`,
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return 'Please submit a positive number greater than zero.'
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: `Please enter the intern's email address.`,
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please input a valid email address.'
        }
      },
      {
        type: 'input',
        name: 'internSchool',
        message: `Please select the intern's School.`,
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please input at minimun one character.";
        }
      },
    ])
      .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern)
        // Declared Variable Pushs Intern Responses
        console.log(teamMembers);
        createTeam();
      })
      .catch(err => {
        if (err) {
          throw err;
        }; // throws an error, she catch my baseball

      });
  };
  // If Build directory does not exist
  const buildTeamHtmlFile = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
  // Build "OUTPUT" directory
      fs.mkdirSync(OUTPUT_DIR);
    }
   
    fs.writeFileSync(outputFileName, render(teamMembers), 'utf-8');
  };
  // Create Aforementioned HTML file

  createManager();
};
//Initialize Program Then Begin Question Prompt

init();


