import './App.css'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import Section from './components/Section'
import sapatoAzul from './assets/images/sapato_azul_Dstore.png';
import colecaoBlusa from './assets/images/blusaSupreme.png';
import colecaoFone from './assets/images/cardFone.png';
import colecaoTenis from './assets/images/cardTenis.png';



function App() {
  const produtos = [
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: sapatoAzul,
      nome: "K-Swiss V8 - Masculino",
      preco: "R$ 200",
      desconto: "R$ 100"
    }
  ];
  const colecoes = [
    {
      imagem: colecaoBlusa,
      titulo: "Novo drop Supreme",
    },
    {
      imagem: colecaoTenis,
      titulo: "Coleção Adidas",
    },
    {
      imagem: colecaoFone,
      titulo: "Novo Beats Bass",
    }
  ];
  return (
    <>

      <div className="cards-container">
        {produtos.map((produto, index) => (
          <ProductCard
            key={index}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            desconto={produto.desconto}
          />
        ))}
      </div>

      <div>
        {colecoes.map((colecao, index) => (
          <Section
            key={index}
            titulo={colecao.titulo}
            imagem={colecao.imagem}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App





