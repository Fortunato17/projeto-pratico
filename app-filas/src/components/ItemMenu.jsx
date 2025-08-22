export default function ItemMenu({ titulo, Icon , onClick}) {
  return (
    <ul>
      <li>
        <a onClick={onClick} className="itemMenu cursor-pointer">
          {Icon && <Icon size={24} strokeWidth={1.5}/>}
          {titulo}
        </a>
        <div className="h-[0.5px] bg-[var(--cor-linha)]"></div>
      </li>
    </ul>
  );
}
