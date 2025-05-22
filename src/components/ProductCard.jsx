
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
        <>


            <div className="card">
                <a href="#" /><img src={props.imagem} className="card-img-top" alt="" />
                <div className="card-body body_em_alta" >
                    <p className="card-text texto_em_alta">{props.nome}</p>
                    <div className="presos">
                        <p className="valor_em_alta">{props.preco}</p>
                        <p className="descontos">{props.desconto}</p>
                    </div>
                </div>
            </div>

        </>
    );
};




