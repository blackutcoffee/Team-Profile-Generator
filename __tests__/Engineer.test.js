const Engineer = require('../lib/Engineer');

test('Instantiate typeOfInstance', () => {
  const e = new Engineer();
  expect(typeof (e)).toBe('object');
});

test("setGitHUb via Argument Constructor", () => {
  const testValue = "Mack8804";
  const e = new Engineer("Johnny John", 666, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() Returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Johnny John", 666, "test@test.com", "Mack8804");
  expect(e.getRole()).toBe(testValue);
});

test("getGitHub UN via getGithub()", () => {
  const testValue = "Mack8804";
  const e = new Engineer("Johnny John", 666, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});