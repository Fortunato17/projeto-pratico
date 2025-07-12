import { Menu } from "lucide-react";
import styles from "../../styles/cliente.module.css";
export default function Nav() {
  return (
    <nav className={styles.header}>
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
