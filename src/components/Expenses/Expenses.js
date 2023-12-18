import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import React ,{useState} from 'react';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props){


    const [filterdYear, setFitlterdYear]=useState('All');
    const filterChangeHandler =selectedYear=>{
        setFitlterdYear(selectedYear);
    }
    let filterdExpenses = props.items;
    if(filterdYear!=='All'){
         filterdExpenses = props.items.filter(expense =>{
            return expense.date.getFullYear().toString()===filterdYear;
        });
    }
    

    
    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filterdYear}/>
            <ExpensesChart expenses={filterdExpenses}/>
            <ExpenseList items={filterdExpenses}/>
        </Card>
        </div>
    );
}