//Estilos
const base = `flex flex-col items justify-center gap-[10px] p-[40px_20px] w-full h-full`;
const titulo = "text-[40px] leading-[41px] font-bold";
const paragrafo = "text-[24px] leading-[30px]";

//Criamos uma lista objetos CarrosselItems, onde temos cada item do carrossel com o seu style
export const CarrosselItems = [
  {
    card: (
      <section
        className={`${base} bg-[var(--cor-verde-escuro)]  text-[var(--cor-branco)] `}
      >
        <h1 className={`${titulo}`}>
          Chega de perder tempo em <span className="italic">filas!</span>
        </h1>
        <p className={`${paragrafo}`}>
          Com o <span className="font-bold">AppFilas</span>, você entra na fila
          direto do telefone ou pc e acompanha seu avanço em tempo real. Mais
          agilidade, menos estresse.
        </p>
      </section>
    ),
  },
  {
    card: (
      <section className={`${base} bg-[var(--cor-amarelo)]`}>
        <h1 className={`${titulo}`}>Sua vez, no seu tempo e no seu sofá.</h1>
        <p className={`${paragrafo}`}>
          Evite aglomerações e acompanhe a fila de onde quiser. Com o{" "}
          <span className="font-bold">AppFila</span>, você só sai quando for a
          sua vez.
        </p>
      </section>
    ),
  },
  {
    card: (
      <section className={`${base} bg-[var(--cor-verdeAmarelo)]`}>
        <h1 className={`${titulo}`}>
          Tempo é valioso. Use o seu com inteligência.
        </h1>
        <p className={`${paragrafo}`}>
          Organize seu dia enquanto acompanha a fila pelo app. Chegue só na hora
          certa, com mais controle e praticidade.
        </p>
      </section>
    ),
  },
];
