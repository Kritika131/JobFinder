import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAPIData,  setLoggout } from '../../../store/userSlice'
import './home.css'
import SearchResult from '../../searchres/SearchResult'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const [text,setText] = useState('');
  const [loc,setLoc] = useState('');
  const dispatch=useDispatch()
  
  const navigate = useNavigate();

  const handleInput=async(e)=>{
    e.preventDefault();
    let url = 'https://jobs.github.com/positions.json';

  let data = {
    description: text,
    location: loc,
  }
  
  let params = Object.keys(data).map(key => key + '=' + data[key]).join('&');
  let fullUrl = `${url}?${params}`;
  try{
    const response = await fetch(fullUrl)
    const data = await response.json();
    console.log(data);
    dispatch(setAPIData({
      data
    }))

  } catch(err){alert(err.message)};
  }
  const handleLogout=()=>{
  
    dispatch(setLoggout());
    navigate('/login')
  }
  return (
  
    <div className='container'>
      <div className="left">
          <button className='logout' onClick={handleLogout}>Logout</button>
         <h1>Welcome To Job Finder Portal</h1>
         <p>A place where you can find jod according to your skill!</p>
         <div className="input_container">
         <label htmlFor="text">Job search</label>
          <input type="text" value={text} id='text' onChange={e=>setText(e.target.value)}/>
          <label htmlFor="loc">Location</label>
          <input type="text" id='loc' value={loc} onChange={e=>setLoc(e.target.value)}/>
          <button onSubmit = {handleInput}>Search</button>
         </div>
      </div>
      <SearchResult/>
      
    </div>
  
  )
}

export default Home