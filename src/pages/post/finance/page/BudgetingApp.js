import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, TimeScale } from "chart.js/auto";
import "chartjs-chart-financial";
import React, { useState, useRef, useEffect } from "react";

function BudgetingApp() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(0);
  const [goal, setGoal] = useState(0);
  const [moneyRange, setMoneyRange] = useState(10000);
  const chartRef = useRef(null);

  const handleIncomeChange = (event) => {
    setIncome(Number(event.target.value));
  };

  const handleExpensesChange = (event) => {
    setExpenses(Number(event.target.value));
  };

  const handleGoalChange = (event) => {
    setGoal(Number(event.target.value));
  };

  const handleMoneyRangeChange = (event) => {
    setMoneyRange(Number(event.target.value));
  };

  const calculateBudget = () => {
    setBudget(income - expenses);
  };

  const calculateSavings = () => {
    const savings = income - expenses - goal;
    return savings >= 0 ? savings : 0;
  };

  const chartData = {
    labels: ["Total Income", "Your Expenses", "Saving", "Budget", "Savings"],
    datasets: [
      {
        label: "Money",
        data: [income, expenses, goal, budget, calculateSavings()],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: moneyRange,
      },
      x: {
        type: "category",
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    calculateBudget();

    chartRef.current = new Chart("myChart", {
      type: "line",
      data: chartData,
      options: options,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [income, expenses, goal, moneyRange, calculateBudget]);

  return (
    <div style={{ display: "flex", margin: "0vh 34vh" }}>
      <div style={{}}>
        <div
          style={{
            background: "#eee4ff",
            border: "3px groove red",
            padding: "11px",
          }}
        >
          <h1>Budgeting App</h1>
        </div>
        <label style={{ color: "blue" }} htmlFor="income">
          Total Money:
        </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={handleIncomeChange}
        />
        <br />
        <label style={{ color: "purple" }} htmlFor="expenses">
          Your Expenses:
        </label>
        <input
          type="number"
          id="expenses"
          value={expenses}
          onChange={handleExpensesChange}
        />
        <br />
        <label style={{ color: "red" }} htmlFor="goal">
          Your Saving Goal:
        </label>
        <input
          type="number"
          id="goal"
          value={goal}
          onChange={handleGoalChange}
        />
        <br />
        <label style={{ color: "purple" }} htmlFor="moneyRange">
          Select Money Range:
        </label>
        <input
          type="range"
          id="moneyRange"
          min="10000"
          max="100000"
          value={moneyRange}
          onChange={handleMoneyRangeChange}
        />
        <br />
        <button
          onClick={calculateBudget}
          style={{ padding: "10px", color: "#fff", background: "#d93f3f" }}
        >
          Calculate Budget
        </button>
        <div style={{ marginBottom: "10px" }}> </div>
      </div>
      <div style={{ padding: "10px" }}> </div>
      <div style={{ width: "100%", height: "0%" }}>
        <canvas id="myChart" style={{}}></canvas>
      </div>
    </div>
  );
}

export default BudgetingApp;
