/// <reference types="cypress" />

describe('Teste a nivel de API', () => {
    
    it('Requisição via método POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'Teste de API via POST',
                body: 'Teste feito por Matheus Angellos',
                userId: 90
            }
        }).then((response) => {
            expect(response.status).to.eq(201)            
            expect(response.body).to.have.property('title', 'Teste de API via POST')
            expect(response.body).to.have.property('body', 'Teste feito por Matheus Angellos')
            expect(response.body).to.have.property('userId', 90)
            expect(response.body).to.have.property('id', 101)
        })
    })

    it('Requisição via método GET', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
            body: {}
        }).then((response) => {
            expect(response.status).to.be.equal(200)
        })
    })

    it('Requisição via método PUT', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
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
            expect(response.status).to.be.equal(200)            
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('title', 'Teste de API via PUT')
            expect(response.body).to.have.property('body', 'Teste feito por Matheus Angellos')
            expect(response.body).to.have.property('userId', 95)
        })
    })

    it('Requisição via método DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/12131231',
            body: {}
        }).then((response) => {
            expect(response.status).to.be.equal(200)
        })
    })
})