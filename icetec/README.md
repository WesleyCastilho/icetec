# Escopoo do projeto

Deve ser criado um aplicativo web SPA, que integra com um backend utilizando REST API.
O objetivo do aplicativo é o cadastro de programadores para vagas de emprego.
O aplicativo só poderá ser acessado por recrutadores, portanto deverá ter autenticação por meio de login. Os recrutadores podem ser cadastrados diretamente pelo banco, não sendo necessário uma tela para cadastro.


## O aplicativo deverá contar com as seguintes funcionalidades:

- Login com os seguintes campos:
- E-mail
- Senha
- CRUD de candidato com os seguintes campos:
- Nome,
- E-mail,
- Idade,
- Url linkedin,
- Combo múltipla escolha das tecnologias que o programador tem
conhecimento. (As opções devem ser as seguintes: C#, Javascript,
Nodejs, Angular, React, Ionic, Mensageria, PHP, Laravel)
- Na listagem dos candidatos deve ser possível a filtragem por tecnologias.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
