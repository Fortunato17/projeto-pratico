import { useLocation } from "react-router-dom";
import { useNavigateGlobal } from "../contexts/NavigateProvider";

export default function ItemMenu({ titulo, Icon , onClick, irPara}) {
  const navigate = useNavigateGlobal();
  //o useLocation serve para sabermos em qual rota estamos
  const location = useLocation();
  const activo = location.pathname === irPara;
  return (
    <ul>
      <li>
        <a onClick={() => navigate(irPara)} className={`itemMenu ${activo ? "text-[var(--cor-primaria)]" : ""}`}>
          {Icon && <Icon size={24} strokeWidth={1.5}/>}
          {titulo}
        </a>
        <div className="h-[0.5px] bg-[var(--cor-linha)]"></div>
      </li>
    </ul>
  );
}
