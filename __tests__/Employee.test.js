const Employee = require('../lib/Employee');

test('Instantiated TEMPLATE Employee', () => {
  const e = new Employee();
  expect(typeof (e)).toBe('object');
});

test('setName of Employee', () => {
  const testValue = 'John David';
  const e = new Employee(testValue);
  expect(e.name).toBe(testValue);
});

test('setID of Employee', () => {
  const testValue = 69;
  const e = new Employee('John David', testValue);
  expect(e.id).toBe(testValue);
});

test('setEmail', () => {
  const testValue = 'test@test.com';
  const e = new Employee('John David', 69, testValue);
  expect(e.email).toBe(testValue);
});

test('Procures Name via getName()', () => {
  const testValue = 'Summer June';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('getID via getName()', () => {
  const testValue = 69;
  const e = new Employee('Summer June', testValue);
  expect(e.getId()).toBe(testValue);
});

test('Gets Email via getName()', () => {
  const testValue = 'test@test.com';
  const e = new Employee('Summer June', 69, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() Returns \"Employee\"', () => {
  const testValue = 'Employee';
  const e = new Employee('Summer June', 69, 'test@test.com');
  expect(e.getRole()).toBe(testValue);
});