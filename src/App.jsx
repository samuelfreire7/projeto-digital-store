import './App.css'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import Section from './components/Section'
import sapatoAzul from './assets/images/sapato_azul_Dstore.png';


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

      <Section />
      <Footer />
    </>
  )
}

export default App





