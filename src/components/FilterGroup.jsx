import "./FilterGroup.css"

export default function Filter() {

    return (
        <>
            <section className="uniao">
                <div className="filtro">
                    <div className="texto1-filtro">
                        <p><strong>Filtrar por</strong></p>
                    </div>

                    <div className="barrafiltro">
                        <hr />
                    </div>

                    <form>
                        <section className="topicos">


                            <section>
                                <p><strong>Marca</strong></p>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Adidas" name="Marca" value="Adidas" />
                                    <label for="adidas">Adidas</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Calenciaga" name="Marca" value="Calenciaga" />
                                    <label for="Calenciaga">Calenciaga</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="K-Swiss" name="Marca" value="K-Swiss" />
                                    <label for="K-Swiss">K-Swiss</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Nike" name="Marca" value="Nike" />
                                    <label for="Nike">Nike</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Puma" name="marca" value="Puma" />
                                    <label for="Puma">Puma</label>
                                </div>
                            </section>
                            <section>
                                <p><strong>Categoria</strong></p>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Esporte e lazer" name="Categoria" value="Esporte Lazer" />
                                    <label for="Esporte e Lazer">Esporte e lazer</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Casual" name="Categoria" value="Esporte e Lazer" />
                                    <label for="Casual">Casual</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Utilitário" name="Categoria" value="Utilitário" />
                                    <label for="Utilitário">Utilitário</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Corrida" name="Categoria" value="Corrida" />
                                    <label for="Corrida">Corrida</label>
                                </div>
                            </section>
                            <section>
                                <p><strong>Gênero</strong></p>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="masculino" name="Gênero" value="Masculino" />
                                    <label for="masculino">Masculino</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Feminino" name="Gênero" value="Feminino" />
                                    <label for="Feminino">Feminino</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="checkbox" id="Unisex" name="Gênero" value="Unisex" />
                                    <label for="Unisex">Unisex</label>
                                </div>
                            </section>
                            <section>
                                <p><strong>Estado</strong></p>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="radio" id="novo" name="estado" value="Novo" />
                                    <label for="novo">Novo</label>
                                </div>
                                <div className="botao-filtro">
                                    <input className="input-filtro" type="radio" id="usado" name="estado" value="Usado" />
                                    <label for="usado">Usado</label>
                                </div>
                            </section>
                        </section>
                    </form>
                </div>
            </section>
        </>



    );

}



