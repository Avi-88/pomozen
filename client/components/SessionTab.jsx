import React from "react";

function SessionTab(props) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 w-full px-2 text-white sml:p-4 sml:my-0 my-2">
        <div className="col-span-3 justify-center items-center ml-px flex">
          <p className="sml:text-lg text-sm">{props.index}</p>
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
      <div className="hidden">
        <div className="grid grid-cols-5 w-full p-2 sml:px-4 text-white">
          <div className="col-span-3 flex justify-start items-center ml-px ">
            <p className=" sml:text-lg text-sm mr-4">#</p>
            <p className="flex-1 justify-center flex sml:text-sm mid:text-base text-xs break-all">
              fhbweiuhfiowehfoihfowhuowhgoiuwhgouhwoighwoighwoighoiwehiowhfwhfwehgoiwhgoihweiofjwoighoiwhjgiorjg
            </p>
          </div>
          <div className="col-span-2 flex justify-center items-center sml:text-sm mid:text-base text-xs">
            COMPLETED
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionTab;
