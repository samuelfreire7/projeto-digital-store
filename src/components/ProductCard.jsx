
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
        <>
            <a href="/pagina3" className="link-card">
                <div className="card">
                    <img src={props.imagem} className="card-img-top" alt="" />
                    <div className="card-body body_em_alta" >
                        <p className="card-text texto_em_alta">{props.nome}</p>
                        <p className="promoçao_em_alta">30% OFF</p>
                        <div className="presos">
                            <p className="valor_em_alta">{props.preco}</p>
                            <p className="descontos">{props.desconto}</p>
                        </div>
                    </div>
                </div >
            </a>
        </>
    );
};




