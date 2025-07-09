import { useState } from "react";
import Teste from "./components/teste";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [msg, setMsg] = useState(`Olá mundo!`);
  const [n, setN] = useState(true);
  function mudarMsg() {
    //setMsg(msg === "Olá mundo 2!" ? "Mudou a mensagem!" : "Olá mundo 2!");
    if (n) {
      setMsg("Mudou a mensagem!");
    } else {
      setMsg("Olá mundo 2!");
    }
    setN(!n);
  }
  return (
    <div
      className="flex flex-col items-center justify-center h-screen gap-20
    "
    >
      <Toaster position="top-bottom" />;
      <h1 className="text-5xl font-bold text-[--cor-primaria] text-center">
        {msg}
      </h1>
      <button
        className="bg-[--cor-primaria] hover:bg-[--cor-verdeClaro] text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
          mudarMsg();
          toast.success(<div className="">
            <h1 className="text-2xl font-bold mb-2 text-[--cor-primaria]">Fila criada com sucesso!</h1>
            <p className="mb-2"><span className="font-bold text-[--cor-primaria]">Importante:</span> Copie e guarde o código do seu ticket abaixo. Ele é a única forma de acessar sua fila e não poderá ser recuperado caso seja perdido.</p>
            <p>Seu código: <span className="font-bold text-[--cor-primaria]">FSAN3</span></p>
          </div>,{duration: 5000},
          {icon:""});
        }} 
      >
        Mudar
      </button>
      <Teste />
    </div>
  );
}

export default App;
