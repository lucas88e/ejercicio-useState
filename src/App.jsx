import './App.css'
import { useState } from 'react'

function App() {
 //Aquí tu código
const [name,setName] = useState("Sofia")
const [newName,setNewName] = useState()
const teachers = ["Data","Reyes", "Yolanda"]
const listTeacher = teachers.map((teacher, index)=><li key={index} onClick ={()=>{setName(teacher)}}>{teacher}</li>)
 const setNameData = () =>{
    setName("Data")
    
 }
 const setNameReyes = () =>{
    setName("Reyes")
    
 }
 const setNameYolanda = () =>{
    setName("Yolanda")
    
 }
 const changeName = (event) => {
  setName(event.target.value)};

  const buttonChange = () => setNewName(name)

return <div><h2>Teacher Name {name}</h2>

<ul>
   {/* <button onClick={setNameData}><li>Data</li></button>
   <button onClick={setNameReyes}> <li>Reyes</li></button>
   <button onClick={setNameYolanda}> <li>Yolanda</li></button> */}
<li>{listTeacher}
</li>


  <form onSubmit={buttonChange} >
   <input type="text" value={name} onChange={changeName} placeholder='add a name' required/> </form>
   <button  type="submit" onClick={buttonChange}  >Add</button>
   <p>Texto input: {name}</p>
   <p>Texto Actualizado: {newName}</p>

</ul>
</div>
}

export default App
         