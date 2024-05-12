const { getBalance } = require("./balance");

function printBalance (req, res)  {
    const { customer } = req;

    const balance = getBalance(customer.statement);

    return res.json(balance);
}

module.exports = { printBalance };