import React, { useState } from 'react';

const HookForm = (props) => {

    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {first_name, last_name, email, password};
        console.log("welcome", newUser, "Successfully Created Object");

        //Add the next 4 lines if you want to clear the form input fields without refreshing the page. 

        // setFirst_Name("");
        // setLast_Name("");
        // setEmail("");
        // setPassword("");
    }

    return (
        <div>
            <form onSubmit = {createUser}>
                <div className = "first_name">
                    <label>First Name:</label>
                    <input type = "text" onChange = { (e) => setFirst_Name(e.target.value)} value = {first_name} />
                </div>

                <div className = "last_name">
                    <label>Last Name:</label>
                    <input type = "text" onChange = { (e) => setLast_Name(e.target.value)} value = {last_name} />
                </div>

                <div className = "email">
                    <label>Email:</label>
                    <input type = "text" onChange = { (e) => setEmail(e.target.value)} value = {email} />
                </div>

                <div className = "password">
                    <label>Password:</label>
                    <input type = "text"onChange = { (e) => setPassword(e.target.value)}  value = {password} />
                </div>
                <input type = "submit" value = "Create User" />
                {/* Technically we dont need this submit button because its updating in real time */}
            </form>

            <div className = "FormData">
                <p>First Name: { first_name }</p>
                <p>Last Name: { last_name }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
            </div>
        </div>
    );
};

export default HookForm;