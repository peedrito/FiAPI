
function statementOperation (req, res) {
    const { description, amount } = req.body;

    const { customer } = req;

    const operation = {
        description,
        amount,
        created: new Date(),
        type: "CREDIT",
    };

    console.log(customer.statement);

    customer.statement.push(operation);

    return res.sendStatus(201).send();
};

module.exports = { statementOperation };

