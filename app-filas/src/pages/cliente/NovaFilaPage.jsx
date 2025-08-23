// ÍCONES
import { CheckCheck, Search } from "lucide-react";
//HOOKS
import { useState } from "react";
import { useNavigateGlobal } from "../../contexts/NavigateProvider";
//COMPONENTES
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Button from "../../components/Button";
import FiltroProv from "../../components/cliente/NovaFilaPage/FiltroProv";
import CardEmpresas from "../../components/cliente/NovaFilaPage/CardEmpresas";
import CardSevico from "../../components/cliente/NovaFilaPage/CardSevico";
import QueueLoader from "../../components/QueueLoader/QueueLoader";
//Ui-Heplpers


//Utils
import { gerarCodigo } from "../../utils/GerarCodigo";
import { NotificarSucesso } from "../../uiHelpers/notificacoes";

export default function NovaFilaPage() {
  /**HOOCKS */
  const [pesquisa, setPesquisa] = useState("");
  const [filtro, setFiltro] = useState("Todas");
  const [itemSelecionado, setItemSelecionado] = useState({
    empresa: null,
    servico: null,
  });
  const [visivel, setVisivel] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigateGlobal();
  /**EVENTOS */
  const handleEnviar = () => {
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
          {/**SECÇÃO DE INSTITUIÇÕES */}
          <section className="itemsSection">
            <h1 className="tituloBold">Nova fila</h1>
            <h2 className="subTitulo">Instituição</h2>
            {!visivel && (
              <>
                <div className="relative">
                  <Search
                    size={16}
                    className="text-[var(--cor-texto-secundario)] absolute top-[50%] left-[20px] -translate-y-[50%]"
                  />
                  <input
                    type="text"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="Pesquisar instituições..."
                  />
                </div>
                {/** FILTRO */}
                <FiltroProv
                  filtro={filtro}
                  setFiltro={setFiltro}
                  setItemSelecionado={setItemSelecionado}
                />
              </>
            )}
            {/*CARD DE EMPRESAS */}
            <CardEmpresas
              visivel={visivel}
              setVisivel={setVisivel}
              itemSelecionado={itemSelecionado}
              setItemSelecionado={setItemSelecionado}
              pesquisa={pesquisa}
              setPesquisa={setPesquisa}
              filtro={filtro}
            />
          </section>

          {/*CARD DE SERVIÇOS */}
          {itemSelecionado.empresa && (
            <CardSevico
              itemSelecionado={itemSelecionado}
              setItemSelecionado={setItemSelecionado}
            />
          )}

          {itemSelecionado.empresa && itemSelecionado.servico && (
            <div className="relative">
              <Button
                onClick={handleEnviar}
                loading={carregando}
                variante="confirmar"
              >
                <CheckCheck />
                <span className="font-semibold">Confirmar</span>
              </Button>
              {carregando && (
                <QueueLoader className="absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-[50%]" />
              )}
            </div>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}
