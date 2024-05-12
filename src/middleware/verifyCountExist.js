const { customers } = require("../database");

function verifyCountExist(req, res, next) {
    const { cpf } = req.headers;
    const customerExist = customers.some((customer) => customer.cpf === cpf);
    const customer = customers.find((customer) => customer.cpf === cpf);

    if (!customerExist) return res.status(400).json({error: "Customer not exists!"});

    req.customer = customer;
    next();
}

module.exports = { verifyCountExist };