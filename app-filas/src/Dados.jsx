// ----------------------
// Provincias de Angola
// ----------------------
export const provincias = [
  { id: 1, nome: "Luanda" },
  { id: 2, nome: "Lunda Norte" },
  { id: 3, nome: "Moxico" },
  { id: 4, nome: "Moxico Leste" },
  { id: 5, nome: "Namibe" },
  { id: 6, nome: "Uíge" },
  { id: 7, nome: "Zaire" },
  { id: 8, nome: "Cabinda" },
];

// ----------------------
// Empresas
// ----------------------
export const empresas = [
  {
    id: 1,
    nome: "Tech Angola",
    provinciaId: 6,
    municipio: "Uíge",
    bairro: "Centro",
    rua: "Rua da Tecnologia",
  },
  {
    id: 2,
    nome: "Farmácia Popular",
    provinciaId: 3,
    municipio: "Luena",
    bairro: "Saúde",
    rua: "Av. dos Médicos",
  },
  {
    id: 3,
    nome: "Super Limpinho",
    provinciaId: 6,
    municipio: "Negage",
    bairro: "Industrial",
    rua: "Rua da Limpeza",
  },
  {
    id: 4,
    nome: "BAI - Banco Angolano de Investimento",
    provinciaId: 1,
    municipio: "Luanda",
    bairro: "Maianga",
    rua: "Av. Revolução",
  },
  {
    id: 5,
    nome: "Auto Express",
    provinciaId: 5,
    municipio: "Moçâmedes",
    bairro: "Porto",
    rua: "Rua dos Transportes",
  },
  {
    id: 6,
    nome: "EduMais",
    provinciaId: 2,
    municipio: "Dundo",
    bairro: "Estudantil",
    rua: "Rua do Saber",
  },
  {
    id: 7,
    nome: "GreenGarden",
    provinciaId: 7,
    municipio: "Mbanza Congo",
    bairro: "Verde",
    rua: "Rua dos Jardins",
  },
  {
    id: 8,
    nome: "CasaSegura",
    provinciaId: 1,
    municipio: "Talatona",
    bairro: "Patriota",
    rua: "Rua da Segurança",
  },
  {
    id: 9,
    nome: "BAI - Banco Angolano de Investimento",
    provinciaId: 6,
    municipio: "Uíge",
    bairro: "Finanças",
    rua: "Av. do Banco",
  },
];

// ----------------------
// Serviços
// ----------------------
export const servicos = [
  // Tech Angola
  { id: 1, empresaId: 1, nome: "Reparo de Computador", tipo: "A" },
  { id: 2, empresaId: 1, nome: "Instalação de Redes", tipo: "B" },

  // Farmácia Popular
  { id: 3, empresaId: 2, nome: "Consulta Médica", tipo: "A" },
  { id: 4, empresaId: 2, nome: "Entrega de Medicamentos", tipo: "B" },

  // Super Limpinho
  { id: 5, empresaId: 3, nome: "Limpeza Residencial", tipo: "A" },
  { id: 6, empresaId: 3, nome: "Limpeza de Escritórios", tipo: "B" },

  // BAI - Banco Angolano de Investimento
  { id: 7, empresaId: 4, nome: "Depósito", tipo: "A" },
  { id: 8, empresaId: 4, nome: "Levantamento", tipo: "B" },

  // Auto Express
  { id: 9, empresaId: 5, nome: "Táxi Privado", tipo: "A" },
  { id: 10, empresaId: 5, nome: "Entrega Rápida", tipo: "B" },

  // EduMais
  { id: 11, empresaId: 6, nome: "Aulas Particulares", tipo: "A" },
  { id: 12, empresaId: 6, nome: "Cursos Online", tipo: "B" },

  // GreenGarden
  { id: 13, empresaId: 7, nome: "Paisagismo", tipo: "A" },
  { id: 14, empresaId: 7, nome: "Manutenção de Jardins", tipo: "B" },

  // CasaSegura
  { id: 15, empresaId: 8, nome: "Monitoramento 24h", tipo: "A" },
  { id: 16, empresaId: 8, nome: "Instalação de Câmeras", tipo: "B" },
  // BAI - Banco Angolano de Investimento
  { id: 17, empresaId: 9, nome: "Depósito", tipo: "A" },
  { id: 18, empresaId: 9, nome: "Levantamento", tipo: "B" },
  { id: 19, empresaId: 9, nome: "Abertura de Conta", tipo: "C" },
];

// ----------------------
// Funções utilitárias
// ----------------------

// Pega o nome da província
//?. (chamado de optional chaining-encadeamento opcional)- Significa: Se o valor antes disso não for null ou undefined, continue. Senão, retorne undefined e não quebre o código.
export function pegarProvincia(id) {
  return provincias.find((provincia) => provincia.id === id)?.nome;
}

// Cria filas a partir dos serviços
let valorId = 0;
export const filas = servicos.map((servico) => ({
  id: (valorId += 1),
  servicoId: servico.id,
  empresaId: servico.empresaId,
  nome: servico.nome,
  tipo: servico.tipo,
  pessoasNaFila: Math.floor(Math.random() * 10) + 1,
}));

// Retorna filas de uma empresa
//Função para pegar as filas de uma empresa, que retorna um novo array por causa do filter
export function empresaComFila(id) {
  return filas.filter((fila) => fila.empresaId === id);
}
