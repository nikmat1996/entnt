"use client";
import AddUserButton from "./components/AddUserButton";
import Calender from "./components/Calender";
import ClientList from "./components/ClientList";
import InputUser from "./components/InputUser";
import Modal from "./components/Modal";
import userStore from "./store/userStore";

//     {
//         id: 1,
//         name: "Leslie Abbott",
//         role: "Co-Founder / CEO",
//         imageUrl: p1,
//         location: "Broadway",
//     },
//     {
//         id: 2,
//         name: "Blake Alexander",
//         role: "Account Coordinator",
//         imageUrl: p2,
//         location: "Wall Street",
//     },
//     {
//         id: 3,
//         name: "Cameron Barrett",
//         role: "Lead Developer",
//         imageUrl: p3,
//         location: "Madison Avenue",
//     },
//     {
//         id: 4,
//         name: "Dana Fisher",
//         role: "Marketing Specialist",
//         imageUrl: p4,
//         location: "Lexington Avenue",
//     },
// ];

export default function Home() {
  const addUser_state = userStore((store) => store.addUser_state);
  const editUser_state = userStore((store) => store.editUser_state);
  const deleteUser_state = userStore((store) => store.deleteUser_state);
  const change_addUser_state = userStore((store) => store.change_addUser_state);
  const change_editUser_state = userStore(
    (store) => store.change_editUser_state,
  );
  const change_deleteUser_state = userStore(
    (store) => store.change_deleteUser_state,
  );
  const addUser = userStore((store) => store.addUser);

  const handleWholeClick = (e) => {
    if (addUser_state) change_addUser_state(false);
    if (editUser_state) change_editUser_state(false);
    console.log("MAIN clicked");
    // console.log("editUser_state =",editUser_state);
    // console.log("addUser_state =",addUser_state);
  };

  return (
    <main onClick={handleWholeClick} className="max-h-screen p-24 relative">
      <ClientList />

      <AddUserButton
        editUser_state={editUser_state}
        deleteUser_state={deleteUser_state}
        addUser_state={addUser_state}
        change_addUser_state={change_addUser_state}
        addUser={addUser}
      />
      <Modal />
    </main>
  );
}
