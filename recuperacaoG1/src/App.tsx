import Contador from "./exercicio-useState/Contador";
import ContadorComTitulo from "./exercicio-useEfect/ContadorComTitulo";




function App() {
  return (
    <div>
      <h1>Exemplo de useState</h1>
      <Contador />

      <h1>Exemplo de useEfect</h1>
      <ContadorComTitulo />

      <h1>Exemplo de useContext com tema</h1>
     {/* Não consegui fazer nem com ajuda nem com o chat. o codigo do chat tava
     fazendo a tela parar de funcinar então eu não coloquei ele aqui. Mesmo assim o codigo ainda ta ai */}
    </div>
  );
}

export default App;
