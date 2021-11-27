const { expect } = require('@jest/globals');
const Employee = require('../lib/employee.js');

test('employee gets name', () => {
    const employee = new Employee('Jerry', '2', 'jerry@aol.com')
    expect(employee.getName()).toBe('Jerry')
});

//test id
test('employee gets id', () => {
    const employee = new Employee('Jerry', '2', 'jerry@aol.com')
    expect(employee.getId()).toBe('2')
});

//test email
test('gets employees email', () => {
    const employee = new Employee('Jerry', '2', 'jerry@aol.com')
    expect(employee.getEmail()).toBe('jerry@aol.com')
});