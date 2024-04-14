import React from 'react'
import notes from "../assets/notes-62.svg"
import "./login.css"
const Login = () => {
  return (
    <article className='card-login'>
      <img className='notes' src={notes} alt="notes" />
       <div className="card-login-card">
       <h2>Login with Github user</h2>
        <label htmlFor="user">Username</label>
      <input type="text" id='User' name='user' placeholder='Introduce github user' />
      <button>Log in</button>
      <button>Guest Mode</button>
       </div>
    </article>
  )
}

export default Login
