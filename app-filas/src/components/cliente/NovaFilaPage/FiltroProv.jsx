// ÍCONES
import { ChevronDown, ChevronUp } from "lucide-react";
// DADOS
import { provinciasDeAngola } from "../../../Dados";
//HOOKS
import { useEffect, useRef, useMemo } from "react";
import useDropdown from "../../../hooks/useDropdown";
import DropDown from "../../DropDown";

export default function FiltroProv({ filtro, setFiltro, setItemSelecionado }) {
  //HOOKS

  const { dropdownAberto, setDropdownAberto, toggleDropDown } = useDropdown();
  //VARIÁVEIS

  const provinciasOrdenadas = useMemo(
    () => [...provinciasDeAngola].sort((a, b) => a.nome.localeCompare(b.nome)),
    [provinciasDeAngola]
  );
  const dropRef = useRef(null);
  useEffect(() => {
    function handleClickFora(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdownAberto(null);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, [setDropdownAberto]);

  //EVENTOS
  const handleAbrir = () => {
    setDropdownAberto((prev) => (prev === "FiltraProv" ? null : "FiltraProv"));
  };

  const handleSelecionar = (nome) => {
    setFiltro(nome);
    setItemSelecionado((prev) => ({ ...prev, empresa: null }));
    setDropdownAberto(null);
  };

  //FUNÇÕES
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
        <div className="absolute top-[50px] w-full bg-[var(--cor-branco)] border-[0.5px] border-solid border-[var(--cor-borda)] shadow-[0px_10px_6px_0.5px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] z-50">
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
