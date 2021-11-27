const { expect } = require('@jest/globals');
const Manager = require('../lib/manager.js');

//test school
test('manager gets office number', () => {
    const manager = new Manager('Jerry', '2', 'jerry@aol.com', '123')
    expect(manager.getOfficeNum()).toBe('123')
});