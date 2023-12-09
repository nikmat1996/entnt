import Button from "./Button";
import { fromUnixTime, format } from "date-fns";
import meetingStore from "../store/meetingStore";

export default ({person, deleteUser, change_deleteUser_state, deleteAllmeetingOfPerson, deleteUser_state, meetings}) => {

  const deletemeeting_id = meetingStore((store) => store.deletemeeting_id);
  const deletemeeting = meetingStore((store) => store.deletemeeting);
  const deletemeeting_state = meetingStore((store) => store.deletemeeting_state);
  const change_deletemeeting_state = meetingStore(
    (store) => store.change_deletemeeting_state,
  );

  const meeting = meetings?.find(meeting => meeting.id == deletemeeting_id.id)
  console.log(person)

    const handleDelete = () => {
      if(deleteUser_state){

        change_deleteUser_state(false)
        deleteUser(person.id)
        deleteAllmeetingOfPerson(person.id)

      }

      if(deletemeeting_state){
        change_deletemeeting_state(false)
        deletemeeting(deletemeeting_id.id)
      }
    }

    const handleCancel = () => {
        change_deleteUser_state(false)
        change_deletemeeting_state(false)
    }

  return (
    <section className="flex h-[104px] items-center justify-center gap-5 rounded-3xl border border-blue-400 bg-gray-800 px-5 py-2">
        <p className="text-gray-400">{deleteUser_state ? `DELETE ${person.lastName}`: `Delete Meeting with ${person.lastName} at ${format(fromUnixTime(meeting?.timeStamp),"h a")}`}</p>
        <Button onClick={handleDelete}>Confirm</Button>
        <Button onClick={handleCancel}>Cancel</Button>
    </section>
  );
};
