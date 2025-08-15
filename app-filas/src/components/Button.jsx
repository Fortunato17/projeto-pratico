export default function Button({ children, loading, variante = "", onClick }) {
  const base =
    "flex items-center justify-center gap-[5px] w-full p-[8px] rounded-[10px] font-semibold botao-clique";
  const variantes = {
    novaFila: "bg-[var(--cor-branco)] text-[var(--cor-primaria)]",
    consultar:
      "bg-[var(--cor-primaria)] text-[var(--cor-branco)] border-[1.5px] border-solid border-[var(--cor-branco)]",
      confirmar:"bg-[var(--cor-primaria)] text-[var(--cor-branco)] border-[1.5px]"
  };
  return (
    <button className={`${base} ${variantes[variante]} ${
        loading
          ?  "opacity-10" : "opacity-100"
      }`} onClick={onClick}>{children}</button>
  );
}
