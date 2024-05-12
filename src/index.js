const express = require('express');
const { CreateAccount } = require('./commands/create-account');
const { printStatement } = require('./commands/statement');
const { verifyCountExist } = require('./middleware/verifyCountExist');
const { statementOperation } = require('./commands/statementOperation');
const { debitStatement } = require('./commands/withDraw');
const { getBalance } = require('./commands/balance');

const app = express();
app.use(express.json());

app.post("/account", CreateAccount);
app.use(verifyCountExist);
app.get("/statement", printStatement);
app.post("/deposit", statementOperation);
app.post("/withdraw", debitStatement);

app.listen(8888, () => {
    console.log('Estou online na porta 8888! :D');
});

// Copilot, se liga nesse erro aqui:
// TypeError: Cannot read properties of undefined (reading 'statement')
// at debitStatement (/home/pedrolopes/fundamentos-rocketseat/src/commands/withDraw.js:7:41)
// at Layer.handle [as handle_request] (/home/pedrolopes/fundamentos-rocketseat/node_modules/express/lib/router/layer.js:95:5)

// O que é isso?
// O erro indica que o objeto customer não está sendo passado para a função debitStatement.
// Como resolver?
// 