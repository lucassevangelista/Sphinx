// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('requestPost', (url, path, body, token = null) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.config(`${url}`)}${path}`,
        headers: {
            'X-Forwarded-For':'127.0.0.1',  
            'android_id':'3d6f14ab96cc14ea',
            'app_version':'10.19.166',
            'device_id':'24d0df70-1f8b-4cc3-bd5f-5afd75260044',
            'device_model':'Google',
            'device_os':'android',
            'installation_id':'82b02503-73c3-4a74-ab55-d836318b51b6'
        },
        body: body,
        auth: {
            bearer: token
        }
    }).then(responseRequest => {
        console.log(`Retorno serviço ${path}`)
        console.log(responseRequest)
        return new Promise(resolve => {
            resolve(responseRequest)
        })
    });
});

Cypress.Commands.add('requestGet', (url, path, token = null) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.config(`${url}`)}${path}`,
        auth: {
            bearer: token
        }
    }).then(responseRequest => {
        console.log(`Retorno serviço ${path}`)
        console.log(responseRequest)
        return new Promise(resolve => {
            resolve(responseRequest)
        })
    });
});

Cypress.Commands.add('requestPut', (url, path, body, token = null) => {
    return cy.request({
        method: 'PUT',
        url: `${Cypress.config(`${url}`)}${path}`,
        body: body,
        auth: {
            bearer: token
        }
    }).then(responseRequest => {
        console.log(`Retorno serviço ${path}`)
        console.log(responseRequest)
        return new Promise(resolve => {
            resolve(responseRequest)
        })
    });
});

Cypress.Commands.add('requestDelete', (url, path, token = null) => {
    return cy.request({
        method: 'DELETE',
        url: `${Cypress.config(`${url}`)}${path}`,
        auth: {
            bearer: token
        }
    }).then(responseRequest => {
        console.log(`Retorno serviço ${path}`)
        console.log(responseRequest)
        return new Promise(resolve => {
            resolve(responseRequest)
        })
    });
});

Cypress.Commands.add('queryDb', (query) => {
    return cy.task('queryDb', query).then(result => {
        return new Promise(resolve => {
            resolve(result)
        })
    })
});