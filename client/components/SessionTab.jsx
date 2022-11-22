import React from "react";

function SessionTab(props) {
  return (
    <div className="sml:w-full w-11/12">
      <div className="grid grid-cols-5 w-full px-2 text-white sml:p-4 sml:my-0 my-2">
        <div className="col-span-3 justify-center items-center ml-px flex">
          <p className="sml:text-lg text-sm ml-px">{props.index}</p>
          <p className="flex-1 justify-center flex sml:text-lg text-sm">
            {props.item.sessionDate}
          </p>
        </div>
        <div className="col-span-1  justify-center flex">
          <p className=" sml:text-lg text-sm">
            {Math.floor(props.item.focusTime / 60)}
            <span className="text-xs"> mins</span>
          </p>
        </div>
        <div className="col-span-1 justify-center flex">
          <p className=" sml:text-lg text-sm">
            {Math.floor(props.item.sessionLength / 60)}
            <span className="text-xs"> mins</span>
          </p>
        </div>
      </div>

    </div>
  );
}

export default SessionTab;
