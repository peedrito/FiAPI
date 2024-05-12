const { getBalance } = require("./balance");

function debitStatement (req, res) {
    const { amount } = req.body;
    const { customer } = req;

    const balance = getBalance(customer.statement);

    if (balance < amount) return res.status(400).json({error: "Insufficient funds!"});

    const statementOperation = {
        amount,
        created: new Date(),
        type: "DEBIT",
    };

    customer.statement.push(statementOperation);

    return res.sendStatus(201).send();
}

module.exports = { debitStatement };
