import { useState } from "react";
import { Link } from "react-router-dom";
// import {} from "react-router-dom";

// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000';


export default function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function registerUser(event){
        event.preventDefault();
        axios.get('http://localhost:4000/test');
    }

    return (
        <div className="mt-5 flex  items-center justify-around min-h-screen">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4"> Register</h1>
                <form className="max-w-lg mx-auto" onSubmit={registerUser} >
                    <input type="text" placeholder="Name" 
                        value={name} 
                        onChange={ev=>setName(ev.target.value)}/>
                    <input type="email" placeholder="Enter email" 
                        value={email} 
                        onChange={ev=>setEmail(ev.target.value)}/>
                    <input type="password" placeholder="Enter password" 
                        value={password} 
                        onChange={ev=>setPassword(ev.target.value)}/>
                    <button className="primary">Register</button>
                </form>
                <div className="py-2 text-center text-gray-500">
                    Allready have an account? <Link className="underline text-black" to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
}