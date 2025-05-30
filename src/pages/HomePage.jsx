import seta from '../assets/images/seta.png';
import colecaoFone from '../assets/images/cardFone.png';
import colecaoTenis from '../assets/images/cardTenis.png';
import sapatoAzul from '../assets/images/sapato_azul_Dstore.png';
import colecaoBlusa from '../assets/images/blusaSupreme.png';
import Banner from "../components/Banner";
import Carrossel from "../components/Carrossel";
import ColecoesDestaque from "../components/Colecao";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavLinks from "../components/NavLinks";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import "./HomePage.css"



export default function HomePage() {
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
                <a className="link_produtos_em_alta" href="/produtos">Ver Todos <img src={seta} alt="Seta" /></a>
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

        </>
    );
}
