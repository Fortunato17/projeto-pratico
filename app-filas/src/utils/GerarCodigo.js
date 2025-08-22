export function gerarCodigo() {
  const aletorio = Math.floor(Math.random() * 36 * 36 * 36)
    .toString(36)
    .padStart(3, 0)
    .toUpperCase()
  return "F" + aletorio + 17;
}
