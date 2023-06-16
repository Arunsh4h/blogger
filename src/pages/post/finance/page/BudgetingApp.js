// import { Line } from "react-chartjs-2";
// import { Chart, CategoryScale, LinearScale, TimeScale } from "chart.js/auto";
// import "chartjs-chart-financial";
// import React, { useState, useRef, useEffect } from "react";

// function BudgetingApp() {
//   const [income, setIncome] = useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [budget, setBudget] = useState(0);
//   const [goal, setGoal] = useState(0);
//   const [moneyRange, setMoneyRange] = useState(10000);
//   const chartRef = useRef(null);

//   // Insight 1: Calculate the percentage of income spent on expenses
//   const expensePercentage = (expenses / income) * 100;

//   // Insight 2: Calculate the percentage of income saved
//   const savingsPercentage = ((income - expenses - goal) / income) * 100;

//   // Insight 3: Determine whether the user is spending more than they earn
//   const isOverspending = expenses > income;

//   // Insight 4: Determine whether the user is on track to meet their savings goal
//   const isSavingOnTrack = income - expenses >= goal;

//   // Insight 5: Determine the amount of money the user needs to save per month to meet their goal
//   const savingsPerMonth = goal / 12;

//   // Insight 6: Determine the percentage of income the user needs to save to meet their goal
//   const savingsPercentageOfIncome = (savingsPerMonth / income) * 100;

//   // Insight 7: Determine the recommended budget based on the user's income
//   const recommendedBudget = income * 0.5;

//   // Insight 8: Determine the percentage of income the user should allocate to their budget
//   const budgetPercentageOfIncome = (recommendedBudget / income) * 100;

//   // Insight 9: Determine the recommended amount of money the user should save each month
//   const recommendedSavingsPerMonth = income * 0.3;

//   // Insight 10: Determine the percentage of income the user should allocate to savings
//   const savingsPercentageOfRecommended =
//     (recommendedSavingsPerMonth / income) * 100;

//   // Insight 11: Determine whether the user is spending too much on expenses
//   const isExpenseHigh = expensePercentage > 50;

//   // Insight 12: Determine whether the user is saving enough money
//   const isSavingEnough = savingsPercentage >= 20;

//   // Insight 13: Determine whether the user is budgeting properly

//   const isBudgetingProperly = budgetPercentageOfIncome >= 50;

//   // Insight 14: Determine the percentage of income that goes towards meeting the user's financial goal
//   const goalPercentage = (goal / income) * 100;

//   // Insight 14: Determine the total amount of money spent on expenses
//   const totalExpenses = Array.isArray(expenses)
//     ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//     : 0;

//   // Insight 15: Determine the average amount spent on each expense
//   const averageExpenseAmount = totalExpenses / expenses.length;

//   // Insight 16: Determine the percentage of the budget that has been used
//   const budgetPercentageUsed = (totalExpenses / budget) * 100;

//   // Insight 17: Determine the total amount of money saved
//   const totalSavings = Array.isArray(moneyRange)
//     ? moneyRange.reduce((acc, range) => acc + range.amount, 0)
//     : 0;

//   // Insight 18: Determine the average amount saved per month
//   const averageMonthlySavings = totalSavings / moneyRange.length;

//   const handleIncomeChange = (event) => {
//     setIncome(Number(event.target.value));
//   };

//   const handleExpensesChange = (event) => {
//     setExpenses(Number(event.target.value));
//   };

//   const handleGoalChange = (event) => {
//     setGoal(Number(event.target.value));
//   };

//   const handleMoneyRangeChange = (event) => {
//     setMoneyRange(Number(event.target.value));
//   };

//   const calculateBudget = () => {
//     setBudget(income - expenses);
//   };

//   const calculateSavings = () => {
//     const savings = income - expenses - goal;
//     return savings >= 0 ? savings : 0;
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }

//     calculateBudget();

//     const chartData = {
//       labels: ["Total Income", "Your Expenses", "Saving", "Budget", "Savings"],
//       datasets: [
//         {
//           label: "Money",
//           data: [income, expenses, goal, budget, calculateSavings()],
//           backgroundColor: "#99d1f5",
//           borderColor: "#35a1eb",
//           borderWidth: 2,
//           pointStyle: "circle",
//           pointRadius: 10,
//           pointHoverRadius: 15,
//         },
//       ],
//     };

//     const options = {
//       scales: {
//         y: {
//           grid: {
//             color: "#9db2ff",
//           },
//           beginAtZero: true,
//           max: moneyRange,
//         },
//         x: {
//           type: "category",
//           grid: {
//             color: "#3ed",
//           },
//         },
//       },

//       tooltips: {
//         mode: "index",
//         intersect: false,
//         enabled: true, // Always show tooltips
//       },
//       legend: {
//         display: true,
//         position: "bottom",
//       },
//       elements: {
//         point: {
//           radius: 4, // to show all data points
//         },
//       },
//     };

//     chartRef.current = new Chart("myChart", {
//       type: "line",
//       data: chartData,
//       options: options,
//     });

//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//       }
//     };
//   }, [income, expenses, goal, moneyRange, calculateBudget]);

//   useEffect(() => {
//     if (chartRef.current) {
//       chartRef.current.data.datasets[0].data = [
//         income,
//         expenses,
//         goal,
//         budget,
//         calculateSavings(),
//       ];
//       chartRef.current.update();
//     }
//   }, [income, expenses, goal, budget, moneyRange]);

//   return (
//     <div>
//       <div style={{ display: "flex", margin: "0vh 34vh" }}>
//         <div style={{}}>
//           <div
//             style={{
//               background: "#eee4ff",
//               border: "3px groove #9db2ff",
//               padding: "11px",
//             }}
//           >
//             <h1
//               style={{
//                 color: "#2a2323",
//                 textAlign: "center",
//               }}
//             >
//               Budgeting App
//             </h1>
//           </div>
//           <label
//             style={{
//               color: "white",
//               border: "3px solid #0083ff",
//               display: "flex",
//               justifyContent: "center",
//               background: "#151456",
//               fontWeight: "bold",
//               borderRadius: "11px",
//               margin: " 4px 0px",
//             }}
//             htmlFor="income"
//           >
//             Total Money:
//           </label>
//           <input
//             type="number"
//             id="income"
//             value={income}
//             onChange={handleIncomeChange}
//           />
//           <br />
//           <label
//             style={{
//               color: "white",
//               border: "3px solid #0083ff",
//               display: "flex",
//               justifyContent: "center",
//               background: "#151456",
//               fontWeight: "bold",
//               borderRadius: "11px",
//               margin: " 4px 0px",
//             }}
//             htmlFor="expenses"
//           >
//             Your Expenses:
//           </label>
//           <input
//             type="number"
//             id="expenses"
//             value={expenses}
//             onChange={handleExpensesChange}
//           />
//           <br />
//           <label
//             style={{
//               color: "white",
//               border: "3px solid #0083ff",
//               display: "flex",
//               justifyContent: "center",
//               background: "#151456",
//               fontWeight: "bold",
//               borderRadius: "11px",
//               margin: " 4px 0px",
//             }}
//             htmlFor="goal"
//           >
//             Your Saving Goal:
//           </label>
//           <input
//             type="number"
//             id="goal"
//             value={goal}
//             onChange={handleGoalChange}
//           />
//           <br />
//           <label
//             style={{
//               color: "white",
//               border: "3px solid #0083ff",
//               display: "flex",
//               justifyContent: "center",
//               background: "#151456",
//               fontWeight: "bold",
//               borderRadius: "11px",
//               margin: " 4px 0px",
//             }}
//             htmlFor="moneyRange"
//           >
//             Select Money Range:
//           </label>
//           <input
//             type="range"
//             id="moneyRange"
//             min="100"
//             max="10000000"
//             value={moneyRange}
//             onChange={handleMoneyRangeChange}
//           />
//           <br />
//           <button
//             onClick={calculateBudget}
//             style={{ padding: "10px", color: "#fff", background: "#d93f3f" }}
//           >
//             Calculate Budget
//           </button>
//           <div style={{ marginBottom: "10px" }}> </div>
//         </div>

//         <div style={{ padding: "10px" }}> </div>
//         <div style={{ width: "100%", height: "0%" }}>
//           <canvas id="myChart" style={{}}></canvas>
//         </div>
//       </div>

//       <table
//         style={{
//           borderCollapse: "collapse",
//           width: "100%",
//           maxWidth: "700px",
//           margin: "0 auto",
//           fontSize: "1.2rem",
//           lineHeight: "1.5rem",
//         }}
//       >
//         <tbody>
//           <tr style={{ borderBottom: "1px solid #ccc" }}>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Total Income:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {income}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Saving Goal:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {goal}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Money Range:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {moneyRange}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Your Expenses:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {expenses}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Budget:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {budget}
//             </td>
//           </tr>
//           <tr style={{ borderBottom: "1px solid #ccc" }}>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Percentage of income spent on expenses:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {expensePercentage.toFixed(2)}%
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Savings:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {income - expenses - goal}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Recommended budget:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {recommendedBudget}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Percentage of income saved:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {savingsPercentage.toFixed(2)}%
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Total Expenses:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {expenses}
//             </td>
//           </tr>

//           <tr style={{ borderBottom: "1px solid #ccc" }}>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Total Budget:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {budget}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Percentage of income allocated to budget:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {budgetPercentageOfIncome.toFixed(2)}%
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Expense Percentage:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {expensePercentage.toFixed(2)}%
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Recommended Savings Per Month:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {recommendedSavingsPerMonth.toFixed(2)}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Is Budgeting Properly:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {isBudgetingProperly ? "Yes" : "No"}
//             </td>
//           </tr>
//           <tr style={{ borderBottom: "1px solid #ccc" }}>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Savings Percentage of Recommended:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {savingsPercentageOfRecommended.toFixed(2)}%
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Goal:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {goal}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Is Expense High:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {isExpenseHigh ? "Yes" : "No"}
//             </td>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Budget Percentage of Income:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {budgetPercentageOfIncome.toFixed(2)}%
//             </td>

//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Is Saving Enough:
//             </td>

//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {isSavingEnough ? "Yes" : "No"}
//             </td>
//           </tr>

//           <tr>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Percentage of Income towards Financial Goal:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {goalPercentage.toFixed(2)}%
//             </td>

//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Total Expenses:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {totalExpenses}
//             </td>

//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Expense Percentage of Income:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {expensePercentage}%
//             </td>

//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Budget:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {budget}
//             </td>

//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Budget Percentage Used:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {budgetPercentageUsed}%
//             </td>
//           </tr>
//           <tr>
//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Total Savings:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {totalSavings}
//             </td>

//             <td
//               style={{
//                 padding: "1.1rem",
//                 background: "#dae7ff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 color: "#8a2be2",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//                 borderRight: "4px solid transparent;",
//               }}
//             >
//               Goal:
//             </td>
//             <td
//               style={{
//                 padding: "1rem",
//                 background: "#cbecff",
//                 fontSize: "14px",
//                 fontStyle: "italic",
//                 fontWeight: "bold",
//                 border: "1px solid #101010",
//               }}
//             >
//               {goal}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BudgetingApp;
