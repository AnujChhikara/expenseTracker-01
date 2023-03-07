import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="bg-black px-4 py-2 rounded-lg flex justify-between items-center text-md">
      <ExpenseDate date={props.date} />
      <h2 className="font-bold">{props.title}</h2>
      <div className="bg-indigo-500 px-2 rounded-lg">&#x20B9;{props.price}</div>
    </div>
  );
}
export default ExpenseItem;
