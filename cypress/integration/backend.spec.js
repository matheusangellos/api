/// <reference types="cypress" />

describe('Teste a nivel de API', () => {
    
    it('Requisição via método POST', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        }).then((response) => {
            expect(response.status).to.eq(201)            
            expect(response.body).to.have.property('id', 101)
            expect(response.body).to.have.property('title', 'foo')
            expect(response.body).to.have.property('body', 'bar')
            expect(response.body).to.have.property('userId', 1)
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
                title: 'foo',
                body: 'bar',
                userId: 1
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.property('body', 'bar')
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('title', 'foo')
            expect(response.body).to.have.property('userId', 1)

        })
    })

    it('Requisição via método DELETE', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {}
        }).then((response) => {
            expect(response.status).to.be.equal(200)
        })
    })
})