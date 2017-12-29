# Velho Barreiro Protractor

[![CircleCI](https://circleci.com/gh/tasima-uniritter/velhoBarreiroProtractor/tree/master.svg?style=svg)](https://circleci.com/gh/tasima-uniritter/velhoBarreiroProtractor/tree/master)

Integrantes do time: Allan, Edson, Priscilla, Lenon

## Cenários

### Login

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
