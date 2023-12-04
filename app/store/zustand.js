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
    addUser: (newVal) => set((store) => ({ users: [...store.users, newVal] })),
    deleteUser: (id) =>
        set((store) => ({
            users: store.users.filter((person) => person.id !== id),
        })),
    updateUser: (updatedVal) =>
        set((store) => ({
            users: store.users.map((user) =>
                user.id === updatedVal.id ? updatedVal : user
            ),
        })),
    addUser_state: false,
    change_addUser_state: (val) => set((store) => ({ addUser_state: val })),
    deleteUser_state: false,
    change_deleteUser_state: (val) =>
        set((store) => ({ deleteUser_state: val })),
    editUser_state: false,
    change_editUser_state: (val) => set((store) => ({ editUser_state: val })),
    editUser_id: null,
    add_editUser_id: (val) => set((store) => ({ editUser_id: val })),
    deleteUser_id: null,
    add_deleteUser_id: (val) => set((store) => ({ deleteUser_id: val })),
}));

export default useStore;
