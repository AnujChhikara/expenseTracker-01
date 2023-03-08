import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="bg-black px-4 py-2 rounded-lg flex justify-between items-center text-md">
      <ExpenseDate date={props.date} />
      <h2 className="font-bold text-md">{props.title}</h2>
      <div className="flex items-center space-x-2  ">
        <div className="bg-indigo-700 text-sm border-white border-2  px-3  duration-1000 py-0.5 rounded-lg">
          &#x20B9;{props.amount}
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
