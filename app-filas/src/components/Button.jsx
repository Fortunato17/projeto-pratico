export default function Button({ children, loading, variante = "", onClick,  }) {
  const baseClasses =
    "flex items-center justify-center gap-[5px] w-full p-[8px] rounded-[10px] font-semibold botao-clique";
  const variantes = {
    novaFilaHead: `${baseClasses}  bg-[var(--cor-branco)] text-[var(--cor-primaria)]`,
    consultar:
      `${baseClasses}  text-[var(--cor-branco)] border-[1.5px] border-solid border-[var(--cor-branco)] `,
    novaFila:
      `${baseClasses}  text-[var(--cor-primaria)] border-[1.5px] border-solid border-[var(--cor-primaria)]`,
    confirmar:
      `${baseClasses}  bg-[var(--cor-primaria)] text-[var(--cor-branco)] border-[1.5px]`,
    excluir:
      `${baseClasses} text-[var(--cor-erro)] border-[1.5px] border-solid border-[var(--cor-erro)]`,
      excluir2:`flex items-center text-[var(--cor-erro)] font-semibold botao-clique`,
  };

  return (
    <button
      className={`${variantes[variante]} ${
        loading ? "opacity-10" : "opacity-100"
      }`}
      onClick={onClick}
      disabled={loading} // desativa o botão enquanto o loading estiver a funcionar
    >
      {children}
    </button>
  );
}
