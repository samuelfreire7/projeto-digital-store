import './NavLinks.css'; 

export default function NavLinks() {
  return (
    <nav className="linksheader">
      <a href="/" className="home">Home</a>
      <a href="/produtos" className="links">Produtos</a>
      <a href="/categorias" className="links">Categorias</a>
      <a href="/meus-produtos" className="links">Meus Produtos</a>
    </nav>
  );
}