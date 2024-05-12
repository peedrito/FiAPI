const { customers } = require("../database");

function printStatement (req, res) {
    const { customer } = req;
    return res.json(customer.statement);
}

module.exports = {
    printStatement,
};

