// Ícones
import * as Icons from "lucide-react";
// Componentes

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Filas from "../../components/Filas";
import { useNavigateGlobal } from "../../contexts/NavigateProvider";
import { useFilas } from "../../contexts/FilasProvider";

export default function FilasPage() {
  const navigate = useNavigateGlobal();
  const {ticketAtivo} = useFilas()
  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionBig">
          <section>
            <h1 className="tituloBold">Minhas filas</h1>
            <p>
              Ticket: <span className="destaque">{ticketAtivo}</span>
            </p>
          </section>
        {/*FILAS */}
        <Filas ticket={ticketAtivo}/>
          <Button variante="confirmar" onClick={() => navigate("/nova-fila",{state:{fromFilasPage: true}})} >
            {" "}
            <Icons.Plus /> Adicionar fila
          </Button>
        </section>
      </Main>
      <Footer />
    </div>
  );
}
