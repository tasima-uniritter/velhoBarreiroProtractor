 var AuthenticationPage = require('../pages/AuthenticationPage.js')

describe('Authentication Cenarios', function () {
    var page 

    beforeEach(function () {
        page = new AuthenticationPage()
        page.inicializarBrowser()
    })

    afterAll(function() {
     page.limparCacheBrowser()
    })

    it('Deve mostrar mensagem se não informar o email', function () {
        page.login('','')
        expect(page.failMessage()).toEqual("An email address required.")
    })

    it('Deve mostrar mensagem se email inválido', function () {
        page.login('xxx','')
        expect(page.failMessage()).toEqual("Invalid email address.")
    })

    it('Deve mostrar mensagem se não informar a senha', function () {        
        page.login('teste@teste.com','')
        expect(page.failMessage()).toEqual("Password is required.")
    })

    it('Deve mostrar mensagem quando email não existir no cadastro do sistema', function () {        
        page.login('teste@teste.com','velhobarreiro')
        expect(page.failMessage()).toEqual("Authentication failed.")
    })
    
    it('Deve mostrar mensagem quando senha não for a cadastrada para o email informado', function () {        
        page.login('velhobarreiro@uniritter.edu.br','senhainvalida')
        expect(page.failMessage()).toEqual("Authentication failed.")
    })

    it('Deve mostrar mensagem de sucesso se todos os campos sao preenchido corretamente', function () {        
        page.login('velhobarreiro@uniritter.edu.br','velhobarreiro')
        page.getCurrentUrl().then(function(actualUrl) {
            expect(actualUrl).toEqual("http://automationpractice.com/index.php?controller=my-account")
        })        
    })
})
