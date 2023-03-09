import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const Items = data.map(function (item, index) {
    return (
      <ExpenseItem
        key={index}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  const addExpenseHandler = (expense) => {
    setData((prevData) => [...prevData, expense]);
  };

  return (
    <div className=" text-white">
      <div className="flex pt-3 underline-offset-[3px] text-White font-bold  text-3xl justify-center">
        Expense Tracker
      </div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>

      <div className="mt-4 mx-2 space-y-3 ">{Items}</div>
    </div>
  );
}

export default App;
