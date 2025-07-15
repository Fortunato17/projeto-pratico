export default function Carrossel(){
    return(
        <div className="flex flex-col gap-[10px]">
            
        <section className="flex flex-col items justify-center gap-[10px] bg-[var(--cor-verde-escuro)] p-[40px_20px] text-[var(--cor-branco)] w-full h-[700px]">
          <h1 className="text-[40px] leading-[41px] font-extrabold">
            Chega de perder tempo em <span className="italic">filas!</span>
          </h1>

          <p className="text-[24px] leading-[30px]">
            Com o <span className="font-extrabold">AppFilas</span>, você entra
            na fila direto do telefone ou pc e acompanha seu avanço em tempo
            real. Mais agilidade, menos estresse.
          </p>
        </section>
        <section className="flex justify-center gap-[10px]">
            <div className="w-[20px] h-[20px] rounded-full bg-[var(--cor-primaria)]   cursor-pointer"></div>

            <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-solid border-[var(--cor-primaria)] cursor-pointer"></div>

            <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-solid border-[var(--cor-primaria)] cursor-pointer"></div>
        </section>
        </div>
    )
}