export default function ItemMenu({ titulo, Icon }) {
  return (
    <ul>
      <li>
        <a href="#" className="itemMenu">
          {Icon && <Icon size={24} strokeWidth={1.5}/>}
          {titulo}
        </a>
        <div className="h-[0.5px] bg-[var(--cor-linha)]"></div>
      </li>
    </ul>
  );
}
