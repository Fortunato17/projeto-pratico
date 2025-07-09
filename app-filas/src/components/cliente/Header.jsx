import { Menu } from "lucide-react";
import styles from "../../styles/cliente.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className="flex flex-col items-centertext-[18px] font-bold corsor-pointer"><span>App</span> Filas</h1>
            <Menu size={34} className="cursor-pointer text-[var(--cor-texto-principal)]"/>
        </header>
    );
}