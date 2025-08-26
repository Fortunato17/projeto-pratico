//Contexts
import { createContext, useContext, useEffect, useState } from "react";
//Utils
import { gerarCodigo } from "../utils/GerarCodigo";

const FilasContext = createContext();
export function FilasProvider({ children }) {
  const [gruposDeFilas, setGruposDeFilas] = useState(
    JSON.parse(localStorage.getItem("GrupoDeFilas")) || []
  );
  const [ticketAtivo, setTicketAtivo] = useState(null);
  useEffect(
    () => localStorage.setItem("GrupoDeFilas", JSON.stringify(gruposDeFilas)),
    [gruposDeFilas]
  );
  function criarGrupoFilas(novaFilaProp) {
    const ticket = gerarCodigo();
    const novoGrupoDeFila = { id: ticket, filas: [novaFilaProp] };

    setGruposDeFilas((prev) => [...prev, novoGrupoDeFila]);
    setTicketAtivo(ticket);
  }
  function addFilas(novaFilaProp) {
    setGruposDeFilas((prev) =>
      prev.map((grupo) =>
        grupo.id === ticketAtivo
          ? { ...grupo, filas: [...grupo.filas, novaFilaProp] }
          : grupo
      )
    );
  }
  return (
    <FilasContext.Provider
      value={{
        gruposDeFilas,
        criarGrupoFilas,
        ticketAtivo,
        setTicketAtivo,
        addFilas,
      }}
    >
      {children}
    </FilasContext.Provider>
  );
}
export const useFilas = () => useContext(FilasContext);
