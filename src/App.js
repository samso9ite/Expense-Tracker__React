import Expenses from './components/Expenses/Expenses';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const expenseList = [
  {id:1, title: "Furniture", amount:350000 , date: new Date(2021, 3, 12) },
  {id:2, title: "Air Conditioner", amount:230000 , date: new Date(2020, 4, 11)},
  {id:3, title: "Cotton", amount:350000 , date: new Date(2021, 3, 12) },
  {id:4, title: "Gas Cooker", amount:230000 , date: new Date(2020, 4, 11)},
]

function App() {
  const [expenses, setExpenses] = useState(expenseList)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
     return[expense, ...prevExpenses]
    })
  
  }
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App; 
