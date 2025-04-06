import { useState,useRef} from "react";

export default function Player() {
  const playerName=useRef();
  const playerfile=useRef();
  const [file ,setFile]=useState(null);
  const [name ,setName]=useState(null);
  const handleClick=()=>{
    playerfile.current.click()
    setName(playerName.current.value)
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text"  />
        <input type="file"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
