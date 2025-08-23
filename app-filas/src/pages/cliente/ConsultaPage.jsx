// Ícones
import * as Icons from "lucide-react";
// Componentes

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import QueueLoader from "../../components/QueueLoader/QueueLoader";
//Ui-Heplpers

import { NotificarSucesso } from "../../ui-helpers/Notificacoes";
//Utils
import { gerarCodigo } from "../../utils/GerarCodigo";
// Hooks
import { useState } from "react";
import { useNavigateGlobal } from "../../contexts/NavigateProvider";

export default function ConsultarPage() {
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigateGlobal();
  /**EVENTOS */
  const handleConsultar = () => {
    setCarregando(true); // ativa loader e muda cor do botão
    setTimeout(() => {
      NotificarSucesso(gerarCodigo());
      navigate("/filas");
      setCarregando(false); // volta ao estado normal depois do alert
    }, 2000);
  };
  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionBig">
          <section>
            <h1 className="tituloBold">Consultar ticket</h1>
            <p className="text-[14px] text-[var(--cor-texto-secundario)]">
              Acompanhe suas filas existentes
            </p>
          </section>
          <section className="caixa-lista itemsSection">
            <h1 className="font-bold text-[14px]">
              Código do Ticket (ex: K9F2C)
            </h1>
            <input
              type="text"
              className="pl-[20px]"
              placeholder="Digite o código do ticket..."
            />
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
