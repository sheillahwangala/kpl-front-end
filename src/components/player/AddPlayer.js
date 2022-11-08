import React, {useState} from 'react'

function AddPlayer({teamId}) {
 const [name, setName]= useState("");
 const [image, setImage] = useState("");
 const [position, setPosition] = useState("");
 const [player, setPlayer] = useState([]);

 const uploadImage = (files) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "e2e6z2lx");
  fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      setImage(data.secure_url);
    });
};


 const createPlayer = (e) => {
  e.preventDefault();
  fetch("http://127.0.0.1:9292/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      team_id: teamId,
      name: name,
      image: image,
      position: position
    }),
  })
    .then((response) => response.json())
    .then((data) => setPlayer(data));
};

// console.log(teamId)

  return (
    <div>
      <div>AddPlayer</div>
    <div>
        <input type="text" placeholder ="Player name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input
        type="file"
        id="file-selector"
        onChange={(e) => {
          uploadImage(e.target.files);
        }}
      />
        <input type="text" placeholder ="position" value={position} onChange={(e)=>setPosition(e.target.value)} />
        <button type="submit" onClick={createPlayer}>Add Player</button>
    </div>
    
    </div>
  )
}

export default AddPlayer