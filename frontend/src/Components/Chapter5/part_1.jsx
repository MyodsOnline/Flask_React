import React, {useState} from "react";





const Manatee = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}, Name: ${name}, Email: ${email}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br/>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/><br/>
                
                <label htmlFor="name">Name</label><br/>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/><br/>

                <label htmlFor="email">Email</label><br/>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
                
                <button>Submit</button>
            </form>
            <div>
                <p>Username: {username}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </>
    );
};

export default Manatee;