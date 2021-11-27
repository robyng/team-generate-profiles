const { expect } = require('@jest/globals');
const Engineer = require('../lib/engineer.js');

test('engineer gets name', () => {
    const engineer = new Engineer('Jerry', '2', 'jerry@aol.com', 'jerryg')
    expect(engineer.getName()).toBe('Jerry')
});

//test id
test('engineer gets id', () => {
    const engineer = new Engineer('Jerry', '2', 'jerry@aol.com', 'jerryg')
    expect(engineer.getId()).toBe('2')
});

//test email
test('gets engineers email', () => {
    const engineer = new Engineer('Jerry', '2', 'jerry@aol.com', 'jerryg')
    expect(engineer.getEmail()).toBe('jerry@aol.com')
});

//test github
test('gets github profile', () => {
    const engineer = new Engineer('Jerry', '2', 'jerry@aol.com', 'jerryg')
    expect(engineer.getGithub()).toBe('jerryg')
});