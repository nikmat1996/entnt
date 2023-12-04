import PlusIcon from "./PlusIcon";

export default ({ onClick, editUser_state, deleteUser_state }) => (
    <button onClick={onClick} className={`${editUser_state || deleteUser_state ? "pointer-events-none opacity-30": ""} w-full h-[104px] bg-gray-800  rounded-3xl my-4 group box-border flex items-center justify-center text-gray-500 hover:text-gray-400 hover:outline hover:outline-blue-400 hover:outline-1 focus:outline-none focus-visible:outline-1 focus-visible:outline-blue-400 focus-visible:text-gray-400 active:bg-blue-950`}>
        Add New User <span className="ml-5 group-hover:scale-125  transition-transform "><PlusIcon /></span>
    </button>
)