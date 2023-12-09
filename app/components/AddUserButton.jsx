import InputUser from "./InputUser";
import meetingStore from "../store/meetingStore";   
import PlusIcon from "./PlusIcon";

 const AddUserButton = (props) => {
  const {
    onClick = () => {},
    editUser_state = false,
    deleteUser_state = false,
    addUser_state = false,
    change_addUser_state,
    addUser,
    deletemeeting_state,
    editmeeting_state
  } = props;
  const addmeeting_state = meetingStore((store) => store.addmeeting_state);


  if (addUser_state)
    return (
      <InputUser
        addUser={addUser}
        change_addUser_state={change_addUser_state}
      />
    );

  return (
    <button
      onClick={() => change_addUser_state(true)}
      className={`${
        editUser_state || deleteUser_state || addmeeting_state || deletemeeting_state || editmeeting_state
          ? "pointer-events-none opacity-30"
          : ""
      } group my-4 box-border  flex h-[104px] w-full items-center justify-center rounded-3xl bg-gray-800 text-gray-500 hover:text-gray-400 hover:outline hover:outline-1 hover:outline-blue-400 focus:outline-none focus-visible:text-gray-400 focus-visible:outline-1 focus-visible:outline-blue-400 active:bg-blue-950 max-w-7xl mx-auto`}
    >
      Add New User
      <span className="ml-5 transition-transform  group-hover:scale-125 ">
        <PlusIcon />
      </span>
    </button>
  );
};

export default AddUserButton