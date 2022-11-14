//Imports libreries
const faker = require("faker");
const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');

Given('I go to losestudiantes home screen', async () => {
    await LoginPage.open();
});

When('I open the login screen', async () => {
    await LoginPage.openLoginScreen();
});

When(/^I fill with email: (.*) and password: (.*)$/, async (email, password) => {
    await LoginPage.setCredentials(email, password);
});

When('I try to login', async () => {
    await LoginPage.login();
    browser.pause(3000);
});

Then(/^I expect to see (.*)$/, error => {
    expect(LoginPage.getErrorMessageLogin()).toHaveTextContaining(error);
    browser.pause(3000);
});

Then('I expect to see the message {stringInDoubleQuotes}', message => {
    expect(LoginPage.getSuccessMessageLogin()).toHaveTextContaining(message);
});

// Register
When('I open the registration screen', async () => {
    await RegisterPage.openRegisterScreen();
});

When(/^I fill with (.*), (.*), (.*), (.*) and (.*)$/, async (nombre, apellido, email, password, password2) => {
    await RegisterPage.setValuesForm(nombre, apellido, email, password, password2);
});

When('I try to register', async () => {
    await RegisterPage.register();
});

Then('I expect to see {stringInDoubleQuotes} in the register', error => {
    expect(RegisterPage.getErrorMessageRegister()).toHaveTextContaining(error);
});

When('I fill with random values to name, lastname, email, password', async () => {
    let password = faker.internet.password();
    await RegisterPage.setValuesForm(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), password, password);
});

Then('I expect to see successful registration message {stringInDoubleQuotes}', message => {
    expect(RegisterPage.getSuccessMessageRegister()).toHaveTextContaining(message);
    browser.pause(1000);
});

Then('I wait', () => {
    browser.pause(1000);
});