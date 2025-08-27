// Ícones
import * as Icons from "lucide-react";
// Componentes

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import QueueLoader from "../../components/QueueLoader/QueueLoader";

// Hooks
import { use, useState } from "react";
import { useNavigateGlobal } from "../../contexts/NavigateProvider";
import { useFilas } from "../../contexts/FilasProvider";
import { NotificarErro } from "../../uiHelpers/Notificar";

export default function ConsultarPage() {
  const [carregando, setCarregando] = useState(false);
  const [consulta, setConsulta] = useState("");
  const [inputVazio, setInputVazio] = useState(false);
  const { gruposDeFilas, setTicketAtivo } = useFilas();
  const { navigate } = useNavigateGlobal();

  //Usamos query strings para enviar o ticket na URL
  const query = new URLSearchParams();
  const verificarTicket = () => {
    const existe = gruposDeFilas.some((grupo) => grupo.id === consulta);
    if (existe) {
      setTicketAtivo(consulta);

      query.set("ticket", consulta);
      navigate(`/filas?${query.toString()}`);
    } else {
      NotificarErro();
    }
  };
  /**Eventos */
  const handleConsultar = () => {
    if (consulta.trim()) {
      setCarregando(true); // ativa loader e muda cor do botão
      setTimeout(() => {
        verificarTicket();
        setCarregando(false); // volta ao estado normal depois do alert
      }, 2000);
    } else {
      setInputVazio(true);
    }
  };
  function alterarValor(e) {
    setConsulta(e.target.value.toUpperCase());
    setInputVazio(false);
  }
  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionBig">
          <section>
            <h1 className="tituloBold">Consultar ticket</h1>
            <p className="text-[14px] text-[var(--cor-texto-secundario)]">
              Acompanhe suas filas consultando abaixo:
            </p>
          </section>
          <section className="caixa-lista itemsSection">
            <h1 className="font-bold text-[14px]">
              Código do Ticket (ex: F4M917)
            </h1>
            <input
              type="text"
              className={`pl-[20px] `}
              value={consulta}
              placeholder="Digite o código do ticket..."
              onChange={(e) => alterarValor(e)}
            />
            {inputVazio && (
              <p className="text-[12px] text-[var(--cor-erro)]">
                Preencha o campo acima!!
              </p>
            )}
            <p className="text-[12px] text-[var(--cor-texto-secundario)]">
              Caso o código do ticket tenha expirado ou você o tenha esquecido,
              por favor, entre em uma nova fila clicando no botão nova fila.
            </p>
            <div className="relative">
              <Button
                variante="confirmar"
                onClick={handleConsultar}
                loading={carregando}
              >
                {" "}
                <Icons.Search /> Consultar
              </Button>
              {carregando && (
                <QueueLoader className="absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-[50%]" />
              )}
            </div>

            <Button variante="novaFila" onClick={() => navigate("/nova-fila")}>
              {" "}
              <Icons.Plus /> Nova fila
            </Button>
          </section>
        </section>
      </Main>
      <Footer />
    </div>
  );
}
