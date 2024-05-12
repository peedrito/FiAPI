function statementDate (req, res) {
    const { customer } = req;
    const { date } = req.query;
    const dateFormat = new Date(date + " 00:00");

    const statement = customer.statement.filter(
        statement => {
            const statementDate = new Date(statement.created);
            statementDate.setHours(0,0,0,0);
            return statementDate.getTime() === dateFormat.getTime();
        }
    );

    if (statement.length === 0) {
        return res.status(400).json({ error: "No statements for this date" });
    }

    return res.json(statement);
}

module.exports = { statementDate };