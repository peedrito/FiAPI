function uptadeName (req, res) {
    const { name } = req.body;
    const { customer } = req;

    customer.name = name;

    return res.send(201).send();
}

module.exports = { uptadeName };