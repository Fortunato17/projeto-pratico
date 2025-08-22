// Ícones
import * as Icons from "lucide-react";
// Componentes

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Filas from "../../components/Filas";
import { useNavigateGlobal } from "../../contexts/NavigateProvider";

export default function FilasPage() {
  const navigate = useNavigateGlobal();
  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionBig">
          <section>
            <h1 className="tituloBold">Minhas filas</h1>
            <p>
              Ticket: <span className="destaque">FSAN3</span>
            </p>
          </section>
        {/*FILAS */}
        <Filas/>
          <Button variante="confirmar" onClick={() => navigate("/nova-fila")}>
            {" "}
            <Icons.Plus /> Adicionar fila
          </Button>
        </section>
      </Main>
      <Footer />
    </div>
  );
}
