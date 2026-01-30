class RegisterPage {

    get txtName() { return $('~inputName'); }
    get textEmail() { return $('~inputEmail'); }
    get txtPassword() { return $('~inputPassword'); }
    get btnRegister() { return $('~btnRegister'); }
    get successMessage() { return $('~successMessage'); }
    get errorMessage() { return $('~errorMessage'); }

    async #setName(name) {
        await this.txtName.setValue(name);
    }
    async #setEmail(email) {
        await this.textEmail.setValue(email);
    }
    async #setPassword(password) {
        await this.txtPassword.setValue(password);
    }
    async #clickRegister() {
        await this.btnRegister.click();
    }
    async getSuccessMessage() {
        return this.successMessage.getText();
    }
    async getErrorMessage() {
        return this.errorMessage.getText();
    }
    async register(name, email, password) {
        await this.setName(name);
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickRegister();
    }
}

module.exports = new RegisterPage();