import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectApiData, setAPIIdData, setJobId } from '../../store/userSlice'
import './searchres.css'
import { useNavigate } from 'react-router-dom'

const SearchResult = () => {
    const [id,setId] = useState(null);

    const apiData = useSelector(selectApiData);
    const no_of_res = apiData.length;
    const navigate = useNavigate();
    const dispatch = useDispatch();
   const url = `https://jobs.github.com/positions/${id}.json`;
    useEffect(async()=>{
        try{
            
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            dispatch(setAPIIdData({
             data
            }))  
            navigate(`/jobdetail/${id}`)
        } catch(err){
            console.log(err.message);
        }

    },[id])

  return (
    <div className='search_container'>
    
       {
        apiData ? (
       <h2>  Showing {no_of_res} jobs</h2>

        ):(
         <span>No Record Found!</span>
        )
       }
        <hr />
        
           {
            
            apiData?.map((data)=>(

                <div className="job_container">
                  <p>Job_title - {data.title}</p>
                  <p>Job_type - {data.type}</p>
                  <p>Company Name - {data.company}</p>
                  <p>Location - {data.location}</p>
                  <p>Description - {data.discription}</p>
                  <button onClick={()=>setId(data.id)}>Job Details</button>
                  
                  
                 
                </div>
            ))
        }
        {/* </div> */}
    </div>
  )
}

export default SearchResult