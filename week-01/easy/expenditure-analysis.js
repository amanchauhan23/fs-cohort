/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions === null) return null;

  set = {};
  for (let i = 0; i < transactions.length; i++) {
    obj = transactions[i];

    if (set[obj.category]) set[obj.category] += obj.price;
    else set[obj.category] = obj.price;
  }

  let out = [];
  for ([key, value] of Object.entries(set))
    out.push({
      category: key,
      totalSpent: value,
    });

  return out;
}

module.exports = calculateTotalSpentByCategory;
