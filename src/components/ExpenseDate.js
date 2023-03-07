function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="bg-zinc-900 px-4 shadow-white shadow-sm rounded-md flex flex-col justify-center items-center border-[1px]">
        <div className="text-[12px]">{month}</div>
        <div className="text-[12px]">{year}</div>
        <div className="text-2xl font-bold">{date}</div>
      </div>
    </div>
  );
}
export default ExpenseDate;
