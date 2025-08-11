import { useMemo } from "react";
import { empresas, pegarProvincia } from "../../../Dados";
import { MapPin } from "lucide-react";
export default function CardEmpresas({
  visivel,
  setVisivel,
  pesquisa,
  setPesquisa,
  filtro,
  itemSelecionado,
  setItemSelecionado,
}) {
  // Pesquisa de empresas e filtro por província
  const resultado = useMemo(() => {
    return empresas
      .filter((empresa) => {
        const incluiProvin =
          filtro === "Todas" ||
          pegarProvincia(empresa.endereco.provinciaId).includes(filtro);
        const incluiNome = empresa.nome
          .toLowerCase()
          .includes(pesquisa.trim().toLowerCase());
        const nomeVisivel = visivel ? itemSelecionado.empresa?.id === empresa.id : true;
        return incluiNome && incluiProvin && nomeVisivel;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [pesquisa, filtro, visivel, itemSelecionado.empresa]);

  /**EVENTOS */
  const handleSelecionarEmpresa = (empresaParam) => {
    if (itemSelecionado.empresa?.id !== empresaParam.id) {
      setItemSelecionado({
        empresa: empresaParam,
        servico: null,
      });
      setPesquisa("");
      setVisivel(true);
    } else {
      setItemSelecionado((prev) => ({ ...prev, empresa: null }));
      setVisivel(false);
    }
  };
  // OUTRAS FUNÇÕES
  const destaqueNaPesquisa = (busca, titulo) => {
    if (!busca) {
      return titulo;
    }
    const partes = titulo.split(new RegExp(`(${busca})`, "i"));
    return partes.map((parte, i) =>
      parte.toLowerCase() === busca.toLowerCase() ? (
        <span key={i} className="text-[var(--cor-primaria)]">
          {parte}
        </span>
      ) : (
        <span key={i}>{parte}</span>
      )
    );
  };
  return (
    <div className=" border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[20px] shadow-[0px_3px_6px_0.5px_rgba(0,0,0,0.25)]">
      <ul className="  itemsSection pt-[5px] pr-[5px] max-h-[350px] overflow-auto will-change-transform">
        {resultado.length === 0 ? (
          <li className="text-[var(--cor-erro)]">
            Nenhum resultado encontrado!!
          </li>
        ) : (
          resultado.map((empresa) => {
            const selecionada = itemSelecionado.empresa?.id === empresa.id;
            return (
              <li
                key={empresa.id}
                className={`border-[0.5px] border-solid border-[var(--cor-borda)] rounded-[10px] p-[10px] cursor-pointer hover:translate-y-[-2.5px] ${
                  selecionada
                    ? "border-[1.5px] border-[var(--cor-primaria)] bg-[var(--cor-verdePastel)]"
                    : "hover:bg-[var(--corHover)]"
                }`}
                onClick={() => handleSelecionarEmpresa(empresa)}
              >
                <div className="font-bold">
                  {destaqueNaPesquisa(pesquisa, empresa.nome)}
                </div>
                <div className="flex items-center text-[14px] text-[var(--cor-texto-secundario)]">
                  <MapPin size={16} strokeWidth={1.5} />
                  {pegarProvincia(empresa.endereco.provinciaId)},{" "}
                  {empresa.endereco.municipio}, {empresa.endereco.bairro},{" "}
                  {empresa.endereco.rua}
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
