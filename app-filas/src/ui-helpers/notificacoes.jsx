// UI-Helpers: funções que exibem elementos de interface (JSX)
// mas não são componentes  renderizados no sentido tradicional (<MeuComponente />) diretamente nem utils.
// Servem para centralizar e reutilizar padrões visuais (ex: toasts, modais, alerts).
// Ícones
import * as Icons from "lucide-react";
import toast from "react-hot-toast";

export function NotificarSucesso(codigo = null) {
  toast(
    <div className="flex flex-col gap-[10px]">
      <Icons.Check size={60} className="text-[var(--cor-primaria)] m-auto" />
      <h1 className="text-[var(--cor-primaria)] m-auto text-[20px] font-bold">
        Fila criada com sucesso!
      </h1>
      <p>
        <span className="text-[var(--cor-primaria)] font-bold">
          Importante:
        </span>{" "}
        Copie e guarde o código do seu ticket abaixo. Ele é a única forma de
        acessar sua fila e não poderá ser recuperado caso seja perdido.
      </p>
      <p>
        Seu código:{" "}
        <span className="text-[var(--cor-primaria)] font-bold">{codigo}</span>
      </p>
    </div>
  );
}
//Elimnar isso e criar um modal de confirmação:
export function NotificarExcluirFila(
  nomeEmpresa,
  nomeServico,
  pessoasNaFila,
  provincia,
  municipio,
  bairro,
  rua
) {
  toast(
    <div className="">
      <div className="absolute top-0 left-0 w-full bg-[var(--cor-amarelo)] h-[20px]"></div>
      <div className="pt-[15px] flex flex-col gap-[10px]">
        <section>
          <h1 className="font-bold">{nomeEmpresa}</h1>
          <p className="flex items-center text-[14px] text-[var(--cor-texto-secundario)]">
            <Icons.MapPin size={16} strokeWidth={1.5} />
            {provincia}, {municipio}, {bairro}, {rua}
          </p>
        </section>
        <section className="text-[14px]">
          <h2>Serviço:</h2>
          <p className="font-semibold">{nomeServico}</p>
        </section>
        <section className="flex justify-between">
          <div>
            <h2>Código da fila:</h2>
            <p className="text-[24px] destaque">B38</p>
          </div>
          <div>
            <h2>Sua posição:</h2>
            <p className="flex  justify-end  text-[24px] destaque">
              {pessoasNaFila}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
