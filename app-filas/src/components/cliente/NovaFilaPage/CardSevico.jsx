//ÍCONES
import { ChevronDown, ChevronUp, UsersRound } from "lucide-react";
//DADOS
import { empresaComFila } from "../../../Dados";
//HOOKS
import { useMemo } from "react";
export default function CardSevico({
  dropdownAberto,
  setDropdownAberto,
  setItemSelecionado,
  itemSelecionado,
}) {
  //VARIÁVEIS
  const seivcosOrdenados = useMemo(
    () =>
      [...empresaComFila(itemSelecionado.empresa?.id)].sort((a, b) =>
        a.nome.localeCompare(b.nome)
      ),
    [itemSelecionado.empresa?.id]
  );

  //EVENTOS
  const handleAbrir = () => {
    setDropdownAberto((prev) => (prev === "Serviço" ? null : "Serviço"));
  };
  const handleSelecionarServico = (servicoParam) => {
    if (itemSelecionado.servico?.id !== servicoParam.id) {
      setItemSelecionado((prev) => ({ ...prev, servico: servicoParam }));
    } else {
      setItemSelecionado((prev) => ({ ...prev, servico: null }));
    }
  };
  return (
    <div>
      {itemSelecionado.empresa && (
        <section className="itemsSection">
          <h2 className="text-[20px] leading-[24px]">Serviço</h2>
          <div
            className={`flex justify-between items-center  border-solid ${
              dropdownAberto === "Serviço"
                ? "border-[1.5px] border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                : "border-[0.5px] border-[var(--cor-borda)] hover:bg-[var(--corHover)]"
            }  rounded-[10px] p-[10px_20px] cursor-pointer `}
            onClick={() => handleAbrir()}
          >
            <span className="text-[14px] font-semibold">
              Selecione um serviço
            </span>
            {dropdownAberto === "Serviço" ? (
              <ChevronUp
                size={16}
                className="text-[var(--cor-texto-secundario)]"
              />
            ) : (
              <ChevronDown
                size={16}
                className="text-[var(--cor-texto-secundario)]"
              />
            )}
          </div>

          {dropdownAberto === "Serviço" && (
            <div className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[20px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
              <ul className="itemsSection pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
                {seivcosOrdenados.map((servico) => {
                  const selecionado =
                    itemSelecionado.servico?.id === servico.id;
                  return (
                    <li
                      key={servico.id}
                      className={` border-[0.5px] border-solid ${
                        selecionado
                          ? "bg-[var(--cor-verdePastel)] border-[0.5px] border-[var(--cor-primaria)] "
                          : "border-[var(--cor-borda)] hover:bg-[var(--corHover)]"
                      } rounded-[10px] p-[10px] cursor-pointer hover:translate-y-[-2.5px]`}
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
    </div>
  );
}
