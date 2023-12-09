import meetingStore from "../store/meetingStore";
import userStore from "../store/userStore";
import Button from "./Button";
import Calender from "./Calender";
import Time from "./Time";

export default () => {
  const addmeeting = meetingStore((store) => store.addmeeting);
  const change_addmeeting_state = meetingStore(
    (store) => store.change_addmeeting_state,
  );
  const addmeeting_state = meetingStore((store) => store.addmeeting_state);
  const users = userStore((store) => store.users);
  if (!addmeeting_state) return null;
  return (
    <section className="absolute left-1/2 top-1/2 min-h-[545px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-slate-800 p-10 pt-12 flex flex-col justify-between">
      <div className="flex grow">
        <Calender />
        <Time />
      </div>
      <div className="flex gap-2 justify-center">
        <label htmlFor="schedule-button"></label>
        <Button id="schedule-button">Done</Button>
        <Button onClick={() => change_addmeeting_state(false)}>Cancel</Button>

      </div>
    </section>
  );
};
