function Teste() {
  function isValidQueue(queue) {
    return typeof queue.code === "string"
      && ["active", "completed", "canceled"].includes(queue.status)
      && typeof queue.institutionId === "string"
      && typeof queue.serviceId === "string"
      && typeof queue.position === "number";
  }

  const q = {
    code: "ABC123",
    status: "active",
    institutionId: "inst001",
    serviceId: "srv005",
    position: 1
  };

  console.log(isValidQueue(q)); // true

  return (
    <div>
       Queue válida? {isValidQueue(q) ? "Sim" : "Não"}
    </div>
  );
}

export default Teste;
