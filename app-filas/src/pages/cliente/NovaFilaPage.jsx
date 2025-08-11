// ÍCONES
import {
  CheckCheck,
  ChevronDown,
  ChevronUp,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react";
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

export default function NovaFilaPage() {
  /**HOOCKS */
  const [pesquisa, setPesquisa] = useState("");
  const [dropdownAberto, setDropdownAberto] = useState(null);
  const [filtro, setFiltro] = useState("Todas");
  const [itemSelecionado, setItemSelecionado] = useState({
    empresa: null,
    servico: null,
  });
  const [visivel, setVisivel] = useState(false);

  /**EVENTOS */

  const handleEnviar = () => {
    alert(
      `Instituição: ${itemSelecionado.empresa.nome} \nServiço: ${
        itemSelecionado.servico.nome
      }\nProvíncia: ${pegarProvincia(
        itemSelecionado.empresa.endereco.provinciaId
      )}\nMunicípio: ${itemSelecionado.empresa.endereco.municipio}\nBairro: ${
        itemSelecionado.empresa.endereco.bairro
      }\nRua: ${itemSelecionado.empresa.endereco.rua}`
    );
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
          <section className="itemsSection">
            <h2 className="text-[20px] leading-[24px]">Instituição</h2>

            {!visivel && (
              <>
                <div className="relative">
                  <Search
                    size={16}
                    className="text-[var(--cor-texto-secundario)] absolute top-[50%] left-[20px] -translate-y-[50%]"
                  />
                  {/** INPUT   */}
                  <input
                    type="text"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="Pesquisar instituições..."
                  />
                </div>

                {/** FILTRO */}
                <FiltroProv
                  dropdownAberto={dropdownAberto}
                  setDropdownAberto={setDropdownAberto}
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
          <CardSevico
            dropdownAberto={dropdownAberto}
            setDropdownAberto={setDropdownAberto}
            itemSelecionado={itemSelecionado}
            setItemSelecionado={setItemSelecionado}
          />

          {itemSelecionado.empresa && itemSelecionado.servico && (
            <Button onClick={handleEnviar} variante="confirmar">
              <CheckCheck />
              <span className="font-semibold">Confirmar</span>
            </Button>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}
