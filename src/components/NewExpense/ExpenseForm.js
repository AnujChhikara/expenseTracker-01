import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div className="sm:flex  sm:justify-center ">
      <div className="bg-[#AD7BE9] mx-2 rounded-lg px-6 py-4 my-4 sm:w-[340px] md:w-[700px]">
        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              value={enteredTitle}
              onChange={titleChangeHandler}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amount
            </label>
            <input
              onChange={amountChangeHandler}
              type="number"
              id="number"
              min={100}
              value={enteredAmount}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="">
            <div className="flex space-x-4 justify-between items-center ">
              <div className="flex flex-col">
                <label
                  htmlFor="date"
                  className=" mb-2 text-sm font-medium text-gray-900"
                >
                  Date
                </label>
                <input
                  onChange={dateChangeHandler}
                  id="date"
                  type="date"
                  value={enteredDate}
                  className="border text-black text-sm px-2 py-1 border-gray-300 rounded bg-gray-50"
                  required
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className="text-white mt-6  bg-indigo-700 hover:bg-indigo-600   font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center"
                >
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ExpenseForm;
