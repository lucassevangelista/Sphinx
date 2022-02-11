/* global Given, When, Then */

import { logar } from  '../pageobjects/LoginPage'
import { responseLogin } from '../requestResponse/LoginRR'

let loginRes = null;

Given("que eu faca a requisicao para o endpoint login", () => {
    logar()
        .then(res => {
            loginRes = responseLogin(res);
            console.log(loginRes);
        });
});

Then("espero o retorno {string}", (statusCode) => {
    expect(parseInt(statusCode)).equal(loginRes.status)
});