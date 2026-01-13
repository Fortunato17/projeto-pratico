// Ícones
import * as Icons from "lucide-react";
import ItemMenu from "./ItemMenu";
import useDropdown from "../hooks/useDropdown";
import { useEffect, useState } from "react";
export default function Menu({ className }) {
  //Hooks
  const { dropdownAberto, setDropdownAberto, toggleDropDown, dropRef } =
    useDropdown();
  const [tamTela, setTamTela] = useState(window.innerWidth);
  function alteTamanhoTela() {
    const tamActual = window.innerWidth;
    setTamTela(tamActual);
    if (tamActual >= 768) {
      setDropdownAberto(null);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", alteTamanhoTela);
    return () => window.removeEventListener("resize", alteTamanhoTela);
  }, []);

  return (
    <div ref={dropRef}>
      {tamTela < 768 && (
        <button
          className={`  ${
            dropdownAberto === "Menu"
              ? "border-solid border-[1.5px] border-[var(--cor-primaria)] rounded-[5px] text-[var(--cor-primaria)]"
              : ""
          }`}
          onClick={() => toggleDropDown("Menu")}
        >
          <Icons.Menu size={34} strokeWidth={1.5} />
        </button>
      )}
      {/*O absolute abaixo faz referência ao relative do elemento Nav */}
      {(tamTela >= 768 || dropdownAberto === "Menu") && (
        <div
          className={`${
            tamTela >= 768
              ? "flex gap-[10px] :"
              : "caixaMenu absolute w-full top-[112%] left-0 z-10"
          } `}
        >
          <ItemMenu
            titulo={`${tamTela >= 768 ? "" : "Home"}`}
            Icon={Icons.Home}
            irPara="/"
          />

          <ItemMenu
            titulo={`${tamTela >= 768 ? "" : "Nova fila"}`}
            Icon={Icons.Plus}
            irPara="/nova-fila"
          />
          <ItemMenu
            titulo={`${tamTela >= 768 ? "" : "Consultar"}`}
            Icon={Icons.Search}
            irPara="/consultar"
          />
        </div>
      )}
    </div>
  );
}
