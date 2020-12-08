const Manager = require('../lib/Manager');

test('Instantiate typeOfInstance', () => {
  const e = new Manager();
  expect(typeof (e)).toBe('object');
});

test('setOfficeNumber via Parameter', () => {
  const testValue = 100;
  const e = new Manager('John Josh', 33, 'burpsuite@thunderbird.com', testValue);
  expect(e.OfficeNumber()).toBe(testValue);
});

test('getRole() Returns \"Manager\"', () => {
  const testValue = 'Manager';
  const e = new Manager('John Josh', 33, 'burpsuite@thunderbird.com', 100);
  expect(e.getRole()).toBe(testValue);
});

test('getOfficeNumber via getOffice()', () => {
  const testValue = 100;
  const e = new Manager('John Josh', 33, 'burpsuite@thunderbird.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});