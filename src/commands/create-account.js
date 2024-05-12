const { customers } = require("../database");
const { v4: uuidV4 } = require('uuid');

function CreateAccount (req, res) {
    const { cpf, name } = req.body;
    const customersAlredyExists = customers.some((customer) => {
        return customer.cpf === cpf;
    });


    if (customersAlredyExists) {
        return res.status(400).json({ error: "Customer Alredy Exists!"});
    }

    customers.push({
        cpf,
        name,
        id: uuidV4,
        statement: [],
    });

    return res.sendStatus(201).send();
}

module.exports = {
    CreateAccount,
};
