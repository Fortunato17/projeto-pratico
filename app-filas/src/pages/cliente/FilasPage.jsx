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
        <section className="itemsSectionBig">
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
              <div className="flex justify-between items-center">
                <h1 className="tituloBold">Minhas filas</h1>

                <Button
                  onClick={() => handleExcluirTicket(ticket)}
                  variante="excluir2"
                >
                  <Icons.X /> Excluir
                </Button>
              </div>
              <p>
                Ticket: <span className="destaque">{ticket}</span>
              </p>

              {/* Filas ativas */}
              <Filas ticket={ticket} minhasFilas={minhasFilas} />

              {/* Adicionar nova fila */}
              {!limiteDeFila && (
                <Button
                  variante="confirmar"
                  onClick={() => {
                    setTicketAtivo(ticket);
                    navigate("/nova-fila", { state: { fromFilasPage: true } });
                  }}
                >
                  <Icons.Plus /> Adicionar fila
                </Button>
              )}
              {limiteDeFila && (
                <p className="flex items-center gap-[5px]">
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
