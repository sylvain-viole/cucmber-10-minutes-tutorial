const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    return today === 'Friday' ? 'TGIF' : 'Nope'
}

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
})


When('I ask wether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today)
});


Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});