// Ícones
import { CheckCheck, Search } from "lucide-react";
//Hoocks
import { useState } from "react";

//Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Button from "../../components/Button";
import FiltroProv from "../../components/cliente/NovaFilaPage/FiltroProv";
import CardEmpresas from "../../components/cliente/NovaFilaPage/CardEmpresas";
import CardSevico from "../../components/cliente/NovaFilaPage/CardSevico";
import QueueLoader from "../../components/QueueLoader/QueueLoader";
//Ui-Heplpers

import { NotificarSucesso } from "../../uiHelpers/Notificar";

//Contexts
import { useFilas } from "../../contexts/FilasProvider";
import { useNavigateGlobal } from "../../contexts/NavigateProvider";

export default function NovaFilaPage() {
  /**Hooks */
  const [pesquisa, setPesquisa] = useState("");
  const [filtro, setFiltro] = useState("Todas");
  const [itemSelecionado, setItemSelecionado] = useState({
    empresa: null,
    servico: null,
  });
  const [visivel, setVisivel] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const { navigate, location } = useNavigateGlobal();

  const { handleAddFilas, handleCriarGrupoFilas, ticketAtivo } = useFilas();
  /**Eventos */
  const handleConfirmar = () => {
    setCarregando(true); // ativa loader e muda cor do botão FN7I17
    setTimeout(() => {
      NotificarSucesso();

      let ticket;
      if (location.state?.fromFilasPage) {
        handleAddFilas(itemSelecionado);
        ticket = ticketAtivo; // se veio da página de filas, usamos o ticket ativo
      } else {
        ticket = handleCriarGrupoFilas(itemSelecionado);
      }

      //Usamos query strings para enviar o ticket na URL
      const query = new URLSearchParams();
      query.set("ticket", ticket);
      navigate(`/filas?${query.toString()}`);
      setCarregando(false); // volta ao estado normal depois do alert
    }, 2000);
  };

  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSectionBig">
          {/**Seção de instituição*/}
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
                {/** Filtro */}
                <FiltroProv
                  filtro={filtro}
                  setFiltro={setFiltro}
                  setItemSelecionado={setItemSelecionado}
                />
              </>
            )}
            {/*Card de empresas */}
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

          {/*Card de serviços */}
          {itemSelecionado.empresa && (
            <CardSevico
              itemSelecionado={itemSelecionado}
              setItemSelecionado={setItemSelecionado}
            />
          )}

          {itemSelecionado.empresa && itemSelecionado.servico && (
            <div className="relative">
              <Button
                onClick={handleConfirmar}
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
