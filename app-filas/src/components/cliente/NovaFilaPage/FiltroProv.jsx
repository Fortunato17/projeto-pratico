
// Dados
import { provincias } from "../../../Dados";
//Hooks
import { useMemo } from "react";
import useDropdown from "../../../hooks/useDropdown";
/*Serve para exibir lista de itens*/ import DropDown from "../../DropDown";

export default function FiltroProv({ filtro, setFiltro, setItemSelecionado }) {
  //Hooks

  const { dropdownAberto, setDropdownAberto, toggleDropDown, dropRef } =
    useDropdown();
  //Variáveis
  //Ordena as províncias em ordem alfabética

  const provinciasOrdenadas = useMemo(
    () => [...provincias].sort((a, b) => a.nome.localeCompare(b.nome)),
    [provincias]
  );

  //Eventos

  const handleSelecionar = (nome) => {
    setFiltro(nome);
    setItemSelecionado((prev) => ({ ...prev, empresa: null }));
    setDropdownAberto(null);
  };

  //Função para navegação via teclado
  const moveTeclas = (nome) => ({
    role: "button",
    tabIndex: 0,
    onKeyDown: (e) => {
      const teclasPermitidas = ["Enter", " "];

      if (teclasPermitidas.includes(e.key)) {
        e.preventDefault(); // evita scroll ou comportamento padrão do navegador, isso quando escolhemos o item com o btn de esapaçamento

        handleSelecionar(nome);
      }
    },
  });
  return (
    <div className=" relative" ref={dropRef}>
      <DropDown
        dropdownAberto={dropdownAberto}
        titulo=" Filtrar por província: "
        variante="filtraProv"
        onClick={() => toggleDropDown("FiltraProv")}
        categoria={filtro}
      />

      {dropdownAberto === "FiltraProv" && (
        <div className="absolute top-[120%] w-full bg-[var(--cor-branco)] border-[0.5px] border-solid border-[var(--cor-borda)] shadow-[0px_10px_6px_0.5px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] z-50">
          <ul className="itemsSection pt-[5px] pr-[5px] max-h-[400px] overflow-auto will-change-transform">
            <li
              className="font-bold border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--corHover)] hover:translate-y-[-2.5px]"
              onClick={() => {
                handleSelecionar("Todas");
              }}
              {...moveTeclas("Todas")}
            >
              Todas
            </li>

            {provinciasOrdenadas.map((provincia) => (
              <li
                key={provincia.id}
                className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:bg-[var(--corHover)] hover:translate-y-[-2.5px]"
                onClick={() => {
                  handleSelecionar(provincia.nome);
                }}
                {...moveTeclas(provincia.nome)}
              >
                {provincia.nome}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
