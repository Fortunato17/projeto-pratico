//ÍCONES
import { ChevronDown, ChevronUp, UsersRound } from "lucide-react";
//DADOS
import { empresaComFila } from "../../../Dados";
//HOOKS
import { useEffect, useMemo } from "react";
import useDropdown from "../../../hooks/useDropdown";
import DropDown from "../../DropDown";
export default function CardSevico({ setItemSelecionado, itemSelecionado }) {
  //HOOKS

  //Esse hook foi personalizado e serve para fechar o dropdown quando a empresa mudar
  const { dropdownAberto, setDropdownAberto, toggleDropDown } = useDropdown();
  useEffect(() => {
    setDropdownAberto(null);
  }, [itemSelecionado.empresa?.id]);
  //VARIÁVEIS

  const servicosOrdenados = useMemo(
    () =>
      empresaComFila(itemSelecionado.empresa?.id).sort((a, b) =>
        a.nome.localeCompare(b.nome)
      ),
    [itemSelecionado.empresa?.id]
  );

  //EVENTOS

  const handleSelecionarServico = (servicoParam) => {
    setItemSelecionado((prev) => ({
      ...prev,
      servico: prev.servico?.id === servicoParam.id ? null : servicoParam,
    }));
  };

  return (
    <div className="itemsSection">
      <DropDown
        dropdownAberto={dropdownAberto}
        titulo="Selecione um serviço"
        variante="servico"
        onClick={() => toggleDropDown("Serviço")}
      />

      {dropdownAberto === "Serviço" && (
        <div className="caixa-lista">
          <ul className="lista-scroll">
            {servicosOrdenados.map((servico) => {
              const selecionado = itemSelecionado.servico?.id === servico.id;
              return (
                <li
                  key={servico.id}
                  className={`item-lista item-lista-hover ${
                  selecionado ? "item-lista-selecionado" : ""
                }`}
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
    </div>
  );
}
