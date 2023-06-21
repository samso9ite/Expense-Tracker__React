// import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }   
    const filteredExpenses = props.items.filter(expense => {  
       return expense.date.getFullYear().toString() === filteredYear
    })
    // let expenseContent = <p> No Expense Content Available! </p>
    // if (filteredExpenses.length > 0){
    //     expenseContent =  filteredExpenses.map((expense) => {
    //         return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
    //      })
    // }
    return ( 
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                {/* {expenseContent} */}
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses}/>

                {/* 
                    <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}> </ExpenseItem>
                    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}> </ExpenseItem> 
                */}
            </Card>
        </div>
    );
}
 
export default Expenses;    