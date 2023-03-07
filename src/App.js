import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const d = new Date();
  return (
    <div className="bg-[#222222] h-[100vh]  text-white">
      <div className="flex pt-3 text-[#C9F4AA]  text-2xl justify-center">
        Expense Tracker
      </div>

      <div className="mt-4 mx-2 space-y-4 ">
        <ExpenseItem title="Gym Membership" price={1000} date={d} />
        <ExpenseItem title="Food" price={2400} date={d} />
        <ExpenseItem title="Car Insurance" price={1200} date={d} />
        <ExpenseItem title="Fuel" price={340} date={d} />
      </div>
    </div>
  );
}

export default App;
