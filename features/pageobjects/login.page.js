

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[name="password"]');
    }

    get btnLogin() {
        return $('button.loginButton');
    }

    get btnClose() {
        return $('button=Cerrar');
    }

    get btnSubmitLogin() {
        return $('button=Ingresar');
    }

    get modaleNoticeAlert() {
        return $('.notice.alert.alert-danger');
    }

    get btnUniversityChat() {
        return $('(//button[@class="btn btn-success"])[1]');
    }

    async setCredentials(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    async login() {
        await this.btnSubmitLogin.click();
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    async openLoginScreen() {
        await this.btnLogin.waitForExist(5000);
        await this.btnLogin.waitForDisplayed(5000);
        await this.btnLogin.click();
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    async getErrorMessageLogin() {
        await this.modaleNoticeAlert.waitForDisplayed(5000);
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
        return this.modaleNoticeAlert.getText();
    }

    async getSuccessMessageLogin() {
        await this.btnUniversityChat.waitForExist(5000);
        await this.btnUniversityChat.waitForDisplayed(5000);
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
        return this.btnUniversityChat.getText();
    }

    async open() {
        await super.open('uniandes');
        browser.saveScreenshot(`./results/screenshots/${this.getCurrentTimestamp}.png`);
        await browser.pause(2000);
    }

    get getCurrentTimestamp() {
        return Math.floor(Date.now() / 1000);
    };
}

module.exports = new LoginPage();
