import PlusIcon from "./PlusIcon";
import meetingStore from "../store/meetingStore";

export default ({ userId, meetings }) => {
  const change_addmeeting_state = meetingStore(
    (store) => store.change_addmeeting_state,
  );
  const add_addmeeting_userId = meetingStore(
    (store) => store.add_addmeeting_userId,
  );

  const handleClick = () => {
    change_addmeeting_state(true);
    add_addmeeting_userId(userId);
  };
  return (
    <section className="flex gap-5">
      {meetings
        .filter((meeting) => meeting.userId == userId)
        .map((meeting) => (
          <div
            key={meeting.id}
            className="flex flex-col justify-center rounded-3xl px-6 text-center text-sm/6 text-sky-500 outline outline-1 outline-gray-600"
          >
            <h4 className="text-xs font-semibold">WED</h4>
            <h3 className="font-bold ">12 DEC</h3>
            <h4 className="font-semibold">4 PM</h4>
          </div>
        ))}
      <button
        onClick={handleClick}
        className="group flex flex-col items-center justify-center rounded-3xl px-3 text-center text-xs text-gray-500 hover:text-gray-400 hover:outline hover:outline-1 hover:outline-blue-400 focus:outline-none focus-visible:text-gray-400 focus-visible:outline-1 focus-visible:outline-blue-400 active:bg-blue-950"
      >
        Add Meeting
        <span className="h-6 scale-75 transition-transform group-hover:scale-100">
          <PlusIcon />
        </span>
      </button>
    </section>
  );
};
