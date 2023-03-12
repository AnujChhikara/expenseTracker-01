function ChartBar(props) {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className=" flex flex-col space-y-1 w-4">
      <div className="h-24 bg-red-200 rotate-180 rounded-2xl">
        <div
          className="bg-red-600  "
          style={{
            height: barFillHeight,
            borderRadius: "16px",
          }}
        ></div>
      </div>
      <div className="text-white text-[10px] font-bold">{props.label}</div>
    </div>
  );
}
export default ChartBar;
