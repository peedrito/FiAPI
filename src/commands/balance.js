function getBalance (statement) {
    const balance = statement.reduce((acc, operation) => {
        if (operation.type === "CREDIT") return acc + operation.amount;
        if (operation.type === "DEBIT") return acc - operation.amount;

        return acc;
    }, 0)

    return balance;
}

module.exports = { getBalance };

