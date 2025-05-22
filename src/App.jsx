import './App.css'
// import Footer from './components/Footer'
import ProductCard from './components/ProductCard'


function App() {
  const produtos = [
    {
      imagem: "./assets/images/sapato_azul_Dstore.png",
      nome: "Tênis Nike",
      preco: "R$ 200",
      desconto: "R$ 100"
    },
    {
      imagem: "./assets/images/sapato_azul_Dstore.png",
      nome: "Tênis Nike",
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

      {/* <Footer /> */}
    </>
  )
}

export default App





