// Ícones
import * as Icons from "lucide-react";
//Dados
import { empresas, pegarProvincia, empresaComFila } from "../Dados";
//Componentes
import Button from "./Button";
import { useEffect, useState } from "react";


export default function Filas() {
  const [posicoes, setPosicoes] = useState([]);

  //EVENTOS
  function hanleExcluirFila() {}

  return (
    <ul className="itemsSection">
      {empresas.slice(0, 3).map((empresa) => {
        /**VARIÁVEIS DERIVADAS */
        const nomeEmpresa = empresa.nome;
        const { provinciaId, municipio, bairro, rua } = empresa.endereco;
        const provincia = pegarProvincia(provinciaId);
        const nomeServico = empresa.servicos[0];
        const pessoasNaFila = empresaComFila(empresa.id)[1].pessoasNaFila;
        return (
          <li key={empresa.id} className="relative overflow-hidden caixa-lista">
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
              <Button
                variante="excluir"
                
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
