import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function Home() {
    const [roomName, setRoomName] = useState('');
    const [roomPassword, setRoomPassword] = useState('');
  
    const navigate = useNavigate(); 
    
    const routeChange = () => { 
      if(roomName === null || roomName === undefined || roomName === ''){
        alert('roomName is not valid');
        return;
      }

      if(roomPassword === null || roomPassword === undefined || roomPassword === ''){
        alert('roomPassword cannot be empty');
        return;
      }

      const path = `editors/${roomName}?password=${roomPassword}`; 
      navigate(path);

    }
  
    return (
    <div>
  
        <label>
          Enter room-name: 
          <input type="text" 
            id="room-name" 
            name="room-name"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder='room-name'
          />
        </label>
        <label>
          Enter room-password: 
          <input type="password" 
            id="room-password" 
            name="room-password"
            value={roomPassword}
            onChange={e => setRoomPassword(e.target.value)}
            placeholder="room-password"
          />
        </label>
        
        <button id='redirect-button' onClick={routeChange}>redirect</button>
  
    </div>
    );
  }
 
  export default Home;