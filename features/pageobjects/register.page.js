
const Page = require('./page');
// const Utils = require('../../support/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputFirstName() {
        return $('input[name="firstname"]');
    }

    get inputLastName() {
        return $('input[name="lastname"]');
    }

    get inputEmail() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[name="password"]');
    }

    get inputPassword2() {
        return $('input[name="password2"]');
    }

    get inputCheckAccept() {
        return $("//input[@name='accept']");
    }

    get aLinkRegister() {
        return $("//a[normalize-space()='Regístrate']");
    }

    get btnSubmitRegister() {
        return $("//button[normalize-space()='Registrarse']");
    }

    get divsNoticeAlert() {
        return $("//div[@class='notice alert alert-danger']");
    }

    get messageSuccess() {
        return $('(//h2[@class="swal2-title"])[1]');
    }

    async openRegisterScreen() {
        await this.aLinkRegister.waitForExist(5000);
        await this.aLinkRegister.waitForDisplayed(5000);
        await this.aLinkRegister.click();
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    async setValuesForm(firstname, lastname, email, password, password2) {
        await this.inputCheckAccept.click();
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPassword2.setValue(password2);
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    async register() {
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await this.btnSubmitRegister.click();
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(5000);
    }

    async getErrorMessageRegister() {
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await this.divsNoticeAlert.waitForDisplayed(5000);
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
        return this.divsNoticeAlert.getText();
    }

    async getSuccessMessageRegister() {
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await this.messageSuccess.waitForDisplayed(5000);
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
        return this.messageSuccess.getText();
    }

    async open() {
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await super.open('uniandes');
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    get getCurrentTimestamp() {
        return Math.floor(Date.now() / 1000);
    };
}

module.exports = new RegisterPage();
