import blusaSupreme from "../../public/images/blusaSupreme.png"
import cardFone from "../../public/images/cardFone.png"
import cardTenis from "../../public/images/cardTenis.png"
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"></link>
import "./Section.css"

export default function Section() {
    return (
        <section>

            <p className="H1_colecoes">Coleções em destaque</p>

            <div className="coleçoes">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <P>30% OFF</P>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">Novo drop <br/>
                            Supreme</h5>
                        <div><img className="imagem_dos_cards_colecoes" src={blusaSupreme.png} alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <P>30% OFF</P>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">Coleção <br/>
                            Adidas</h5>
                        <div><img className="imagem_dos_cards_colecoes" src={cardTenis} alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <P>30% OFF</P>
                        </div>
                        <h5 className="card-title titulo_dos_cards_colecao">Novo <br/>
                            Beats Bass</h5>
                        <div><img className="imagem_dos_cards_colecoes" src={cardFone} alt="" /></div>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>

        </section>
    );
}