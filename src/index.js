const express = require('express');
const { CreateAccount } = require('./commands/create-account');
const { printStatement } = require('./commands/statement');
const { verifyCountExist } = require('./middleware/verifyCountExist');
const { statementOperation } = require('./commands/statementOperation');
const { debitStatement } = require('./commands/withDraw');
const { statementDate } = require('./commands/statementDate');

const app = express();
app.use(express.json());

app.post("/account", CreateAccount);
app.use(verifyCountExist);
app.get("/statement", printStatement);
app.post("/deposit", statementOperation);
app.post("/withdraw", debitStatement);
app.get("/statement/date", statementDate);

app.listen(8888, () => {
    console.log('Estou online na porta 8888! :D');
});