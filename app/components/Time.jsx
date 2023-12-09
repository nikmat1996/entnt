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
    startOfHour
  } from "date-fns";

export default () => {
    const currHr = format(Date.now(),"h")


   
    const [selectedHr, setSelectedHr] = useState(Number(currHr));
    

  const getClassname = (hr) => {
    let radius = 100;
    let angle = (hr * Math.PI) / 6;
    let x = Math.round(radius * Math.sin(angle));
    let y = Math.round(radius * Math.cos(angle));

    return `translate-x-[${x}px] -translate-y-[${y}px]`;
  };
//   return (
//     <div className="relative flex aspect-square h-96 items-center justify-center bg-green-400">
//       {Array.from({ length: 12 }, (_, index) => index + 1).map((hr) => {
//         return (
//           <button
//             className={twMerge(
//               "absolute aspect-square h-9 rounded-full text-sky-600",
//               getClassname(hr),
//             )}
//           >
//             {hr}
//           </button>
//         );
//       })}
//     </div>
//   );


  return (
    <div class="relative flex aspect-square w-80 items-center justify-center ">
      <button className={`${selectedHr == 1 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[87px] translate-x-[50px] rounded-full hover:outline`}>
        1
      </button>
      <button className={`${selectedHr == 2 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[50px] translate-x-[87px] rounded-full hover:outline`}>
        2
      </button>
      <button className={`${selectedHr == 3 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[0px] translate-x-[100px] rounded-full hover:outline`}>
        3
      </button>
      <button className={`${selectedHr == 4 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[-50px] translate-x-[87px] rounded-full hover:outline`}>
        4
      </button>
      <button className={`${selectedHr == 5 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[-87px] translate-x-[50px] rounded-full hover:outline`}>
        5
      </button>
      <button className={`${selectedHr == 6 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[-100px] translate-x-[0px] rounded-full hover:outline`}>
        6
      </button>
      <button className={`${selectedHr == 7 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[-87px] translate-x-[-50px] rounded-full hover:outline`}>
        7
      </button>
      <button className={`${selectedHr == 8 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[-50px] translate-x-[-87px] rounded-full hover:outline`}>
        8
      </button>
      <button className={`${selectedHr == 9 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[0px] translate-x-[-100px] rounded-full hover:outline`}>
        9
      </button>
      <button className={`${selectedHr == 10 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[50px] translate-x-[-87px] rounded-full hover:outline`}>
        10
      </button>
      <button className={`${selectedHr == 11 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[87px] translate-x-[-50px] rounded-full hover:outline`}>
        11
      </button>
      <button className={`${selectedHr == 12 ? "text-white bg-blue-600" : "text-sky-600"} absolute aspect-square h-9 -translate-y-[100px] translate-x-[0px] rounded-full hover:outline`}>
        12
      </button>
    </div>
  );
};
