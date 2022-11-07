import React, {useState} from 'react'

function AddPlayer() {
 const [name, setName]= useState("");
 const [image, setImage] = useState("");
 const [position, setPosition] = useState("");
  return (
    <div>
      <div>AddPlayer</div>
    <div>
      <form >
        <input type="text" placeholder ="Player name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder ="Image" value={image} onChange={(e)=>setImage(e.target.value)} />
        <input type="text" placeholder ="position" value={position} onChange={(e)=>setPosition(e.target.value)} />
      </form>
    </div>
    
    </div>
  )
}

export default AddPlayer