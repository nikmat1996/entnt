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
  compareAsc
} from "date-fns";
import { Fragment, useState } from "react";
import LeftIcon from "./Icons/LeftIcon";
import { twMerge } from "tailwind-merge";
import RightIcon from "./Icons/RightIcon";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-11T13:00",
    endDatetime: "2022-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T09:00",
    endDatetime: "2022-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T17:00",
    endDatetime: "2022-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-06-09T13:00",
    endDatetime: "2022-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-13T14:00",
    endDatetime: "2022-05-13T14:30",
  },
];


export default function Calender({ setDay = () => {}, setFinalSchedule}) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [selectedMonth, setSelectedMonth] = useState(format(today, "MMM-yyyy"));
  let firstDaySelectedMonth = parse(selectedMonth, "MMM-yyyy", new Date());
  let currentMonth = format(today, "MMM-yyyy");
  
  // console.log(parse("23-MAY-2023", "dd-MMM-yyyy", new Date()))
  console.log("selected = ", selectedDay)
  let days = eachDayOfInterval({
    start: firstDaySelectedMonth,
    end: endOfMonth(firstDaySelectedMonth),
  });

  function handleClick(day){
    setSelectedDay(day)
    setFinalSchedule(false)
    setDay(day)
  }

  function previousMonth() {
    let firstDayNextMonth = add(firstDaySelectedMonth, { months: -1 });
    setSelectedMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDaySelectedMonth, { months: 1 });
    setSelectedMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay),
  );

  return (
      <div className="mx-auto w-80 md:w-96 md:px-6 transition-all ">
        {/* <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200"> */}
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-blue-600">
                {format(firstDaySelectedMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 disabled:pointer-events-none group"
                disabled={currentMonth == selectedMonth}
              >
                <span className="sr-only">Previous month</span>
                <span className="h-6 w-6 hover:outline hover:outline-1 hover:outline-sky-400 rounded-full flex justify-center items-center group-disabled:opacity-30" aria-hidden="true">
                  <LeftIcon />
                </span>
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 "
              >
                <span className="sr-only">Next month</span>
                <span className="h-6 w-6 hover:outline hover:outline-1 hover:outline-sky-400 rounded-full flex justify-center items-center" aria-hidden="true">
                  <RightIcon />
                </span>
              </button>
            </div>
            <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-sky-400 select-none pb-3" >
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm ">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={twMerge(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => handleClick(day)}
                    className={twMerge(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                      !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDaySelectedMonth) && "text-sky-600",
                      !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDaySelectedMonth) && "text-blue-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500", 
                      isEqual(day, selectedDay) && !isToday(day) && "bg-blue-600",
                      !isEqual(day, selectedDay) && "hover:outline",
                      (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                      (compareAsc(day, today) === -1) && "text-sky-800 pointer-events-none",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="mx-auto mt-1 h-1 w-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day),
                    ) && (
                      <div className="h-1 w-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          {/* <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{" "} 
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section> */}
        {/* </div> //hello */}
      </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
