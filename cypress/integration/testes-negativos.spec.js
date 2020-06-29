/// <reference types="cypress" />

describe('Teste a nivel de API', () => {
    
    it('Requisição via método POST', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Teste de API via POST',
                body: 'Teste feito por Matheus Angellos',
                userId: 90
            }
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    })

    it('Requisição via método GET', () => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: 'https://jsonplaceholder.typicode.com/commentsFalsos',
            body: {}
        }).then((response) => {
            expect(response.status).to.be.equal(404)
        })
    })

    it('Requisição via método PUT', () => {
        cy.request({
            method: 'PUT',
            failOnStatusCode: false,
            url: 'https://jsonplaceholder.typicode.com/postsFalsos/1',
            body: {
                id: 1,
                title: 'Teste de API via PUT',
                body: 'Teste feito por Matheus Angellos',
                userId: 95
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(404)
        })
    })

    it('Requisição via método DELETE', () => {
        cy.request({
            method: 'DELETE',
            failOnStatusCode: false,
            url: 'https://jsonplaceholder.typicode.com/posts/12131231/Negativo',
            body: {}
        }).then((response) => {
            expect(response.status).to.be.equal(404)
        })
    })
})