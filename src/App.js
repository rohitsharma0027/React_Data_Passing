import React, {useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id:'e1',
    expenseTitle: "Item 1",
    expenseDate: new Date(2021, 2, 20),
    expenseAmount: 299
  },
  {
    id:'e2',
    expenseTitle: "Item 2",
    expenseDate: new Date(2021, 2, 20),
    expenseAmount: 399
  },
  {
    id:'e3',
    expenseTitle: "Item 3",
    expenseDate: new Date(2021, 2, 20),
    expenseAmount: 499
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
 
  const AddExpense = (expense) => {
    setExpenses((prevExpenses) => {
       return [expense, ...prevExpenses]
    })
  }
  
  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpense={AddExpense}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
