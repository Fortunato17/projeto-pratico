export function HeaderButton1({ children }) {
  return (
    <button className="flex items-center justify-center w-full h-[40px] rounded-[10px] bg-[var(--cor-branco)] text-[var(--cor-primaria)] font-semibold">
      {children}
    </button>
  );
}
export function HeaderButton2({ children }) {
  return (
    <button className="flex items-center justify-center bg-[var(--cor-primaria)] text-[var(--cor-branco)] font-semibold w-full h-[40px] rounded-[10px] border-[1.5px] border-solid border-[var(--cor-branco)]">
      {children}
    </button>
  );
}
export function ConfirmarButton({ handle, children, className = "" }) {
  return (
    <button
      className={`w-full flex justify-center items-center gap-[5px] p-[10px] bg-[var(--cor-primaria)] text-[var(--cor-branco)] rounded-[10px] hover:bg-[var(--cor-hoverBtn1)] ${className} `}
      onClick={() => handle()}
    >
      {children}
    </button>
  );
}
