import Filter from "../components/FilterGroup";
import ProductCard from "../components/ProductCard";
import sapatoAzul from "../assets/images/sapato_azul_Dstore.png";
import "./ProductListingPage.css"



export default function ProductListingPage() {
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

    ];


    return (
        <>

            <div className="resultado_produtos">
                <div className="titulo_resultado">
                    <p className="titulo1">Resultados para “Tênis”</p>
                    <p>-</p>
                    <p className="titulo2">389 produtos</p>
                </div>

                <div className="ordenar"><label className="label_ordenar" for="">Ordenar por:</label>
                    <select classNameName="selecionar_preco" name="" id="">
                        <option value="Maior">Maior Preço</option>
                        <option value="Menor">Menor Preço</option>
                        <option value="Relevante">Mais Relevantes</option>
                    </select>
                </div>
            </div>

            <div className="uniao">
                <Filter />
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
            </div>
        </>
    );
}