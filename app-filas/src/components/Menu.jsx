
// ÍCONES
import * as Icons from "lucide-react";
import ItemMenu from "./ItemMenu";
import useDropdown from "../hooks/useDropdown";
import { useNavigateGlobal } from "../contexts/NavigateProvider";
export default function Menu({ className }) {
  //HOOKS
  const { dropdownAberto, toggleDropDown, dropRef } = useDropdown();
  const navigate = useNavigateGlobal();
  return (
    <div ref={dropRef}>
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
      {/*O absolute abaixo faz referência ao relative do do elemento Nav */}
      {dropdownAberto === "Menu" && (
        <div className={`caixaMenu absolute w-full top-[112%] left-0 z-10`}>
          <ItemMenu
            titulo={"Home"}
            Icon={Icons.Home}
            onClick={() => navigate("/")}
          />
          <ItemMenu
            titulo={"Fale Connosco"}
            Icon={Icons.MessageSquareText}
            onClick={() => navigate("/fale-connosco")}
          />
          <ItemMenu
            titulo={"Nova fila"}
            Icon={Icons.Plus}
            onClick={() => navigate("/nova-fila")}
          />
          <ItemMenu
            titulo={"Consultar"}
            Icon={Icons.Search}
            onClick={() => navigate("/consultar")}
          />
        </div>
      )}
    </div>
  );
}
