function IPIs(code1, code2, pieces1, pieces2, value1, value2, IPI, totalValue) {

    totalValue = (pieces1 * value1 + pieces2 * value2) * (IPI / 100 + 1)

return totalValue
};
module.exports = { IPIs }