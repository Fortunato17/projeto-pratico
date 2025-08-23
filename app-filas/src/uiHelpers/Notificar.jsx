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

