import { useState , useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [changePlayerName , setChangePlayerName] = useState()

  function handlePlayerName() {
    setChangePlayerName(playerName.current.value);
    playerName.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {changePlayerName??'non emtity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handlePlayerName} >Set Name</button>
      </p>
    </section>
  );
}
