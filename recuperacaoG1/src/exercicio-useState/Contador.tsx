import { useState } from "react";

export default function Contador() {
  // 👇 useState cria uma variável de estado chamada "contador"
  const [contador, setContador] = useState<number>(0);

  // 👇 Funções para mudar o estado
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar} style={{ marginLeft: "10px" }}>
        Decrementar
      </button>
    </div>
  );
}
