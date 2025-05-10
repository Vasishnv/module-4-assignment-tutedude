import React, { useState } from 'react'

function Func() {

    const [inp,setinp] = useState("");
    const [tsks,settsks] = useState([]);

    const handleadd=()=>{
       if(!inp || inp.trim().length === 0 ){
        alert("Please enter a valid title");
       }
       else{
        settsks([...tsks,inp]);
       }


    }
   
  return (
    <div>
        <h1>To Do App </h1>
        <div>
            <div>
                Enter your tasks :
                <br></br>
                <input onChange={(e)=>{setinp(e.target.value)}} value={inp} placeholder='Enter title of task '></input>
                <button onClick={handleadd} >Add Task</button>
            </div>
            <div>
               <h1>Added to-dos list</h1>
            <ul>
                {tsks.map((tsk,i)=>
                
                <li key={`title-${i}`}>{tsk}</li>
               )}
            </ul>
            </div>
            
           
        </div>


    </div>
  )
}

export default Func