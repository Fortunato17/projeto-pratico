//Contexts
import { useNavigateGlobal } from "../contexts/NavigateProvider";

//Components
import Menu from "./Menu";

export default function Nav() {
  const {navigate} = useNavigateGlobal();
  return (
    <nav className="relative flex flex-col gap-[10px] text-[var(--cor-texto-principal)] ">
      <section className="flex items-center justify-between bg-[var(--cor-branco)] p-[10px_20px] rounded-[10px] overflow-hidden">
        <a
          onClick={() => navigate("/")}
          className="flex flex-col justify-center text-[var(--cor-primaria)] text-[18px] font-extrabold cursor-pointer"
        >
          <span>App</span>Filas
        </a>

        <Menu />
      </section>
    </nav>
  );
}
