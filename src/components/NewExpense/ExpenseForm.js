import Expenses from "../Expenses/Expenses";
import "./ExpenseForm.css";
import React ,{ useState } from "react";
export default function ExpenseForm(props){
    const [enterdTitle, setEnterdTitle] = useState("");
    const [enterdAmount, setEnterdAmount] = useState("");
    const [enterdDate, setEnterdDate] = useState("");

    const EnterdTitleHandler =(event)=>{
        setEnterdTitle(event.target.value);
    };
    const EnterdAmountHandler =(event)=>{
        setEnterdAmount(event.target.value);
    };
    const EnterdDateHandler =(event)=>{
        setEnterdDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData ={
            title: enterdTitle,
            date: new Date(enterdDate),
            amount: +enterdAmount,
        }

        props.onSaveExpenseData(expenseData);
        setEnterdAmount('');
        setEnterdDate('');
        setEnterdTitle('');
    }

    return(<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={EnterdTitleHandler} value={enterdTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={EnterdAmountHandler} value={enterdAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2001-01-01" max="2023-12-31" onChange={EnterdDateHandler} value={enterdDate}/>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
    );
}