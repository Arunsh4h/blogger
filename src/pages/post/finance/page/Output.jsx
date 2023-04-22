import React from "react";

function Output(props) {
  const { income, expenses, budget, goal, moneyRange } = props;

  // Insight 1: Calculate the percentage of income spent on expenses
  const expensePercentage = (expenses / income) * 100;

  // Insight 2: Calculate the percentage of income saved
  const savingsPercentage = ((income - expenses - goal) / income) * 100;

  // Insight 3: Determine whether the user is spending more than they earn
  const isOverspending = expenses > income;

  // Insight 4: Determine whether the user is on track to meet their savings goal
  const isSavingOnTrack = income - expenses >= goal;

  // Insight 5: Determine the amount of money the user needs to save per month to meet their goal
  const savingsPerMonth = goal / 12;

  // Insight 6: Determine the percentage of income the user needs to save to meet their goal
  const savingsPercentageOfIncome = (savingsPerMonth / income) * 100;

  // Insight 7: Determine the recommended budget based on the user's income
  const recommendedBudget = income * 0.5;

  // Insight 8: Determine the percentage of income the user should allocate to their budget
  const budgetPercentageOfIncome = (recommendedBudget / income) * 100;

  // Insight 9: Determine the recommended amount of money the user should save each month
  const recommendedSavingsPerMonth = income * 0.3;

  // Insight 10: Determine the percentage of income the user should allocate to savings
  const savingsPercentageOfRecommended =
    (recommendedSavingsPerMonth / income) * 100;

  // Insight 11: Determine whether the user is spending too much on expenses
  const isExpenseHigh = expensePercentage > 50;

  // Insight 12: Determine whether the user is saving enough money
  const isSavingEnough = savingsPercentage >= 20;

  // Insight 13: Determine whether the user is budgeting properly

  const isBudgetingProperly = budgetPercentageOfIncome >= 50;

  return (
    <table>
      <tbody>
        <tr>
          <td>Total Income:</td>
          <td>{income}</td>
        </tr>
        <tr>
          <td>Your Expenses:</td>
          <td>{expenses}</td>
        </tr>
        <tr>
          <td>Saving Goal:</td>
          <td>{goal}</td>
        </tr>
        <tr>
          <td>Budget:</td>
          <td>{budget}</td>
        </tr>
        <tr>
          <td>Savings:</td>
          <td>{income - expenses - goal}</td>
        </tr>
        <tr>
          <td>Money Range:</td>
          <td>{moneyRange}</td>
        </tr>
        <tr>
          <td>Percentage of income spent on expenses:</td>
          <td>{expensePercentage.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Percentage of income saved:</td>
          <td>{savingsPercentage.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Recommended budget:</td>
          <td>{recommendedBudget}</td>
        </tr>
        <tr>
          <td>Percentage of income allocated to budget:</td>
          <td>{budgetPercentageOfIncome.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Total Expenses:</td>
          <td>{expenses}</td>
        </tr>
        <tr>
          <td>Expense Percentage:</td>
          <td>{expensePercentage.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Recommended Savings Per Month:</td>
          <td>{recommendedSavingsPerMonth.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Savings Percentage of Recommended:</td>
          <td>{savingsPercentageOfRecommended.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Total Budget:</td>
          <td>{budget}</td>
        </tr>
        <tr>
          <td>Budget Percentage of Income:</td>
          <td>{budgetPercentageOfIncome.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Goal:</td>
          <td>{goal}</td>
        </tr>
        <tr>
          <td>Money Range:</td>
          <td>{moneyRange}</td>
        </tr>
        <tr>
          <td>Is Expense High:</td>
          <td>{isExpenseHigh ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Is Saving Enough:</td>
          <td>{isSavingEnough ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Is Budgeting Properly:</td>
          <td>{isBudgetingProperly ? "Yes" : "No"}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Output;
