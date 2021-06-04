import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
  
  // const [title,setTitle] = useState(props.title)
  console.log("Expense Item evaluated with react"); // this line will print three times, as we have 3 expense items, because we have this use state hook initialised for every instance once, later when we will update any of the state this will only log particularly for that item only.

  const clickHandler = () =>
  {
    // setTitle("Updated");
  }

  return (
      <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
  );
}

export default ExpenseItem;
