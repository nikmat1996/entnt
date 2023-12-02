import PlusIcon from "./PlusIcon";

export default ({setAddingUser, onClick}) => (
    <button onClick={onClick} className="w-full bg-gray-800 h-20 rounded-3xl my-5 group box-border flex items-center justify-center text-gray-500 hover:text-gray-400 hover:outline hover:outline-blue-400 hover:outline-1 focus:outline-none focus-visible:outline-1 focus-visible:outline-blue-400 focus-visible:text-gray-400 active:bg-blue-950">
        Add New User <span className="ml-5 group-hover:scale-125  transition-transform "><PlusIcon /></span>
    </button>
)