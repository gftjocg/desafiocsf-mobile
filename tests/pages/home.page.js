class HomePage {

    get welcomeMessage() { return $('~welcomeMessage'); }
    get btnLogout() { return $('~btnLogout'); }

    async #clickLogout() {
        await this.btnLogout.click();
    }
    async getWelcomeMessage() {
        return this.welcomeMessage.getText();
    }
    async logout() {
        await this.clickLogout();
    }
}

module.exports = new HomePage();