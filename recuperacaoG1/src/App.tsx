
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contador from "./exercicio-useState/Contador";
import ContadorComTitulo from "./exercicio-useEfect/ContadorComTitulo";
import Menu from "./pages/Menu";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import { ThemeProvider } from './exercicio-useContext/ThemeContext';
import ThemeDisplay from "./exercicio-useContext/ThemeDisplay";

function App() {
  return (<ThemeProvider>
    <BrowserRouter>
      <Menu />
      
      <h1>Exemplo de useState</h1>
      <Contador />
      
      <h1>Exemplo de useEffect</h1>
      <ContadorComTitulo />

      <h1>Exemplo de useContext</h1>
        <ThemeDisplay />


      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>);
}

export default App;