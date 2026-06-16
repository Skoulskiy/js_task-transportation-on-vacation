/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const longTerm = 7;
  const shortTerm = 3;

  if (days >= longTerm) {
    return days * dayPrice - 50;
  }

  if (days >= shortTerm) {
    return days * dayPrice - 20;
  }

  return days * dayPrice;
}

module.exports = calculateRentalCost;
