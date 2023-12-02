import { create } from "zustand";
import p1 from "../../public/images/p1.avif";
import p2 from "../../public/images/p2.avif";
import p3 from "../../public/images/p3.avif";
import p4 from "../../public/images/p4.avif";

const useStore = create((set) => ({
    users: [
        {
            id: 1,
            firstName: "Leslie",
            lastName: "Abbott",
            role: "Co-Founder / CEO",
            imageUrl: p1,
            location: "Broadway",
        },
        {
            id: 2,
            firstName: "Blake",
            lastName: "Alexander",
            role: "Account Coordinator",
            imageUrl: p2,
            location: "Wall Street",
        },
        {
            id: 3,
            firstName: "Cameron",
            lastName: "Barrett",
            role: "Lead Developer",
            imageUrl: p3,
            location: "Madison Avenue",
        },
        {
            id: 4,
            firstName: "Dana",
            lastName: "Fisher",
            role: "Marketing Specialist",
            imageUrl: p4,
            location: "Lexington Avenue",
        },
    ],
    addUser: (newUser) =>
        set((store) => ({ users: [...store.users, newUser] })),
    deleteUser: (id) =>
        set((store) => ({
            users: store.users.filter((person) => person.id !== id),
        })),
    updateUser: () => set((store) => ({ bears: store.bears + 1 })),
    addUserState: false,
    updateAddUserState: (val) => set((store) => ({ addUserState: val })),
}));

export default useStore;
