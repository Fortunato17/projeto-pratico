import React, { useEffect, useMemo, useState } from "react";
import {
  pegarProvincia,
  empresas,
  provinciasDeAngola,
  empresaComFila,
} from "@/Dados";
import {
  ChevronDown,
  ChevronDownSquare,
  MapPin,
  MoveDownIcon,
} from "lucide-react";
export default function TestePage() {
  //Hooks
  const [busca, setBusca] = useState("");
  const [filtroProv, setFiltroProv] = useState("");
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
  const [provinciaSelecionada, setProvinciaSelecionada] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [cardServicoSel, setCardServicoSel] = useState(false);

  //Pesquisa de empresas e filtro por província/
  const resultado = useMemo(
    () =>
      empresas.filter(
        (empresa) =>
          empresa.nome
            .toLowerCase()
            .includes(busca.toLocaleLowerCase().trim()) &&
          pegarProvincia(empresa.endereco.provinciaId).includes(filtroProv)
      ),
    [busca, filtroProv]
  );
  //************************************ */

  //Eventos
  const handleSelecionarEmpresa = (empresa) => {
    if (empresaSelecionada?.id !== empresa.id) {
      setEmpresaSelecionada(empresa);
      setProvinciaSelecionada(pegarProvincia(empresa.endereco.provinciaId));
      setServicoSelecionado("");
      setCardServicoSel(false)
    } else {
      setEmpresaSelecionada(null);
      
    }
  };
  const handleCardServicoSel = ()=>{
    if(!cardServicoSel){
      setCardServicoSel(true)
    }else{
      setCardServicoSel(false)
      setServicoSelecionado(null)
    }
  }
  const handleSelecionarServico = (nome) => {
    if (servicoSelecionado !== nome) {
      setServicoSelecionado(nome);
    } else {
      setServicoSelecionado(null);
    }
  };
  const handleEnviar = () => {
    alert(
      `Empresa: ${empresaSelecionada.nome}\nProvíncia: ${provinciaSelecionada}\nServiço: ${servicoSelecionado}`
    );
  };

  //************************************ */

  // 🔍 Destaque visual nos caracteres pesquisados
  const destacarTermo = (texto, termo) => {
    if (!termo) return texto;

    const partes = texto.split(new RegExp(`(${termo})`, "i"));

    return partes.map((parte, i) =>
      parte.toLowerCase() === termo.toLowerCase() ? (
        <span key={i} style={{ backgroundColor: "yellow" }}>
          {parte}
        </span>
      ) : (
        <span key={i}>{parte}</span>
      )
    );
  };

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <label>
        <h2 style={{ fontWeight: "bold" }}>Escolha uma Empresa</h2>
        <input
          type="text"
          placeholder="Buscar empresa..."
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value);
            setEmpresaSelecionada(null);
          }}
          style={{ width: "100%", padding: 8, marginBottom: 20 }}
        />
      </label>

      <div className="flex flex-col mb-[20px] w-[200px]">
        <label htmlFor="provincia" className="font-bold">
          Filtrar por província:
        </label>
        <select
          id="provincia"
          className="w-[150px] p-[0px_5px]"
          value={filtroProv}
          onChange={(e) => {
            setFiltroProv(e.target.value);
          }}
        >
          <option value={""}>Todas...</option>
          {provinciasDeAngola.map((provincia) => (
            <option key={provincia.id} value={provincia.nome}>
              {provincia.nome}
            </option>
          ))}
        </select>
      </div>

      {/*CARD DE EMPRESAS */}
      <div
        style={{
          padding: "10px",
          border: "2px solid #6B7280",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "5px",
            maxHeight: "400px",
            overflow: "auto",
            willChange: "transform", //elimina o problema do corte do primeiro item ao rolar para baixo e depois para cima
          }}
        >
          {resultado.length === 0 ? (
            <p className="text-red-600 text-sm">Nenhum registro encontrado!</p>
          ) : (
            resultado.map((empresa) => {
              const selecionada = empresaSelecionada?.id === empresa.id;
              return (
                <div
                  key={empresa.id}
                  onClick={() => handleSelecionarEmpresa(empresa)}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: selecionada
                      ? "2px solid #007bff"
                      : "1px solid #ccc",
                    backgroundColor: selecionada ? "#eaf4ff" : "#f9f9f9",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    {destacarTermo(empresa.nome, busca)}

                    <p className="flex items-center font-normal text-[14px] text-[var(--cor-texto-secundario)]">
                      <MapPin size={16} strokeWidth={1.5} />{" "}
                      {pegarProvincia(empresa.endereco.provinciaId)},{" "}
                      {empresa.endereco.municipio}, {empresa.endereco.bairro},{" "}
                      {empresa.endereco.rua}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/*CARD DE SERVIÇOS */}

      {empresaSelecionada && (
        
        <div style={{ marginTop: 20 }}>
          <strong>Escolha um serviço:</strong>
          <div
            className="flex justify-between border-[1px] border-solid border-[#6B7280] rounded-[5px] mb-[5px] p-[8px] cursor-pointer"
            onClick={() =>
               handleCardServicoSel()
            }
            style={{
              border: cardServicoSel ? "2px solid var(--cor-verdeClaro)" : "1px solid #ccc",
              backgroundColor: cardServicoSel ? "#eaf4ff" : "#f9f9f9",
            }}
          >
            Selecionar... <ChevronDown />
          </div>
          
          {cardServicoSel === true && <div
            style={{
              padding: "10px",
              border: "2px solid #6B7280",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "5px",
                maxHeight: "400px",
                overflow: "auto",
                willChange: "transform", //elimina o problema do corte do primeiro item ao rolar para baixo e depois para cima
              }}
            >
              {empresaComFila(empresaSelecionada.id).map((servico) => {
                const selecionado = servicoSelecionado === servico.nome;
                return (
                  <div
                    key={servico.id}
                    onClick={() => handleSelecionarServico(servico.nome)}
                    style={{
                      padding: "10px",
                      borderRadius: "8px",
                      border: selecionado
                        ? "2px solid #007bff"
                        : "1px solid #ccc",
                      backgroundColor: selecionado ? "#eaf4ff" : "#f9f9f9",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    {servico.nome}
                    <p className="flex justify-between font-normal text-[14px] text-[var(--cor-texto-secundario)]">
                      Pessoas na fila
                      <span className="text-[var(--cor-verde-escuro)] font-bold">
                        {servico.pessoasNaFila}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>}
        </div>
      )}
      {/*BUTTON */}
      {empresaSelecionada && servicoSelecionado && (
        <button
          onClick={handleEnviar}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar Escolha
        </button>
      )}
    </div>
  );
}
