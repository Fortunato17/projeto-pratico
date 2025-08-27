// Ícones
import * as Icons from "lucide-react";
//Componentes
import Button from "./Button";
//Dados fictícios vindo de um provider
import { useFilas } from "../contexts/FilasProvider";

export default function Filas({ ticket }) {
  const { gruposDeFilas, handleExcluirFila } = useFilas();

  //VARIÁVEIS
  const minhasFilas =
    gruposDeFilas.find((grupo) => grupo?.id === ticket)?.filas || [];

  //EVENTOS
  function reduzirpessoa(valor) {
    return valor - 1;
  }
  
  return (
    <ul className="itemsSection">
      {minhasFilas.map((fila, index) => {
        /**VARIÁVEIS DERIVADAS */
        const { empresa, servico } = fila;
        const {
          provincia,
          municipio,
          bairro,
          rua,
          nome: nomeEmpresa,
        } = empresa;
        const { nome: nomeServico, tipo: tipoServico, pessoasNaFila } = servico;
        return (
          <li key={fila.id} className="relative overflow-hidden caixa-lista">
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
                  <p className="text-[24px] destaque">
                    {tipoServico}
                    {pessoasNaFila}
                  </p>
                </div>
                <div>
                  <h2>Sua posição:</h2>
                  <p className="flex  justify-end  text-[24px] destaque">
                    {reduzirpessoa(pessoasNaFila)}
                  </p>
                </div>
              </section>
              <Button
                variante="excluir"
                onClick={() => {
                  handleExcluirFila(ticket, fila.id);
                }}
              >
                <Icons.X />
                Sair desta fila
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
