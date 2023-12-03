import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default ({addUser, updateAddUserState}) => {
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        setUser((currVal) => ({
            ...currVal,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        
        e.preventDefault()
        updateAddUserState(false)
        addUser({
            firstName: "Random",
            lastName: "Name",
            location: "Location",
            ...user,
            id: uuidv4()
        })
    }

    const handleFormClick = (e) => {
        e.stopPropagation()
    }

    return (
        <form className="px-5 py-2 flex items-center justify-around mt-4 bg-gray-800 rounded-3xl h-[104px] border border-blue-400"  onClick={handleFormClick} onSubmit={handleSubmit}>
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
            <button type="submit" className="p-1 px-5 border border-1 rounded-2xl border-sky-600 text-blue-500 hover:bg-blue-600 hover:text-blue-950 focus:outline-none focus:bg-blue-600 focus:text-blue-950" >Add</button>
            <button onClick={()=>updateAddUserState(false)} className="p-1 px-5 border border-1 rounded-2xl border-sky-600 text-blue-500 hover:bg-blue-600 hover:text-blue-950 focus:outline-none focus:bg-blue-600 focus:text-blue-950" >Cancel</button>
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
            className="focus:outline-none peer px-3 py-1 bg-slate-600 focus:bg-blue-600 rounded-xl placeholder-transparent"
        />
        <label for={id} className="absolute left-4 -top-5 peer-focus:-top-5 peer-focus:left-4 text-xs text-blue-400 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:left-6 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-950 transition-all">{title}</label>
    </div>
);

export { InputWrapper };
