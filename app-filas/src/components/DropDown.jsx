import { ChevronDown, ChevronUp } from "lucide-react";

export default function DropDown({
  dropdownAberto,
  titulo,
  variante,
  onClick,
  categoria,
  children,
}) {
  const variantes = {
    filtraProv: "FiltraProv",
    servico: "Serviço",
  };
  const base = `flex justify-between items-center  border-solid w-full ${
    dropdownAberto === variantes[variante]
      ? "border-[1.5px] border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
      : "border-[0.5px] border-[var(--cor-borda)] hover:bg-[var(--corHover)]"
  }  rounded-[10px] p-[10px_20px]`;
  return (
    <button className={`${base}`} onClick={onClick}>
      <span className="text-[14px] font-semibold">
        {titulo}
        {categoria && <span className="font-normal">{categoria}</span>}
      </span>
      {dropdownAberto === variantes[variante] ? (
        <ChevronUp size={16} className="text-[var(--cor-texto-secundario)]" />
      ) : (
        <ChevronDown size={16} className="text-[var(--cor-texto-secundario)]" />
      )}
    </button>
  );
}
