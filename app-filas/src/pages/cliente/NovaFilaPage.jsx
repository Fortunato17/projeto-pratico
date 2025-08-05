import { CheckCheck, ChevronDown, MapPin, Search } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { empresas, provinciasDeAngola, pegarProvincia } from "../../Dados";
import { useMemo, useState } from "react";

export default function NovaFilaPage() {
  /**HOOCKS */
  const [pesquisa, setPesquisa] = useState("");
  const [cardFiltroSelecionado, setCardFiltroSelecionado] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
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
  const handleSelecionarProvincia = () => {
    if (!cardFiltroSelecionado) {
      setCardFiltroSelecionado(true);
    } else {
      setCardFiltroSelecionado(false);
    }
  };

  const handleSelecionarEmpresa = (empresa) => {
    if (empresa.id !== empresaSelecionada?.id) {
      setEmpresaSelecionada(empresa);
    } else {
      setEmpresaSelecionada(null);
    }
  };

  return (
    <div>
      <Header />
      <Main>
        <section className="flex flex-col gap-[10px] p-[0px_20px]">
          <h1 className="text-[24px] leading-[30px] font-extrabold">
            Nova fila
          </h1>
          <h2 className="text-[20px] leading-[24px]">Instituição</h2>
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
                cardFiltroSelecionado
                  ? "border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                  : "border-[var(--cor-borda)]"
              }  rounded-[10px] p-[10px_20px] cursor-pointer hover:bg-[var(--cor-verdePastel)]`}
              onClick={handleSelecionarProvincia}
            >
              <span className="text-[14px] font-semibold">
                Filtrar por província:{" "}
                <span className="font-normal">{filtro}</span>
              </span>
              <ChevronDown
                size={16}
                className="text-[var(--cor-texto-secundario)]"
              />
            </div>
            {cardFiltroSelecionado && (
              <div className="absolute top-[50px] w-full bg-[var(--cor-branco)] border-[0.5px] border-solid border-[var(--cor-borda)] shadow-[0px_10px_6px_0.5px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] z-50">
                <ul className="flex flex-col gap-[10px] pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
                  <li
                    className="font-bold border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px] transition-all duration-300 ease-in"
                    onClick={() => {
                      setFiltro("Todas");
                      setCardFiltroSelecionado(false);
                    }}
                  >
                    Todas
                  </li>
                  {[...provinciasDeAngola]
                    .sort((a, b) => a.nome.localeCompare(b.nome))
                    .map((provincia) => (
                      <li
                        key={provincia.id}
                        className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px] transition-all duration-300 ease-in"
                        onClick={() => {
                          setFiltro(provincia.nome);
                          setCardFiltroSelecionado(false);
                        }}
                      >
                        {provincia.nome}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/*CARD DE EMPRESAS */}
          <div className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[20px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
            <ul className="  flex flex-col gap-[10px] pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
              {resultado.length === 0 ? (
                <li className="text-[var(--cor-erro)]">
                  Nenhum resultado encontrado!!
                </li>
              ) : (
                [...resultado]
                  .sort((a, b) => a.nome.localeCompare(b.nome))
                  .map((empresa) => {
                    const selecionada = empresaSelecionada?.id === empresa.id;
                    return (
                      <li
                        key={empresa.id}
                        className={`border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px] ${
                          selecionada
                            ? "border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                            : "border-[var(--cor-borda)]"
                        } }`}
                        onClick={() => handleSelecionarEmpresa(empresa)}
                      >
                        <div className="font-bold">{empresa.nome}</div>
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

          {/*CARD DE SERVIÇOS */}
          {empresaSelecionada && (
            <div>
              <h2 className="text-[20px] leading-[24px]">Serviço</h2>
              <div className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[20px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
                <ul className="flex flex-col gap-[10px] pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
                  {[...empresaSelecionada.servicos]
                  .sort((a, b) => a.localeCompare(b))
                  .map((servico) => (
                    <li
                      key={servico}
                      className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--cor-verdePastel)] hover:translate-y-[-2.5px] transition-all duration-300 ease-in"
                    >
                      {servico}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {empresaSelecionada && (
            <button className="flex justify-center items-center gap-[5px] p-[10px] bg-[var(--cor-primaria)] text-[white] rounded-[10px] ">
              <CheckCheck />
              <span className="font-semibold">Confirmar</span>
            </button>
          )}
        </section>
      </Main>
      <Footer />
    </div>
  );
}
