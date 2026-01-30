const assert = require('assert');
const HomePage = require('../pages/home.page');
const LoginPage = require('../pages/login.page');
const loginData = require('../../data/login.data.json');

describe('Login Tests - Native Demo App', () => {

    beforeEach(async () => {
        await driver.reset();
    });

    it('Deve logar com sucesso', async () => {
        const data = loginData.loginSuccess;
        await LoginPage.login(data.username, data.password);
        const welcome = await HomePage.getWelcomeMessage();
        assert.strictEqual(welcome, 'Bem-vindo!');
    });

    it('Não deve logar com usuário inválido', async () => {
        const data = loginData.loginFailInvalidUser;
        await LoginPage.login(data.username, data.password);
        const error = await LoginPage.getErrorMessage();
        assert.strictEqual(error, 'Usuário ou senha inválidos');
    });

    it('Não deve logar com usuário não informado', async () => {
        const data = loginData.loginFailEmptyUsername;
        await LoginPage.login(data.username, data.password);
        const error = await LoginPage.getErrorMessage();
        assert.strictEqual(error, 'Usuário não informado');
    });

    it('Deve navegar para a tela de cadastro', async () => {
        await LoginPage.goToRegister();
        const successMessage = await (await require('../pages/register.page').txtName).isDisplayed();
        assert.strictEqual(successMessage, true);
    });
});