import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
      <Link to="/">Início</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
