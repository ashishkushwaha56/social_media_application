import React from 'react'
// import "./login.scss";
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div className="mt-5 flex items-center justify-around min-h-screen">
           <div className="mb-64">
                <h1 className="text-4xl text-center mb-4"> Login</h1>
                <form className="max-w-lg mx-auto" >
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <button className="primary">Login</button>
                </form>
                <div className="py-2 text-center text-gray-500">
                    Don't have an account yet? <Link className="underline text-black" to = '/register'>Register Now</Link>
                </div>
           </div>
        </div>
  )
}

export default Login