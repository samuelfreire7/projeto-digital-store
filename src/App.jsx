
import './App.css'
import Header from './components/Header';
import NavLinks from './components/NavLinks';
import Carrossel from './components/carrossel';
import Section from './components/Section'
import ColecoesDestaque from './components/Colecao';
import colecaoBlusa from './assets/images/blusaSupreme.png';
import colecaoFone from './assets/images/cardFone.png';
import colecaoTenis from './assets/images/cardTenis.png';
import ProductCard from './components/ProductCard';
import sapatoAzul from './assets/images/sapato_azul_Dstore.png';
import seta from './assets/images/seta.png';
import Banner from './components/Banner';
import Footer from './components/Footer';



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
      titulo: "Novo drop supreme",
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

      <Header />
      <NavLinks />
      <Carrossel />

      <div className="H1_colecoes" ><p>Coleções em destaque</p></div>

      <div className="cards_colecao_div">
        {colecoes.map((colecao, index) => (
          <Section
            key={index}
            titulo={colecao.titulo}
            imagem={colecao.imagem}
          />
        ))}
      </div>

      <ColecoesDestaque />

      <div className='titulo_produtos_em_alta'><h1 className="H1_em_alta">Produtos em alta</h1>
        <a className="link_produtos_em_alta" href="">Ver Todos <img src={seta} alt="Seta" /></a>
      </div>

      <div className="cards-div">
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

      <Banner />

      <Footer />
    </>
  )
}

export default App





