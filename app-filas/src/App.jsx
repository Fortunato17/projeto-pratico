import { useState } from "react";

function App() {
  const [msg, setMsg]=useState(`Olá mundo!`);
  function mudarMsg(){
    setMsg(`Mudou a mensagem!`);
  }
  return(
    <div className="flex flex-col items-center justify-center h-screen gap-20
    ">
      <h1 className="text-5xl font-bold text-blue-500 text-center">{msg} </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={mudarMsg}>Mudar</button>
    </div>
  );
}

export default App;