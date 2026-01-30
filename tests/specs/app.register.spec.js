const assert = require('assert');
const RegisterPage = require('../pages/register.page');
const RegisterData = require('../../data/register.data.json');

describe('Cadastro - Native Demo App', () => {

    beforeEach(async () => {
        await driver.reset();
    });

    it('Deve cadastrar com sucesso', async () => {
        const data = RegisterData.registerSuccess;
        await RegisterPage.register(data.username, data.email, data.password);
        const message = await RegisterPage.getSuccessMessage();
        assert.strictEqual(message, 'Cadastro realizado com sucesso!');
    });

    it('Não deve cadastrar com email já existente', async () => {
        const data = RegisterData.registerFailEmailExists;
        await RegisterPage.register(data.username, data.email, data.password);
        const message = await RegisterPage.getErrorMessage();
        assert.strictEqual(message, 'Email já cadastrado.');
    });

    it('Não deve cadastrar com senha inválida', async () => {
        const data = RegisterData.registerFailInvalidPassword;
        await RegisterPage.register(data.username, data.email, data.password);
        const message = await RegisterPage.getErrorMessage();
        assert.strictEqual(message, 'Senha inválida.');
    });
});