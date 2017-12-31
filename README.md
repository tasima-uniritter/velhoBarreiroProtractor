# Velho Barreiro Protractor

[![CircleCI](https://circleci.com/gh/tasima-uniritter/velhoBarreiroProtractor/tree/master.svg?style=svg)](https://circleci.com/gh/tasima-uniritter/velhoBarreiroProtractor/tree/master)

* Projeto de testes automatizados funcionais utilizando a ferramenta Protractor.
* Integração com CircleCI.


Centro Universitário Ritter dos Reis

PÓS-GRADUAÇÃO EM TECNOLOGIAS APLICADAS A SISTEMAS DE INFORMAÇÃO COM MÉTODOS ÁGEIS

Disciplina de Qualidade de Software - Maurício Andreazza

Integrantes do time: Allan M. Leite, Edson A. Filho, Priscilla de Oliveira, Lenon Belem


## Cenários

### Login (/specs/authentication-spec.js)

```
      Cenário: Deve mostrar mensagem se não informar o email
        Dado que estou na tela de login
        E que não informei o email
        Quando clico em Login
        Então o sistema exibe a mensagem "An email address required."
```
```
      Cenário: Deve mostrar mensagem se email inválido
        Dado que estou na tela de login
        E que informei um email inválido
        Quando clico em Login
        Então o sistema exibe a mensagem "Invalid email address."
```
```
      Cenário: Deve mostrar mensagem se não informar a senha
        Dado que estou na tela de login
        E que informei um email válido
        E que não informei a senha
        Quando clico em Login
        Então o sistema exibe a mensagem "Password is required."
```
```
      Cenário: Deve mostrar mensagem quando email não existir no cadastro do sistema
        Dado que estou na tela de login
        E que informei um email válido mas que não existe no cadastro do sistema
        E que informei a senha
        Quando clico em Login
        Então o sistema exibe a mensagem "Authentication failed."
```
```
      Cenário: Deve mostrar mensagem quando senha não for a cadastrada para o email informado
        Dado que estou na tela de login
        E que informei um email válido que existe no cadastro do sistema
        E que informei uma senha que não é a cadastrada para o email informado
        Quando clico em Login
        Então o sistema exibe a mensagem "Authentication failed."
```
```
      Cenário: Deve redirecionar para a página do usuário quando o login for válido
        Dado que estou na tela de login
        E que informei um email válido 
        E que informei a senha válida
        Quando clico em Login
        Então o sistema redireciona para a tela de usuário logado
```

### Contact Us (/specs/contactUs-spec.js)

```
      Cenário: Deve exibir mensagem de erro ao tentar enviar mensagem sem informar o email
	Dado que estou na tela de Contato
	Quando clicar em Send
	Então deve exibir a mensagem "The email must be valid."
```

```
      Cenário: Deve exibir mensagem de erro ao tentar enviar mensagem informado email inválido
	Dado que estou na tela de Contato
	E que informei o email "email invalido"
	Quando clicar em Send
	Então deve exibir a mensagem "The email must be valid."
```

```
      Cenário: Deve exibir mensagem de erro ao tentar enviar mensagem sem informar a mensagem
	Dado que estou na tela de Contato
	E que informei um email válido
	E que não informei uma mensagem
	Quando clicar em Send
	Então deve exibir a mensagem "The message cannot be blank."
```
```
      Cenário: Deve exibir mensagem de erro ao tentar enviar mensagem sem informar o assunto
	Dado que estou na tela de Contato
	E que informei um email válido
	E que informei uma mensagem
	E que não informei o assunto
	Quando clicar em Send
	Então deve exibir a mensagem "Please select a subject from the list provided."
```
```
      Cenário: Deve exibir mensagem de sucesso ao preencher campos obrigatórios do formulário
	Dado que estou na tela de Contato
	E que informei um email válido
	E que informei uma mensagem
	E que informei o assunto
	Quando clicar em Send
	Então deve exibir a mensagem "Your message has been successfully sent to our team."
```
