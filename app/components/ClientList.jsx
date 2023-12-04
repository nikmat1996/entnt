import useStore from "../store/zustand";
import ClientCard from "./ClientCard";
import DeleteUser from "./DeleteUser";
import InputUser from "./InputUser";

export default () => {
    const users = useStore((store) => store.users);
    const editUser_state = useStore((store) => store.editUser_state);
    const addUser_state = useStore((store) => store.addUser_state);
    const deleteUser_state = useStore((store) => store.deleteUser_state);
    const editUser_id = useStore((store) => store.editUser_id);
    const deleteUser_id = useStore((store) => store.deleteUser_id);
    const updateUser = useStore((store) => store.updateUser);
    const deleteUser = useStore((store) => store.deleteUser);
    const add_editUser_id = useStore((store) => store.add_editUser_id);
    const add_deleteUser_id = useStore((store) => store.add_deleteUser_id);
    const change_editUser_state = useStore((store) => store.change_editUser_state);
    const change_deleteUser_state = useStore((store) => store.change_deleteUser_state);

    console.log("editUser_id = ", editUser_id);
    console.log("addUser_state = ", addUser_state);

    return (
        <ul role="list" className={`${addUser_state ? "pointer-events-none opacity-30" : ""} flex flex-col gap-4 mb-4`}>
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
                if (deleteUser_state) {
                    if (person.id === deleteUser_id)
                        return (
                            <DeleteUser 
                                person={person} 
                                deleteUser={deleteUser} 
                                change_deleteUser_state={change_deleteUser_state}
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
                    />
                );
            })}
        </ul>
    );
};
