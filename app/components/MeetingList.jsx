import PlusIcon from "./PlusIcon";
import meetingStore from "../store/meetingStore";
import { fromUnixTime, format } from "date-fns";
import CloseIcon from "./CloseIcon";
import EditIcon from "./EditIcon";

const MeetingList = ({ userId, meetings }) => {
  const change_addmeeting_state = meetingStore(
    (store) => store.change_addmeeting_state,
  );
  const add_editmeeting_id = meetingStore(
    (store) => store.add_editmeeting_id,
  );

  const change_deletemeeting_state = meetingStore(
    (store) => store.change_deletemeeting_state,
  );
  const add_deletemeeting_id = meetingStore(
    (store) => store.add_deletemeeting_id,
  );

  const add_addmeeting_userId = meetingStore(
    (store) => store.add_addmeeting_userId,
  );

  const change_editmeeting_state = meetingStore(
    (store) => store.change_editmeeting_state,
  );

  const handleAddMeeting = () => {
    change_addmeeting_state(true);
    add_addmeeting_userId(userId);
  };

  const handleDelete = (id) => {
    change_deletemeeting_state(true)
    add_deletemeeting_id({id, userId})
  }

  const handleEdit = (id) => {
    change_editmeeting_state(true)
    add_editmeeting_id(id)
  }

  return (
    <section className="flex gap-5">
      <div className="flex gap-5">
        {meetings
          .filter((meeting) => meeting.userId == userId)
          .map((meeting) => (
            <div
              key={meeting.id}
              className="relative flex flex-col justify-center rounded-3xl group/meeting px-6 text-center text-sm/6 text-sky-500 outline outline-1 outline-gray-600"
            >
              <span
                  onClick={() => handleDelete(meeting.id)}
                  className="absolute peer top-0 right-0 w-5 h-5 peer/meeting flex justify-center items-center cursor-pointer opacity-0 rounded-full bg-blue-900 transition-all hover:bg-blue-700 group-hover/meeting:opacity-100 group-hover/meeting:visible group-hover/meeting:translate-x-1 group-hover/meeting:-translate-y-2"
              >
                  <CloseIcon />
              </span>
              <span
                  onClick={() => handleEdit(meeting.id)}
                  className="absolute peer top-0 left-0 w-5 h-5 flex justify-center items-center cursor-pointer opacity-0 rounded-full bg-blue-900 transition-all hover:bg-sky-400 group-hover/meeting:opacity-100 group-hover/meeting:visible group-hover/meeting:-translate-x-1 group-hover/meeting:-translate-y-2"
              >
                  <EditIcon />
              </span>
              <h4 className="text-xs font-semibold peer-hover/meeting:line-through peer-hover/meeting:opacity-50">{`${format(fromUnixTime(meeting.timeStamp),"E")}`}</h4>
              <h3 className="font-bold peer-hover/meeting:line-through peer-hover/meeting:opacity-50">{`${format(fromUnixTime(meeting.timeStamp),"do")} `}
                <span className="uppercase peer-hover/meeting:line-through peer-hover/meeting:opacity-50">{`${format(fromUnixTime(meeting.timeStamp),"MMM")}`}</span>
              </h3>
              <h4 className="font-semibold peer-hover/meeting:line-through peer-hover/meeting:opacity-50">{`${format(fromUnixTime(meeting.timeStamp),"h a")}`}</h4>
            </div>
          ))}
      </div>
      <button
        className="group flex flex-col items-center justify-center rounded-3xl px-3 text-center text-xs text-gray-500 hover:text-gray-400 hover:outline hover:outline-1 hover:outline-blue-400 focus:outline-none focus-visible:text-gray-400 focus-visible:outline-1 focus-visible:outline-blue-400 active:bg-blue-950"
        onClick={handleAddMeeting}
      >
        Add Meeting
        <span className="h-6 scale-75 transition-transform group-hover:scale-100">
          <PlusIcon />
        </span>
      </button>
    </section>
  );
};

export default MeetingList