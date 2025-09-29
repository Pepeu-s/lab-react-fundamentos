import Contador from "./exercicio-useState/Contador";
import ContadorComTitulo from "./exercicio-useEfect/ContadorComTitulo";


function App() {
  return (
    <div>
      <h1>Exemplo de useState</h1>
      <Contador />

      <h1>Exemplo de useEfect</h1>
      <ContadorComTitulo />
    </div>
  );
}

export default App;
