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
    const termoDaPesquisa = pesquisa.trim().toLowerCase();
    return empresas
      .filter((empresa) => {
        const incluiProvin =
          filtro === "Todas" ||
          pegarProvincia(empresa.provinciaId).includes(filtro);
        const incluiNome = empresa.nome.toLowerCase().includes(termoDaPesquisa);
        const nomeVisivel = visivel
          ? itemSelecionado.empresa?.id === empresa.id
          : true;
        return incluiNome && incluiProvin && nomeVisivel;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [pesquisa, filtro, visivel, itemSelecionado.empresa?.id]);

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
    <div className="caixa-lista">
      <ul className="lista-scroll">
        {resultado.length === 0 ? (
          <li className="text-[var(--cor-erro)]">
            Nenhum resultado encontrado!!
          </li>
        ) : (
          resultado.map((empresa) => {
            /**VARIÁVEIS DERIVADAS */
            const nomeEmpresa = empresa.nome;
            const { provinciaId, municipio, bairro, rua } = empresa;
            const provincia = pegarProvincia(provinciaId);
            const selecionado = itemSelecionado.empresa?.id === empresa.id;
            return (
              <li
                key={empresa.id}
                className={`item-lista item-lista-hover ${
                  selecionado ? "item-lista-selecionado" : ""
                }`}
                onClick={() => handleSelecionarEmpresa(empresa)}
              >
                <div className="font-bold">
                  {destaqueNaPesquisa(pesquisa, nomeEmpresa)}
                </div>
                <div className="flex items-center text-[14px] text-[var(--cor-texto-secundario)]">
                  <MapPin size={16} strokeWidth={1.5} />
                  {provincia}, {municipio}, {bairro}, {rua}
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
