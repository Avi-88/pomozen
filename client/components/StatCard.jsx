import React from "react";

function StatCard(props) {
  return (
    <div className="flex  shadow-xl mt-4 min-h-[100px] justify-between items-start rounded-lg firefox:bg-opacity-60  bg-opacity-20 backdrop-filter backdrop-blur-sm  bg-white p-2 w-full">
      <div className="flex shadow-lg justify-start items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-px rounded-md ml-2 -mt-[30px]">
        <div className="flex justify-center items-center bg-slate-800 p-2 rounded-md">{props.icon}</div>
      </div>
      <div className="flex justify-around h-full items-end w-full flex-col px-2">
        <p className="text-white font-semibold">{props.title}</p>
        <p className="text-white font-bold text-2xl">{props.value}</p>
      </div>
    </div>
  );
}

export default StatCard;
