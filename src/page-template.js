const generateTeamHtml = team => {
//Ascertaines Hardcoded Manager's Name, ID, Email Plus Office
  const generateMangerHtml = manager => {
    return `
    <div class="col-4">
        <div class="card employee-card m-2">
          <div class="card-header bg-secondary text-light">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">${manager.getId()}</li>
              <li class="list-group-item">Email:
                <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
              </li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };
//Ascertaines Hardcoded Engineer's Name, ID, Email Plus Office
  const generateEngineerHtml = engineer => {
    return `
    <div class="col-4">
        <div class="card employee-card m-2">
          <div class="card-header bg-secondary text-light">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email:
                <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
              </li>
              <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };
//Ascertaines Hardcoded Inter's Name, ID, Email Plus Office
  const generateInternHtml = intern => {
    return `
    <div class="col-4">
        <div class="card employee-card m-2">
          <div class="card-header bg-secondary text-light">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email:
                <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
              </li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  const html = [];
//Pushs Roles Individually Then Returns Concatenated Joinder 
  html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateMangerHtml(manager))
  );
  html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(enginner => generateEngineerHtml(enginner))
    .join('')
  );
  html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateInternHtml(intern))
    .join('')
  );

  return html.join('');

};

module.exports = team => {
  return `
  <!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <title>My DEV Team</title>
</head>
<!-- Returns Newly Generated HTML From Previous Joinder via Team Export -->

<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 jumbotron mb-3 team-heading bg-primary text-light">
        <h1 class="text-center">My DEV Team</h1>
        <hr class="my-4">
        <p class="text-center">This HTML file was dynamically generated using this very Node.js command line application</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row d-flex justify-content-center">
      ${generateTeamHtml(team)}
    </div>
  </div>


</body>

</html>
`;
};