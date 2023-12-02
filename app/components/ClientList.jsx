import useUserStore from "../store/zustand";
import ClientCard from "./ClientCard";

export default () => {

    const users = useUserStore((state) => state.users);

    return (
        <ul role="list" className="flex flex-col gap-4 ">
            {users.map((person) => (
                <ClientCard person={person} />
            ))}
        </ul>
    );
};
