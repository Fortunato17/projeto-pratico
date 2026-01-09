// Ícones
import * as Icons from "lucide-react";
// Componentes
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Filas from "../../components/Filas";
// Contexts
import { useNavigateGlobal } from "../../contexts/NavigateProvider";
import { useFilas } from "../../contexts/FilasProvider";
import { useState } from "react";

export default function FilasPage() {
  const { gruposDeFilas, handleExcluirTicket, setTicketAtivo } = useFilas();
  const { navigate, searchParams } = useNavigateGlobal();
  const ticket = searchParams.get("ticket");

  //VARIÁVEIS
  const minhasFilas =
    //Encontra o grupo de filas com o ticket correspondente ou retorna um array vazio
    gruposDeFilas.find((grupo) => grupo?.id === ticket)?.filas || [];
  const limiteDeFila = minhasFilas.length >= 6;

  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionFila">
          {!ticket ? (
            <>
              {/* Sem filas ainda */}
              <section className="flex items-center gap-[10px] mb-[10px]">
                <Icons.AlertCircle
                  size={40}
                  className="text-[var(--cor-Aviso)]"
                />
                <h1 className="tituloBold">Você ainda não tem fila!</h1>
              </section>
              <p>
                Clique em <span className="font-bold">Criar fila</span> para
                começar a controlar o seu tempo.
              </p>
              <Button
                variante="confirmar"
                onClick={() => navigate("/nova-fila")}
              >
                <Icons.Plus /> Criar fila
              </Button>
            </>
          ) : (
            <>
              {/* Já tem filas */}
                <h1 className="tituloBold flex justify-center">Minhas filas</h1>
              <div className="flex justify-between items-center">
                <p>
                  Ticket: <span className="destaque">{ticket}</span>
                </p>
                <Button
                  onClick={() => handleExcluirTicket(ticket)}
                  variante="excluir2"
                >
                  <Icons.X /> Excluir Ticket
                </Button>
              </div>

              {/* Filas ativas */}
              <Filas ticket={ticket} minhasFilas={minhasFilas} />

              {/* Adicionar nova fila */}
              {!limiteDeFila && (
                <div className="w-[100%] max-w-[500px] m-auto">
                  <Button
                    variante="confirmar"
                    onClick={() => {
                      setTicketAtivo(ticket);
                      navigate("/nova-fila", {
                        state: { fromFilasPage: true },
                      });
                    }}
                  >
                    <Icons.Plus /> Adicionar fila
                  </Button>
                </div>
              )}
              {limiteDeFila && (
                <p className="flex items-center justify-center gap-[5px] w-[100%]">
                  <Icons.AlertCircle
                    size={30}
                    className="text-[var(--cor-Aviso)]"
                  />
                  Chegou ao limite de filas!
                </p>
              )}
            </>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}
