# ProjetoS9-API-GET
Projeto de API com método GET-POST-DELETE👩‍💻

Olá visitante, sou a Mari e estou muito contente em postar o meu terceiro projeto de API. :happy:

A proposta do projeto é desenvolver uma API com método GET, POST e DELETE.

O modelo de negócio pede :

Consultar uma lista de contatos id e também a lista completa, alterar dados e deletar também;

_________________________________________________________________________________________________
Gerenciamento de pacotes - NPM
Dependências baixadas:

express
express. Router() é um gerenciador/manipulador de rotas do NodeJS. Ela serve para criar rotas de forma modularizada, assim possibilitando criar um arquivo separado de manipulação de rotas.
nodemon
Node.js versão 15.6.0

Arquitetura- MVC
O projeto foi dividido em arquivos distintos, seguindo a MVC um padrão de arquitetura de software.

Com a exceção do não uso de views.

[x]server.js -configuração da porta e iniciando o servidor.

[x]app.js -indicação das rotas e requisições.

[x]contactsController/contactsController.js -criação da lógica da API

[x]contactsRoutes/index.js-telas de boas vindas

[x]contactsRoutes/contactsRoutes.js - criação das rotas e verbo GET.

[x]models/contacts.json - está armazenado os contatos.
