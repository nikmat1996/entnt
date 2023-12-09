import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "./Button";

export default (props) => {
    const { 
        addUser, 
        change_addUser_state, 
        person = {}, 
        editUser_state = false, 
        updateUser, 
        change_editUser_state
     } = props;

    const [user, setUser] = useState(person);

    const handleChange = (e) => {
        setUser((currVal) => ({
            ...currVal,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editUser_state){
            change_editUser_state(false)
            updateUser(user)
            return
        }

        change_addUser_state(false)
        addUser({
            firstName: "Random",
            lastName: "Name",
            location: "Location",
            ...user,
            id: uuidv4()
        })
    }

    const handleCancel = () => {
        if(editUser_state){
            change_editUser_state(false)
            return
        }
        change_addUser_state(false)
    }

    const handleFormClick = (e) => {
        e.stopPropagation()
    }

    return (
        <form className="px-5 py-2 flex items-center justify-around bg-gray-800 rounded-3xl h-[104px] border border-blue-400 w-full max-w-7xl mx-auto"  onClick={handleFormClick} onSubmit={handleSubmit}>
            <InputWrapper
                id={"firstName"}
                title={"First Name"}
                value={user.firstName}
                placeholder={"First Name"}
                onChange={handleChange}
            />
            <InputWrapper
                id={"lastName"}
                title={"Last Name"}
                value={user.lastName}
                placeholder={"Last Name"}
                onChange={handleChange}
            />
            <InputWrapper
                id={"location"}
                title={"Location"}
                value={user.location}
                placeholder={"Location"}
                onChange={handleChange}
            />
            <Button type="submit" >{editUser_state ? "Update" : "Add"}</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </form>
    );
};

const InputWrapper = ({ id, title, placeholder, value, onChange }) => (
    <div className="relative">
        <input
            type="text"
            id={id}
            name={id}
            placeholder={placeholder || ""}
            value={value}
            onChange={onChange}
            autoComplete="off"
            required
            className="focus:outline-none peer px-3 py-1 bg-slate-600 focus:bg-blue-600 rounded-xl placeholder-transparent focus:text-black text-sky-300 selection:text-black selection:bg-gray-400"
        />
        <label for={id} className="absolute left-4 -top-5 peer-focus:-top-5 peer-focus:left-4 text-xs text-blue-400 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:left-6 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-950 transition-all">{title}</label>
    </div>
);

export { InputWrapper };
