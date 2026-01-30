class LoginPage {

    get txtUsername() { return $('~test-Username'); }       // accessibility id do native-demo-app
    get txtPassword() { return $('~test-Password'); }
    get btnLogin() { return $('~btnLogin'); }
    get lnkRegister() { return $('~linkRegister'); }
    get errorMsg() { return $('//*[@text="Username and password do not match any user in this service."]'); }

    async #setUserName(username) {
        await this.txtUsername.setValue(username);
    }
    async #setPassword(password) {
        await this.txtPassword.setValue(password);
    }
    async #clickLogin() {
        await this.btnLogin.click();
    }
    async #clickRegister() {
        await this.lnkRegister.click();
    }
    async login(username, password) {
        await this.setUserName(username);
        await this.setPassword(password);
        await this.clickLogin();
    }
    async goToRegister() {
        await this.clickRegister();
    }
    async getErrorMessage() {
        return await this.errorMsg.getText();
    }
}

module.exports = new LoginPage();