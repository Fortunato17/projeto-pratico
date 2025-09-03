export function gerarCodigo() {
  const aletorio = Math.floor(Math.random() * 36 * 36 * 36)//gera um número aleatório entre 0 e 46655 (36³ - 1)
    .toString(36) //converte esse número para base 36 (0–9 + a–z)
    .padStart(3, 0) //garante que sempre terá 3 caracteres (ex: 00A, ZZZ)
    .toUpperCase();
  return "F" + aletorio + 17;
}
