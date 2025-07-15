import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-[var(--cor-branco)] text-[var(--cor-primaria)] p-[10px_20px] rounded-[20px] overflow-hidden" >
      <button className="flex flex-col items-centertext-[18px] font-extrabold corsor-pointer">
        <span>App</span> Filas
      </button>
      <Menu
        size={34}
        className="cursor-pointer text-[var(--cor-texto-principal)]"
      />
    </nav>
  );
}

