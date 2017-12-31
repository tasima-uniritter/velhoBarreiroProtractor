# Velho Barreiro Protractor

[![CircleCI](https://circleci.com/gh/tasima-uniritter/velhoBarreiroProtractor/tree/master.svg?style=svg)](https://circleci.com/gh/tasima-uniritter/velhoBarreiroProtractor/tree/master)

Centro Universitário Ritter dos Reis

PÓS-GRADUAÇÃO EM TECNOLOGIAS APLICADAS A SISTEMAS DE INFORMAÇÃO COM MÉTODOS ÁGEIS

Disciplina de Qualidade de Software - Maurício Andreazza

Integrantes do time: Allan M. Leite, Edson A. Filho, Priscilla de Oliveira, Lenon Belem


* Projeto de testes automatizados funcionais utilizando a ferramenta Protractor.
* Integração com CircleCI.


## Cenários

### Sig in (/specs/authentication-spec.js)
```
      Cenário 1 de 6: Deve mostrar mensagem se não informar o email
        Dado que estou na tela de login
        E que não informei o email
        Quando clico em Sign in
        Então o sistema exibe a mensagem "An email address required."
```
```
      Cenário 2 de 6: Deve mostrar mensagem se email inválido
        Dado que estou na tela de login
        E que informei um email inválido
        Quando clico em Sign in
        Então o sistema exibe a mensagem "Invalid email address."
```
```
      Cenário 3 de 6: Deve mostrar mensagem se não informar a senha
        Dado que estou na tela de login
        E que informei um email válido
        E que não informei a senha
        Quando clico em Sign in
        Então o sistema exibe a mensagem "Password is required."
```
```
      Cenário 4 de 6: Deve mostrar mensagem quando email não existir no cadastro do sistema
        Dado que estou na tela de login
        E que informei um email válido mas que não existe no cadastro do sistema
        E que informei a senha
        Quando clico em Sign in
        Então o sistema exibe a mensagem "Authentication failed."
```
```
      Cenário 5 de 6: Deve mostrar mensagem quando senha não for a cadastrada para o email informado
        Dado que estou na tela de login
        E que informei um email válido que existe no cadastro do sistema
        E que informei uma senha que não é a cadastrada para o email informado
        Quando clico em Sign in
        Então o sistema exibe a mensagem "Authentication failed."
```
```
      Cenário 6 de 6: Deve redirecionar para a página do usuário quando o login for válido
        Dado que estou na tela de login
        E que informei um email válido 
        E que informei a senha válida
        Quando clico em Sign in
        Então o sistema redireciona para a tela de usuário logado
```

### Contact Us (/specs/contactUs-spec.js)
```
      Cenário 1 de 5: Deve mostrar mensagem se não informar o email
	Dado que estou na tela de Contato
	Quando clico em Send
	Então o sistema exibe a mensagem "Invalid email address."
```
```
      Cenário 2 de 5: Deve mostrar mensagem se email inválido
	Dado que estou na tela de Contato
	E que informei o email "email invalido"
	Quando clico em Send
	Então o sistema exibe a mensagem "Invalid email address."
```
```
      Cenário 3 de 5: Deve mostrar mensagem se mensagem não for informada
	Dado que estou na tela de Contato
	E que informei um email válido
	E que não informei uma mensagem
	Quando clico em Send
	Então o sistema exibe a mensagem "The message cannot be blank."
```
```
      Cenário 4 de 5: Deve mostrar mensagem se assunto não for informado
	Dado que estou na tela de Contato
	E que informei um email válido
	E que informei uma mensagem
	E que não informei o assunto
	Quando clico em Send
	Então o sistema exibe a mensagem "Please select a subject from the list provided."
```
```
      Cenário 5 de 5: Deve mostrar mensagem de sucesso se todos os campos sao preenchido corretamente
	Dado que estou na tela de Contato
	E que informei um email válido
	E que informei uma mensagem
	E que informei o assunto
	Quando clico em Send
	Então o sistema exibe a mensagem "Your message has been successfully sent to our team."
```

### Search (/specs/search-spec.js)
```
      Cenário 1 de 3: Deve exibir os resultados da pesquisa
        Dado que estou na tela inicial
        E que informei um texto que retorne resultados da pesquisa
        Quando clico em Search
        Então o sistema redireciona para a página com os resultados da pesquisa
        E exibe uma label com o número de registros encontrados no formato "<numero_de_registros> results have been found."
```
```
      Cenário 2 de 3: Não deve exibir resultados da pesquisa quando a pesquisa não retornar resultados
        Dado que estou na tela inicial
        E que informei um texto que não retorne resultados da pesquisa
        Quando clico em Search
        Então o sistema redireciona para a página com os resultados da pesquisa
        E exibe uma label com o texto "0 results have been found."
```
```
      Cenário 3 de 3: Deve exibir mensagem quando a pesquisa for em branco
        Dado que estou na tela inicial
        E que não informei um texto no campo de pesquisa
        Quando clico em Search
        Então o sistema redireciona para a página com os resultados da pesquisa
        E exibe uma label com o texto "0 results have been found."
        E exibe a mensagem "Please enter a search keyword"
```
