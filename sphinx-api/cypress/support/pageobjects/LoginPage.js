/// <reference types="cypress" />

import { requestLogin } from '../requestResponse/LoginRR'

export const logar = (usuario = Cypress.env("usuario"), senha = Cypress.env("senha")) => {
    let bodyLogin = requestLogin(usuario, senha)
    return cy.requestPost('baseUrl','/login', bodyLogin)
}