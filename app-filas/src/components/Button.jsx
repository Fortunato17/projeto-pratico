export default function Button({ children, loading, variante = "", onClick }) {
  const baseClasses =
    "flex items-center justify-center gap-[5px] w-full p-[8px] rounded-[10px] font-semibold botao-clique";
  const variantes = {
    novaFilaHead: "bg-[var(--cor-branco)] text-[var(--cor-primaria)]",
    consultar:
      "text-[var(--cor-branco)] border-[1.5px] border-solid border-[var(--cor-branco)]",
    novaFila:
      "text-[var(--cor-primaria)] border-[1.5px] border-solid border-[var(--cor-primaria)]",
    confirmar:
      "bg-[var(--cor-primaria)] text-[var(--cor-branco)] border-[1.5px]",
    excluir:
      "text-[var(--cor-erro)] border-[1.5px] border-solid border-[var(--cor-erro)]",
  };

  return (
    <button
      className={`${baseClasses} ${variantes[variante]} ${
        loading ? "opacity-10" : "opacity-100"
      }`}
      onClick={onClick}
      disabled={loading} // desativa o botão quando loading
    >
      {children}
    </button>
  );
}
