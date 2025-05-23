import "./Section.css"

export default function Section(props) {
    return (
        <>
                {/* <p className="H1_colecoes">Coleções em destaque</p> */}

            <div className="coleçoes">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <p>30% OFF</p>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">{props.titulo}</h5>
                        <div><img src={props.imagem} className="imagem_dos_cards_colecoes" alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        </>
    );
}