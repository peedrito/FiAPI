function printDetailsAccount (req, res) {
    const { customer } = req;

    return res.json(customer);
}

module.exports = { printDetailsAccount };