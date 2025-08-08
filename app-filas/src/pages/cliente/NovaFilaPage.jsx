import {
  CheckCheck,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {
  empresas,
  provinciasDeAngola,
  pegarProvincia,
  empresaComFila,
} from "../../Dados";
import { useMemo, useState } from "react";
import { ConfirmarButton } from "../../components/cliente/ClienteButton";

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

  // Pesquisa de empresas e filtro por província
  const resultado = useMemo(() => {
    return empresas.filter((empresa) => {
      const incluiProvin =
        filtro === "Todas" ||
        pegarProvincia(empresa.endereco.provinciaId).includes(filtro);

      return (
        empresa.nome.toLowerCase().includes(pesquisa.trim().toLowerCase()) &&
        incluiProvin
      );
    });
  }, [pesquisa, filtro]);

  /**EVENTOS */
  const handleToggleDropdown = (nomeDropdown) => {
    setDropdownAberto((prev) => (prev === nomeDropdown ? null : nomeDropdown));
  };

  const handleSelecionarEmpresa = (empresaParam) => {
    if (itemSelecionado.empresa?.id !== empresaParam.id) {
      setItemSelecionado({
        empresa: empresaParam,
        servico: null,
      });
      setPesquisa("");
      setVisivel(true);
    } else {
      setItemSelecionado((prev) => ({ ...prev, empresa: null }));
      setVisivel(false);
    }
  };
  const handleSelecionarServico = (servicoParam) => {
    if (itemSelecionado.servico?.id !== servicoParam.id) {
      setItemSelecionado((prev) => ({ ...prev, servico: servicoParam }));
    } else {
      setItemSelecionado((prev) => ({ ...prev, servico: null }));
    }
  };

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

  /**OUTRAS FUNÇÕES */
  const destaqueNaPesquisa = (busca, titulo) => {
    if (!busca) {
      return titulo;
    }
    const partes = titulo.split(new RegExp(`(${busca})`, "i"));
    return partes.map((parte, i) =>
      parte.toLowerCase() === busca.toLowerCase() ? (
        <span key={i} className="text-[var(--cor-primaria)]">
          {parte}
        </span>
      ) : (
        <span key={i}>{parte}</span>
      )
    );
  };

  return (
    <div>
      <Header />
      <Main>
        <section className="flex flex-col gap-[10px] p-[0px_20px]">
          <h1 className="text-[24px] leading-[30px] font-extrabold">
            Nova fila
          </h1>

          {/**SECÇÃO DE INSTITUIÇÕES */}
          <section className="flex flex-col gap-[10px]">
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
                    className="w-full outline-[var(--cor-verdeClaro)] border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px_20px_10px_40px] text-[14px]"
                  />
                </div>
                {/** FILTRO */}
                <div className="flex flex-col gap-[5px] relative">
                  <div
                    className={`flex justify-between items-center border-[0.5px] border-solid ${
                      dropdownAberto === "FiltraProv"
                        ? "border-[1.5px] border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                        : "border-[var(--cor-borda)]"
                    }  rounded-[10px] p-[10px_20px] cursor-pointer hover:bg-[var(--cor-verdePastel)]`}
                    onClick={() => handleToggleDropdown("FiltraProv")}
                  >
                    <span className="text-[14px] font-semibold">
                      Filtrar por província:{" "}
                      <span className="font-normal">{filtro}</span>
                    </span>
                    {dropdownAberto === "FiltraProv" ? (
                      <ChevronDown
                        size={16}
                        className="text-[var(--cor-texto-secundario)]"
                      />
                    ) : (
                      <ChevronRight
                        size={16}
                        className="text-[var(--cor-texto-secundario)]"
                      />
                    )}
                  </div>
                  {dropdownAberto === "FiltraProv" && (
                    <div className="absolute top-[50px] w-full bg-[var(--cor-branco)] border-[0.5px] border-solid border-[var(--cor-borda)] shadow-[0px_10px_6px_0.5px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] z-50">
                      <ul className="flex flex-col gap-[10px] pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
                        <li
                          className="font-bold border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px]"
                          onClick={() => {
                            setFiltro("Todas");
                            setItemSelecionado((prev) => ({
                              ...prev,
                              empresa: null,
                            }));
                            setDropdownAberto(null);
                          }}
                        >
                          Todas
                        </li>
                        {[...provinciasDeAngola]
                          .sort((a, b) => a.nome.localeCompare(b.nome))
                          .map((provincia) => (
                            <li
                              key={provincia.id}
                              className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px]"
                              onClick={() => {
                                setFiltro(provincia.nome);
                                setItemSelecionado((prev) => ({
                                  ...prev,
                                  empresa: null,
                                }));
                                setDropdownAberto(null);
                              }}
                            >
                              {provincia.nome}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}

            {/*CARD DE EMPRESAS */}
            <div className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[20px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
              <ul className="  flex flex-col gap-[10px] pt-[5px] pr-[5px] max-h-[350px] overflow-auto will-change-transform">
                {resultado.length === 0 ? (
                  <li className="text-[var(--cor-erro)]">
                    Nenhum resultado encontrado!!
                  </li>
                ) : (
                  [...resultado]
                    .sort((a, b) => a.nome.localeCompare(b.nome))
                    .filter((empresa) =>
                      visivel
                        ? itemSelecionado.empresa?.id === empresa.id
                        : true
                    )
                    .map((empresa) => {
                      const selecionada =
                        itemSelecionado.empresa?.id === empresa.id;
                      return (
                        <li
                          key={empresa.id}
                          className={`border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px] ${
                            selecionada
                              ? "border-[1.5px] border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                              : "border-[var(--cor-borda)]"
                          } }`}
                          onClick={() => handleSelecionarEmpresa(empresa)}
                        >
                          <div className="font-bold">
                            {destaqueNaPesquisa(pesquisa, empresa.nome)}
                          </div>
                          <div className="flex items-center text-[14px] text-[var(--cor-texto-secundario)]">
                            <MapPin size={16} strokeWidth={1.5} />
                            {pegarProvincia(empresa.endereco.provinciaId)},{" "}
                            {empresa.endereco.municipio},{" "}
                            {empresa.endereco.bairro}, {empresa.endereco.rua}
                          </div>
                        </li>
                      );
                    })
                )}
              </ul>
            </div>
          </section>

          {/*CARD DE SERVIÇOS */}

          {itemSelecionado.empresa && (
            <section className="flex flex-col gap-[10px]">
              <h2 className="text-[20px] leading-[24px]">Serviço</h2>
              <div
                className={`flex justify-between items-center  border-solid ${
                  dropdownAberto === "Serviço"
                    ? "border-[1.5px] border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                    : "border-[0.5px] border-[var(--cor-borda)]"
                }  rounded-[10px] p-[10px_20px] cursor-pointer hover:bg-[var(--cor-verdePastel)]`}
                onClick={() => handleToggleDropdown("Serviço")}
              >
                <span className="text-[14px] font-semibold">
                  Selecione um serviço
                </span>
                {dropdownAberto === "Serviço" ? (
                  <ChevronDown
                    size={16}
                    className="text-[var(--cor-texto-secundario)]"
                  />
                ) : (
                  <ChevronRight
                    size={16}
                    className="text-[var(--cor-texto-secundario)]"
                  />
                )}
              </div>

              {dropdownAberto === "Serviço" && (
                <div className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[20px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
                  <ul className="flex flex-col gap-[10px] pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
                    {[...empresaComFila(itemSelecionado.empresa.id)]
                      .sort((a, b) => a.nome.localeCompare(b.nome))
                      .map((servico) => {
                        const selecionado =
                          itemSelecionado.servico?.id === servico.id;
                        return (
                          <li
                            key={servico.id}
                            className={` border-[0.5px] border-solid ${
                              selecionado
                                ? "bg-[var(--cor-verdePastel)] border-[0.5px] border-[var(--cor-primaria)] "
                                : "border-[var(--cor-borda)] "
                            } rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px]`}
                            onClick={() => handleSelecionarServico(servico)}
                          >
                            <div className="font-bold">{servico.nome}</div>
                            <div className="flex justify-between">
                              <p className="flex items-center gap-[5px]">
                                <UsersRound size={16} /> Pessoas na fila
                              </p>
                              <span className="text-[var(--cor-primaria)] font-bold">
                                {servico.pessoasNaFila}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </section>
          )}

          {itemSelecionado.empresa && itemSelecionado.servico && (
            <ConfirmarButton className="botao-clique" handle={handleEnviar} >
              <CheckCheck />
              <span className="font-semibold">Confirmar</span>
            </ConfirmarButton>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}
