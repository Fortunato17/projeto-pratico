//Contexts
import { createContext, useContext, useEffect, useState } from "react";
//Utils
import { gerarCodigo } from "../utils/GerarCodigo";
import { useNavigateGlobal } from "./NavigateProvider";
import { replace, useNavigate } from "react-router-dom";

const FilasContext = createContext();
export function FilasProvider({ children }) {
  const [gruposDeFilas, setGruposDeFilas] = useState(
    JSON.parse(localStorage.getItem("GrupoDeFilas")) || []
  );
  const [ticketAtivo, setTicketAtivo] = useState("");

  const { navigate } = useNavigateGlobal();

  useEffect(
    () => localStorage.setItem("GrupoDeFilas", JSON.stringify(gruposDeFilas)),
    [gruposDeFilas]
  );

  useEffect(() => {
    //Se o grupo com o ticket não existir, redirecionamos para a página de filas
    
    if (ticketAtivo && !gruposDeFilas.some((g) => g?.id === ticketAtivo)) {
      setTicketAtivo(""); // Limpa o ticket ativo
      navigate("/filas", { replace: true });
    }
  }, [gruposDeFilas, ticketAtivo, navigate]);
  //Criar novoGrupoDeFila
  function handleCriarGrupoFilas(dadosDaInsti) {
    const ticket = gerarCodigo();
    const novaFila = { ...dadosDaInsti, id: gerarCodigo() };
    const novoGrupoDeFila = { id: ticket, filas: [novaFila] };

    setGruposDeFilas((prev) => [...prev, novoGrupoDeFila]);

    setTicketAtivo(ticket);
    return ticket;
  }

  //Adicionar filas
  function handleAddFilas(dadosDaInsti) {
    const novaFila = { ...dadosDaInsti, id: gerarCodigo() };
    setGruposDeFilas((prev) =>
      prev.map((grupo) =>
        grupo?.id === ticketAtivo
          ? { ...grupo, filas: [...grupo.filas, novaFila] }
          : grupo
      )
    );
  }

  //Excluir filas
  function handleExcluirFila(grupoTicket, idFila) {
    setGruposDeFilas((prev) => {
      const novoGrupo = prev
        .map((grupo) => {
          const novasFilas = grupo.filas.filter((fila) => fila.id !== idFila);
          return grupo?.id === grupoTicket
            ? {
                ...grupo,
                filas: novasFilas,
              }
            : grupo;
        })
        //Elimina grupos com 0 filas
        .filter((grupo) => grupo.filas.length > 0);

      return novoGrupo;
    });
  }

  //Excluir GrupoDeFila
  function handleExcluirTicket(grupoTicket) {
    setGruposDeFilas((prev) =>
      prev.filter((grupo) => grupo?.id !== grupoTicket)
    );

    if (ticketAtivo === grupoTicket) {
      setTicketAtivo("");
    }
    // Redirecionamos para a página de filas mas sem os parâmetros
    //{ replace: true } serve para evitar o histórico anterior da mesma página
    navigate(`/filas`, { replace: true });
  }
  return (
    <FilasContext.Provider
      value={{
        gruposDeFilas,
        handleCriarGrupoFilas,
        ticketAtivo,
        setTicketAtivo,
        handleAddFilas,
        handleExcluirFila,
        handleExcluirTicket,
      }}
    >
      {children}
    </FilasContext.Provider>
  );
}
export const useFilas = () => useContext(FilasContext);
