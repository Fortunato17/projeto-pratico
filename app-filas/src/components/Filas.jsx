// Ícones
import * as Icons from "lucide-react";
//Componentes
import Button from "./Button";
//Dados fictícios vindo de um provider
import { useFilas } from "../contexts/FilasProvider";
import { useState, useEffect } from "react";

export default function Filas({ ticket, minhasFilas }) {
  const { handleExcluirFila } = useFilas();
  const [posicao, setPosicao] = useState({});

  useEffect(() => {
    const posicaoInicial = {};
    minhasFilas.forEach(
      (fila) => (posicaoInicial[fila.id] = fila.servico.pessoasNaFila)
    );
    setPosicao(posicaoInicial);
  }, [minhasFilas]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPosicao((prev) => {
        const novaPosicao = { ...prev };
        for (let id in novaPosicao) {
          if (novaPosicao[id] > 1) {
            novaPosicao[id] = novaPosicao[id] - 1;
          }
        }
        return novaPosicao;
      });
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

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
        const posicaoAtual = posicao[fila.id] ?? pessoasNaFila;

        let corHead = "bg-[var(--cor-amarelo)]";
        let aviso = "";
        if (posicaoAtual < 6 && posicaoAtual != 1) {
          corHead = "bg-[var(--cor-verdeAmarelo)]";
          aviso = (
            <div className="flex items-center gap-[5px] destaque subTitulo">
              <Icons.AlarmClock
                size={40}
                strokeWidth={1.5}
                className="flex-shrink-0" /* impede encolhimento*/
              />
              <h1>
                Prepare-se: a sua vez está a chegar. Por favor, dirija-se ao
                atendimento
              </h1>
            </div>
          );
        } else if (posicaoAtual === 1) {
          corHead = "bg-[var(--cor-verde-escuro)]";
          aviso = (
            <div className="flex items-center gap-[5px] destaque subTitulo">
              <Icons.AlarmClockCheck
                size={40}
                strokeWidth={1.5}
                className="flex-shrink-0" /* impede encolhimento*/
              />
              <h1>Chegou a sua vez!</h1>
            </div>
          );
        }
        return (
          <li key={fila.id} className="relative overflow-hidden caixa-lista">
            <div
              className={`absolute top-0 left-0 w-full ${corHead} h-[20px]`}
            ></div>
            <div className="pt-[15px] flex flex-col gap-[10px]">
              {aviso}
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
                    {posicaoAtual}
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
