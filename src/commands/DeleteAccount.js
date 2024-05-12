const { customers } = require("../database");

function deleteAccount (req, res) {
    const { customer } = req;

    customers.splice(customer, 1);

    return res.status(200).json(customers);
}

module.exports = { deleteAccount }; 