
import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignUpDetails, setUserDetails } from "../../store/userSlice";
function SignUp() { 

    const Navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [c_password,setC_password] = useState('');

    const dispatch = useDispatch()

    const signUp = (e)=>{
        if(password!==c_password){
          alert("confirm password does't matched!!")
        }
        e.preventDefault();
        dispatch(setSignUpDetails({
          id:(new Date).getTime(),
          name,email,password
        
          })
        )
        Navigate('/login');
    }


  return (
    <div className="container">
     

      <form >
        <h1>SignUp</h1>
        
        <div className="form_content">
          <div className="field">
            <label>Username</label>
            <input type="text"
              name="username"
              placeholder="Username" 
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </div>
         
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
             
            />
          </div>
         
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              value={c_password}
              onChange={e=>setC_password(e.target.value)}
              
            />
          </div>
          
          <button className="button" onClick={signUp}>SignUp</button>
          <Link to='/login' className="signUp">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;