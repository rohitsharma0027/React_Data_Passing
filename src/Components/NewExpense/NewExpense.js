import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          id:Math.random().toString(),
          ...enteredExpenseData,
      }
      console.log(expenseData);

      //calling the function received form the parent(APP component)
      props.onAddExpense(expenseData)

  }
  
  return (
    <div className="new-expense">
       {/* WE HAVE CREATED THE FUNCTION AND PASSING THIS AS A PROPS TO THE CHILD COMPONENT, THEN WE WILL CALL THIS FUNCTION IN CHILD COMPONENT AND GET THE DATA IN IT AND USE THE DATA IN THIS PARENT COMPONENT */}
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
