import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [year, setYear] = useState("");

  const yearChangeHandler = (yearSelected) => {
    setYear(yearSelected);
  };

  const filterExpense = props.expenses.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === year;
  });

  let expenseContent = <p>No data available</p>

  if(filterExpense.length>0)
  {
    expenseContent = filterExpense.map((expense) => (
      <ExpenseItem
        title={expense.expenseTitle}
        amount={expense.expenseAmount}
        date={expense.expenseDate}
        id={expense.id}
      />))
  }

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectYear={yearChangeHandler} />
        <ExpensesChart expenses={filterExpense}/>
        {expenseContent}
      </Card>
    </li>
  );
}

export default Expenses;
