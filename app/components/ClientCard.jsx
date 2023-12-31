import CloseIcon from "./Icons/CloseIcon";
import Image from "next/image";
import LocationIcon from "./Icons/LocationIcon";
import userStore from "../store/userStore";
import meetingStore from "../store/meetingStore";
import EditIcon from "./Icons/EditIcon";
import MeetingList from "./MeetingList";

const ClientCard = (props) => {

    const { 
        person, 
        editUser_state, 
        add_editUser_id, 
        deleteUser_state, 
        change_editUser_state, 
        change_deleteUser_state, 
        add_deleteUser_id,
        meetings,
        deletemeeting_state
     } = props;
    // const deleteUser = userStore((state) => state.deleteUser);
    // const change_editUser_state = userStore((state) => state.change_editUser_state);
    // const add_editUser_id = userStore((state) => state.add_editUser_id);

    const handleEditUser = () => {
        change_editUser_state(true)
        add_editUser_id(person.id)
    }
    const handleDeleteUser = () => {
        change_deleteUser_state(true)
        add_deleteUser_id(person.id)
    }

    return (
        <li className={`${editUser_state || deleteUser_state || deletemeeting_state? "pointer-events-none opacity-30" : ""} flex flex-col lg:flex-row gap-y-4 relative justify-between gap-x-6 px-5 py-2 bg-slate-800 rounded-2xl group/li hover:bg-blue-950 transition-all hover:shadow-lg selection:text-sky-900 selection:bg-blue-400`}>
            <section className="flex min-w-0 py-4 md:gap-x-4 group/s1 lg:border-r border-blue-900 w-full max-w-sm items-center">
                <span
                    onClick={handleDeleteUser}
                    className="absolute peer top-0 right-0 invisible cursor-pointer opacity-0 rounded-full bg-blue-800 transition-all hover:bg-blue-500 group-hover/li:opacity-100 group-hover/li:visible group-hover/li:translate-x-2 group-hover/li:-translate-y-3"
                >
                    <CloseIcon />
                </span>
                <Image
                    className="h-12 w-12 md:w-14 md:h-14 mr-3 flex-none rounded-full bg-gray-50 opacity-90 group-hover/li:opacity-100 peer-hover:opacity-10"
                    src={person.imageUrl}
                    width={6}
                    height={6}
                    alt=""
                    unoptimized
                />
                <div className="min-w-0 flex-auto peer-hover:[&>p]:line-through">
                    <p className="text-sm font-semibold leading-6 text-blue-400 transition-all group-hover/li:text-blue-200">
                        {`${person.firstName} ${person.lastName}`}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-400 transition-all group-hover/li:text-gray-300 flex items-center gap-1">
                        <LocationIcon />
                        {person.location}
                    </p>
                </div>
                <button  onClick={handleEditUser} className="flex items-center invisible peer-hover:invisible group-hover/s1:visible rounded-3xl border group/edit border-gray-500 cursor-pointer  h-6 p-2 md:mr-5 opacity-75 hover:opacity-100 hover:bg-slate-800">
                    <div className="text-xs p-2 text-gray-400">Edit User</div>
                    <span className="-translate-x-1 group-hover/edit:translate-x-0 transition-transform duration-300"><EditIcon /></span>
                </button>
            </section>
            
            <MeetingList userId={person.id} meetings={meetings}/>
        </li>
    );
};

export default ClientCard
