const { TestWatcher } = require('jest');
const randomNumber = require('../lib/random.js');

test('gets random number between 1 to 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});