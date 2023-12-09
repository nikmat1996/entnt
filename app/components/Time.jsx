import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  getHours,
  addHours,
  startOfHour,
} from "date-fns";

export default () => {
  const currTime = Date.now();
  const nextTime = addHours(currTime, 1)
  const nextHr = format(nextTime, "h");
  const currMeridiem = format(nextTime, "a");

  const [selectedHr, setSelectedHr] = useState(Number(nextHr));
  const [meridiem, setMeridiem] = useState(currMeridiem);
  

  const getClassname = (hr) => {
    let radius = 100;
    let angle = (hr * Math.PI) / 6;
    let x = Math.round(radius * Math.sin(angle));
    let y = Math.round(radius * Math.cos(angle));

    return `translate-x-[${x}px] -translate-y-[${y}px]`;
  };
    return (
      <div className="relative flex aspect-square h-96 items-center justify-center ">
        {Array.from({ length: 12 }, (_, index) => index + 1).map((hr) => {
          return (
            <button
            onClick={() => setSelectedHr(hr)}
              className={twMerge(
                "absolute aspect-square h-9 rounded-full text-sky-600 hover:outline",
                getClassname(hr),
                selectedHr == hr && "bg-blue-600 text-white outline-none"
                
              )}
            >
              {hr}
            </button>
          );
        })}
      </div>
    );

  // return (
  //   <div class="relative flex aspect-square w-80 items-center justify-center ">
  //     <button
  //       className={`${
  //         selectedHr == 1 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[87px] translate-x-[50px] rounded-full hover:outline`}
  //     >
  //       1
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 2 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[50px] translate-x-[87px] rounded-full hover:outline`}
  //     >
  //       2
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 3 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[0px] translate-x-[100px] rounded-full hover:outline`}
  //     >
  //       3
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 4 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-50px] translate-x-[87px] rounded-full hover:outline`}
  //     >
  //       4
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 5 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-87px] translate-x-[50px] rounded-full hover:outline`}
  //     >
  //       5
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 6 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-100px] translate-x-[0px] rounded-full hover:outline`}
  //     >
  //       6
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 7 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-87px] translate-x-[-50px] rounded-full hover:outline`}
  //     >
  //       7
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 8 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-50px] translate-x-[-87px] rounded-full hover:outline`}
  //     >
  //       8
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 9 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[0px] translate-x-[-100px] rounded-full hover:outline`}
  //     >
  //       9
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 10 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[50px] translate-x-[-87px] rounded-full hover:outline`}
  //     >
  //       10
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 11 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[87px] translate-x-[-50px] rounded-full hover:outline`}
  //     >
  //       11
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 12 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[100px] translate-x-[0px] rounded-full hover:outline`}
  //     >
  //       12
  //     </button>
  //     <h3 className="text-lg font-semibold text-sky-600">{meridiem}</h3>
  //   </div>
  // );
};
