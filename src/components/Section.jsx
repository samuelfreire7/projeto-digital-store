import "./Section.css"

export default function Section(props) {
    return (
        <>
            <div className="coleçoes">
                <div className="card">
                    <div className="card-body">
                        <div className="desc">
                            <p>30% OFF</p>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">{props.titulo}</h5>
                        <div><img src={props.imagem} className="imagem_dos_cards_colecoes" alt="" /></div>
                        <a href="#" className="btn btn-primary btn_comprar">Comprar</a>
                    </div>
                </div>
            </div>
        </>
    );
}