import "./Section.css"

export default function Section() {
    return (
        <section>

            <p className="H1_colecoes">Coleções em destaque</p>

            <div className="coleçoes">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <p>30% OFF</p>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">Novo drop <br />
                            Supreme</h5>
                        <div><img className="imagem_dos_cards_colecoes" src="./src/assets/images/blusaSupreme.png" alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <p>30% OFF</p>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">Coleção <br />
                            Adidas</h5>
                        <div><img className="imagem_dos_cards_colecoes" src="./src/assets/images/cardTenis.png" alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <p>30% OFF</p>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">Novo <br />
                            Beats Bass</h5>
                        <div><img className="imagem_dos_cards_colecoes" src="./src/assets/images/cardFone.png" alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>

        </section>
    );
}