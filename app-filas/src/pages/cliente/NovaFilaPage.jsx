// ÍCONES
import { Check, CheckCheck, Search, UsersRound } from "lucide-react";
// DADOS
import { pegarProvincia } from "../../Dados";
//HOOKS
import { useState } from "react";
//COMPONENTES
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Button from "../../components/Button";
import FiltroProv from "../../components/cliente/NovaFilaPage/FiltroProv";
import CardEmpresas from "../../components/cliente/NovaFilaPage/CardEmpresas";
import CardSevico from "../../components/cliente/NovaFilaPage/CardSevico";
import QueueLoader from "../../components/QueueLoader/QueueLoader";
import toast from "react-hot-toast";
import { notificarSucesso } from "../../ui-helpers/notificacoes";



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

  /**VARIÁVEIS DERIVADAS */
  const { empresa, servico } = itemSelecionado || {};
  const { nome: nomeEmpresa, endereco } = empresa || {};
  const { provinciaId, municipio, bairro, rua } = endereco || {};
  const nomeServico = servico?.nome;

  /**EVENTOS */
  const handleEnviar = () => {
    setCarregando(true); // ativa loader e muda cor do botão
    setTimeout(() => {
      notificarSucesso('FSAN3');
      setCarregando(false); // volta ao estado normal depois do alert
    }, 2000);
  };

  return (
    <div>
      <Header />
      <Main>
        <section className="itemsSection">
          <h1 className="text-[24px] leading-[30px] font-extrabold">
            Nova fila
          </h1>

          {/**SECÇÃO DE INSTITUIÇÕES */}
          <h2 className="text-[20px] leading-[24px]">Instituição</h2>

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

          {/*CARD DE SERVIÇOS */}
          {itemSelecionado.empresa && (
            <>
              <h2 className="text-[20px] leading-[24px]">Serviço</h2>
              <CardSevico
                itemSelecionado={itemSelecionado}
                setItemSelecionado={setItemSelecionado}
              />
            </>
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
