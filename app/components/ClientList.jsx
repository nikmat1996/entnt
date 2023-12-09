import userStore from "../store/userStore";
import ClientCard from "./ClientCard";
import DeleteUser from "./DeleteUser";
import InputUser from "./InputUser";
import meetingStore from "../store/meetingStore";   


export default () => {
    const users = userStore((store) => store.users);
    const editUser_state = userStore((store) => store.editUser_state);
    const addUser_state = userStore((store) => store.addUser_state);
    const deleteUser_state = userStore((store) => store.deleteUser_state);
    const editUser_id = userStore((store) => store.editUser_id);
    const deleteUser_id = userStore((store) => store.deleteUser_id);
    const updateUser = userStore((store) => store.updateUser);
    const deleteUser = userStore((store) => store.deleteUser);
    const add_editUser_id = userStore((store) => store.add_editUser_id);
    const add_deleteUser_id = userStore((store) => store.add_deleteUser_id);
    const change_editUser_state = userStore((store) => store.change_editUser_state);
    const change_deleteUser_state = userStore((store) => store.change_deleteUser_state);
    
    const meetings = meetingStore((store) => store.meetings);
    const deleteAllmeetingOfPerson = meetingStore((store) => store.deleteAllmeetingOfPerson);
    const addmeeting_state = meetingStore((store) => store.addmeeting_state);
    const deletemeeting_id = meetingStore((store) => store.deletemeeting_id);
    const deletemeeting_state = meetingStore((store) => store.deletemeeting_state);

    console.log(deletemeeting_id)
    
    return (
        <ul role="list" className={`${addUser_state || addmeeting_state ? "pointer-events-none opacity-30" : ""} flex flex-col gap-4 mb-4 w-full max-w-7xl mx-auto`}>
            {users.map((person) => {
                if (editUser_state) {
                    if (person.id === editUser_id)
                        return (
                            <InputUser
                                person={person}
                                editUser_state={editUser_state}
                                updateUser={updateUser}
                                change_editUser_state={change_editUser_state}
                            />
                        );
                }
                if (deleteUser_state || deletemeeting_state) {
                    if (person.id === deleteUser_id || person.id === deletemeeting_id.userId)
                        return (
                            <DeleteUser 
                                person={person} 
                                deleteUser={deleteUser} 
                                change_deleteUser_state={change_deleteUser_state}
                                deleteAllmeetingOfPerson={deleteAllmeetingOfPerson}
                                deleteUser_state={deleteUser_state}
                                meetings={meetings}
                                
                            />
                        );
                }
                return (
                    <ClientCard
                        person={person}
                        key={person.id}
                        editUser_state={editUser_state}
                        deleteUser={deleteUser}
                        add_editUser_id={add_editUser_id}
                        change_editUser_state={change_editUser_state}
                        deleteUser_state={deleteUser_state}
                        change_deleteUser_state={change_deleteUser_state}
                        add_deleteUser_id={add_deleteUser_id}
                        meetings={meetings}
                        deletemeeting_state={deletemeeting_state}
                    />
                );
            })}
        </ul>
    );
};
