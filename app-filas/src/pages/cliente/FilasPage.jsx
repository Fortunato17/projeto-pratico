// Ícones
import * as Icons from "lucide-react";
// Componentes
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Filas from "../../components/Filas";
//Contexts
import { useNavigateGlobal } from "../../contexts/NavigateProvider";
import { useSearchParams } from "react-router-dom";

export default function FilasPage() {
  const navigate = useNavigateGlobal();

  //Usamos query strings para pegar o ticket da URL
  const [useParams] = useSearchParams();
  const ticket = useParams.get("ticket");

  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionBig">
          <section>
            {!ticket ? (
              <>
                <section className="flex items-center gap-[10px] mb-[10px]">
                  <Icons.AlertCircle
                    size={40}
                    className="text-[var(--cor-Aviso)]"
                  />
                  <h1 className="tituloBold">Você ainda não tem fila!</h1>
                </section>
                <p>
                  Toque em <span className="font-bold">Adicionar fila</span>{" "}
                  para criar sua primeira fila e controlar o seu tempo.
                </p>
              </>
            ) : (
              <>
                <h1 className="tituloBold">Minhas filas</h1>
                <p>
                  Ticket: <span className="destaque">{ticket}</span>
                </p>
              </>
            )}
          </section>
          {/*Filas */}
          <Filas ticket={ticket} />
          {ticket && (
            <Button
              variante="confirmar"
              onClick={() =>
                navigate("/nova-fila", { state: { fromFilasPage: true } })
              }
            >
              {" "}
              <Icons.Plus /> Adicionar fila
            </Button>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}
