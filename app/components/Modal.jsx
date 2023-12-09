import { useState } from "react";
import meetingStore from "../store/meetingStore";
import userStore from "../store/userStore";
import Button from "./Button";
import Calender from "./Calender";
import Time from "./Time";
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
  startOfDay,
  compareAsc,
  isSameHour,
  getUnixTime
} from "date-fns";
import { v4 as uuidv4 } from "uuid";

const Modal =() => {
  const addmeeting = meetingStore((store) => store.addmeeting);
  const updatemeeting = meetingStore((store) => store.updatemeeting);
  const change_addmeeting_state = meetingStore(
    (store) => store.change_addmeeting_state,
  );

  const change_editmeeting_state = meetingStore(
    (store) => store.change_editmeeting_state,
  );
  const editmeeting_state = meetingStore((store) => store.editmeeting_state);
  const addmeeting_state = meetingStore((store) => store.addmeeting_state);
  const editmeeting_id = meetingStore((store) => store.editmeeting_id);
  const addmeeting_userId = meetingStore((store) => store.addmeeting_userId);
  const toEdit = meetingStore((store) => store.meetings.find(meeting => meeting.id == editmeeting_id))
  const users = userStore((store) => store.users);
  const [day, setDay] = useState(new Date());
  const [finalSchedule, setFinalSchedule] = useState();

  const handleClick = () => {
    if (addmeeting_state) {
      addmeeting({
        userId: addmeeting_userId,
        timeStamp: getUnixTime(finalSchedule),
        id: uuidv4(),
      });
      change_addmeeting_state(false)
      return
    }
    if(editmeeting_state){
      updatemeeting({
        ...toEdit,
        timeStamp: getUnixTime(finalSchedule)
      })
      change_editmeeting_state(false)
    }
  };

  const handleCancel = () => {
    change_editmeeting_state(false)
    change_addmeeting_state(false)
  }

  return (
    <section className="absolute left-1/2 top-1/2 flex min-h-[545px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-3xl bg-slate-800 p-10 pt-12">
      <div className="flex grow">
        <Calender setDay={setDay} setFinalSchedule={setFinalSchedule} />
        <Time day={day} setFinalSchedule={setFinalSchedule} />
      </div>
      <div className="flex items-center justify-center gap-3">
        {finalSchedule && (
          <label htmlFor="schedule-button" className="text-sky-500">{`${format(
            finalSchedule,
            "E do MMM"
          )} at ${format(finalSchedule, "h a")} ?`}</label>
        )}
        <Button
          disabled={!finalSchedule}
          id="schedule-button"
          onClick={handleClick}
        >
          Done
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </section>
  );
};

export default Modal