export default function CardHome({ titulo, Icon, children, variante="" }) {
  const base =
    "flex flex-col items-center justify-center font-normal rounded-[10px] p-[20px] h-[190px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]";
  const variantes = {
    primaria:
      " bg-[var(--cor-primaria)]",
    secundaria:
      "text-left border-[1.5px] border-solid border-[var(--cor-primaria)]",
  };
  return (
    <div className={`${base} ${variantes[variante]}`}>
      {titulo && <h3 className="text-cener">{titulo}</h3>}
      {Icon && <Icon size={48} strokeWidth={1.5} />}
      {children}
    </div>
  );
}
