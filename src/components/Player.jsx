import { useRef, useState } from "react";
export default function Player() {
  const[enteredPlayerName,setEnteredPlayerName]=useState("");
  const playerName=useRef();
  
  function handleclick()
  {
      setEnteredPlayerName(playerName.current.value);
      playerName.current.value=""
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?enteredPlayerName:"unknown entity"}</h2>
      <p>
        <input  ref={playerName}type="text"  />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
