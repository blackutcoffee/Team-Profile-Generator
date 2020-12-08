const Intern = require('../lib/Intern');

test('Instantiate typeOfInstance', () => {
  const e = new Intern();
  expect(typeof (e)).toBe('object');
});

test("SetSchool via Constructor", () => {
  const testValue = "John Clark";
  const e = new Intern("John Clark", 137, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() Returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("John Clark", 137, "test@test.com", "Leander High School");
  expect(e.getRole()).toBe(testValue);
});

test("GetSchool via getSchool()", () => {
  const testValue = "Leander High School";
  const e = new Intern("John Clark", 137, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});