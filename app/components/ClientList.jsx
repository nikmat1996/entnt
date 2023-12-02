import useStore from "../store/zustand";
import ClientCard from "./ClientCard";

export default ({ addUserState }) => {

    const users = useStore((state) => state.users);
    console.log(users)

    return (
        <ul role="list" className={`${addUserState ? "pointer-events-none" : ""} flex flex-col gap-4 `}>
            {users.map((person) => (
                <ClientCard person={person} key={person.id}/>
            ))}
        </ul>
    );
};
