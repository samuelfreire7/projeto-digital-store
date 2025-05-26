import tenisImg from '../assets/images/tenis carrossel.png';
import stars from '../assets/images/Stars.png'
import star from '../assets/images/Star 1.png'
import sapatoAzul from '../assets/images/sapato_azul_Dstore.png'
import ProductCard from "../components/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ProductViewPage.css'




export default function ProductViewPage() {

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
            <div className="barra-especificacoes">
                <p><strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>

                <div className="div-do-tenis">

                    <div className="especificacoes">
                        <div className="view-do-produto">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner carrossel-inner-pag3">
                                    <div className="carousel-item active">
                                        <img src={tenisImg} alt="Tênis" />
                                    </div>
                                    {[2, 3, 4, 5].map((i) => (
                                        <div className={`carousel-item carousel-item-pag3  slide${i}`} key={i}>
                                            <img className={`imagem_carrossel_${i}`} src={tenisImg} alt={`Slide ${i}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className="imagenszinhas">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i}><img className={`imagem${i}`} src={tenisImg} alt={`Variante ${i}`} /></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="detalhes-tenis">
                        <h1>
                            Tênis Nike Revolution <br /> 6 Next Nature Masculino
                        </h1>
                        <p className="texto_detalhes_tenis">Casual | Nike | REF:38416711</p>
                        <div className="estrlas">
                            <img src={stars} alt="Estrelas" />
                            <p className="avaliacao">4.7 <img src={star} alt="Estrela" /></p>
                            <p className="texto_detalhes_tenis">(90 avaliações)</p>
                        </div>
                        <div className="preco_detalhes-tenis">
                            <p className="preco_detalhes-tenis_promocao">R$ 219,00</p>
                            <p className="preco_detalhes-tenis_real">R$ 300</p>
                        </div>

                        <p className="texto_descricao_tenis">Descrição do produto</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br />
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>

                        <h5 className="titulo_detalhes_tenis">Tamanho</h5>
                        <div className="tamanho_detalhes-tenis">
                            {[39, 40, 41, 42, 43].map((num) => (
                                <button key={num}>{num}</button>
                            ))}
                        </div>

                        <h5 className="tilulo_cor_detalhes-tenis">Cor</h5>
                        <div className="cor_detalhes-tenis">
                            <div className="botoes_detalhes-tenis_cor">
                                {[1, 2, 3, 4].map((num) => (
                                    <button key={num} className={`cor_button${num}`}></button>
                                ))}
                            </div>
                        </div>

                        <button className="botao_comprar_detalhes-tenis">COMPRAR</button>
                    </div>
                </div>
            </div>

            <div class="titulo_produtos_relacionados">
                <h1 class="h1_produtos_relacionados">Produtos Relacionados</h1>
                <div><a class="link_produtos_relacionados" href="">Ver Todos
                    <img src="images/seta.png" alt="" /></a>
                </div>
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
        </>
    );
}