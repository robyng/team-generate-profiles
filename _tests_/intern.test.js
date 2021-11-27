const { expect } = require('@jest/globals');
const Intern = require('../lib/intern.js');

//test school
test('intern gets school', () => {
    const intern = new Intern('Jerry', '2', 'jerry@aol.com', 'UCB')
    expect(intern.getSchool()).toBe('UCB')
});