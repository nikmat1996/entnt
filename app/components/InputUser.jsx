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
            ...user,
            id: uuidv4()
        })
    }

    const handleFormClick = (e) => {
        e.stopPropagation()
    }

    return (
        <form className="px-5 py-2 flex items-center mt-4 bg-gray-800 rounded-3xl" onClick={handleFormClick}>
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
            <button type="submit" onClick={handleSubmit} >Add</button>
        </form>
    );
};

const InputWrapper = ({ id, title, placeholder, value, onChange }) => (
    <div className="p-3">
        <input
            type="text"
            id={id}
            name={id}
            placeholder={placeholder || ""}
            value={value}
            onChange={onChange}
        />
        <label for={id}>{title}</label>
    </div>
);

export { InputWrapper };
