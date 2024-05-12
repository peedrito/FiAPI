![image](https://github.com/peedrito/FiAPI/assets/143858757/54851c40-9439-449d-9e0e-6bb7396f7a9e)

# Financial Banking System (API REST);

### Como usar?

1. Clone o repositório;
2. Instale as dependências com `yarn install`;
3. Inicie o servidor com `yarn dev`;
4. Acesse `http://localhost:8888/` no seu navegador.

### Rotas

- **`POST /accounts`**: A rota deve receber `name`, `cpf`, dentro do corpo da requisição, ela deve ser armazenada dentro de um objeto no seguinte formato: 

```js
{
  "name": "John Doe",
  "cpf": "000.000.000-00",
}
```

- **`GET /statement`**: A rota deve receber `cpf` dentro do corpo da requisição, ela deve retornar todas as operações realizadas na conta do usuário.

- **`POST /deposit`**: A rota deve receber `cpf` e `value` dentro do corpo da requisição, ela deve realizar um depósito na conta do usuário.

- **`POST /withdraw`**: A rota deve receber `cpf` e `value` dentro do corpo da requisição, ela deve realizar um saque na conta do usuário.

- **`GET /statement/date`**: A rota deve receber `cpf` e `date` dentro do corpo da requisição, ela deve retornar todas as operações realizadas na conta do usuário na data informada.

- **`PUT /uptade`**: A rota deve receber `cpf` e `name` dentro do corpo da requisição, ela deve atualizar o nome do usuário.

- **`GET /account/details`**: A rota deve receber `cpf` dentro do corpo da requisição, ela deve retornar todos os dados da conta do usuário.

- **`DELETE /account/delete`**: A rota deve receber `cpf` dentro do corpo da requisição, ela deve deletar a conta do usuário.

- **`GET /balance`**: A rota deve receber `cpf` dentro do corpo da requisição, ela deve retornar o saldo da conta do usuário.

### Frameworks e bibliotecas

- [Express](https://expressjs.com/pt-br/)
- [uuid](https://www.npmjs.com/package/uuid)
- [Nodemon](https://www.npmjs.com/package/nodemon)

### Como contribuir?

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

### Minha perpectiva sobre minha primeira API REST

- Aprendi muito sobre como funciona uma API REST, como criar rotas, métodos HTTP, como fazer requisições, como armazenar dados, como atualizar dados, como deletar dados, como retornar dados, como fazer validações, como tratar erros.

- Aprendi a importância de documentar uma API, para que outras pessoas possam entender como ela funciona, como usar, quais são as rotas disponíveis, quais são os métodos HTTP disponíveis, quais são os dados que devem ser enviados, quais são os dados que serão retornados.

- Aprendi a importância de fazer testes, para garantir que a API está funcionando corretamente, que os dados estão sendo armazenados corretamente, que os dados estão sendo retornados corretamente, que as validações estão funcionando corretamente, que os erros estão sendo tratados corretamente.

### Licença

Esse projeto está sob a licença pública acesse o site [LICENSE](https://opensource.org/licenses/MIT) para mais informações.

### Autor

Feito por [Pedro Luis C' Lopes](https://www.linkedin.com/in/pedritto/)
