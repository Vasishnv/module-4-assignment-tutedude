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
        setinp("");
       }


    }
   
  return (
    <div style={maindiv}>
        <h1>To Do App </h1>
        <div>
            <div style={maindiv}>
                Enter your tasks :
                <br></br>
                <input style={inputBox} onChange={(e)=>{setinp(e.target.value)}} value={inp} placeholder='Enter title of task '></input>
                <button onClick={handleadd} style={ButtonStyle} >Add Task</button>
            </div>
            <div>
               <h1>Added to-dos list</h1>
            <ul style={maindiv}>
                {tsks.map((tsk,i)=>
                
                <li key={`title-${i}`} style={divstyle}>{tsk}</li>
               )}
            </ul>
            </div>
            
           
        </div>


    </div>
  )
}

export default Func
const maindiv = {
  display : "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection : "column"

}
const divstyle ={ width: "100px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  border: "2px solid #ccc",
  borderRadius: "10px" ,
  margin: ".5rem 0rem ",
  fontSize: "24px",
  fontWeight: "bold"}

const inputBox = {
  width: "200px",
  height: "30px",
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
  outline: "none",
};

const ButtonStyle = {
  
  backgroundColor: "#4CAF50", 
  color: "white",
  margin : ".2rem 2rem",       
  border: "none",            
  padding: "10px 40px",   
  fontSize: "16px",         
  borderRadius: "5px",       
  cursor: "pointer",         
  transition: "background-color 0.3s ease", 
};



