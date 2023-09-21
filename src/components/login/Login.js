// import { useState, useEffect } from "react";
import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setLoginUser } from "../../store/userSlice";
function Login() { 

  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const Navigate = useNavigate()
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const handleLogin=(e)=>{
    e.preventDefault();
    const user = users?.find(user=>user.name === name && user.password === pass);

    if(user){
      dispatch(setLoginUser({
        user
      }))
      Navigate('/')
    }else{
      alert('Wrong credentials !!')
    }
  }


  return (
    <div className="container">
     

      <form >
        <h1>Login</h1>
        
        <div className="form_content">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={name}
              onChange={e=>setName(e.target.value)} 
            />
          </div>
         
         
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={pass}
              onChange={e=>setPass(e.target.value)}
              
            />
          </div>
          
          <button className="button" onClick={handleLogin}>Login</button>
          <Link to='/signup' className="signUp">SignUp</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;