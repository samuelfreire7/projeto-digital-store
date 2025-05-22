import "./ProductCard.css"

export default function ProductCard() {
    return (
        <>
            <div class="colecoes">

                <div className="card">
                    <a href="#" /><img src="/images/Teniskswiss.png" className="card-img-top" alt="..." />
                    <div className="card-body body_em_alta" >
                        <p className="card-title">Tênis</p>
                        <p className="card-text texto_em_alta">K-Swiss V8 - Masculino</p>
                        <div className="presos">
                            <p className="valor_em_alta">R$ 200</p>
                            <p className="descontos">R$ 100</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

