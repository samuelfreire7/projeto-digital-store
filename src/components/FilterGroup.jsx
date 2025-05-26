import "./FilterGroup.css"

export default function Filter() {

    return (
        <>
            <section className="uniao">
                <div className="filtro">
                    <h3>Filtrar Por</h3>
                    <form>
                        <section id="marka">
                            <h3>Marka</h3>
                            <div>
                                <input type="checkbox" id="Adidas" name="Marka" value="Adidas" />
                                <label for="adidas">Adidas</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Calenciaga" name="Marka" value="Calenciaga" />
                                <label for="Calenciaga">Calenciaga</label>
                            </div>
                            <div>
                                <input type="checkbox" id="K-Swiss" name="Marka" value="K-Swiss" />
                                <label for="K-Swiss">K-Swiss</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Nike" name="Marka" value="Nike" />
                                <label for="Nike">Nike</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Puma" name="marka" value="Puma" />
                                <label for="Puma">Puma</label>
                            </div>
                        </section>
                        <section id="categoria">
                            <h3>Categoria</h3>
                            <div>
                                <input type="checkbox" id="Esporte Lazer" name="Categoria" value="Esporte Lazer" />
                                <label for="Esporte Lazer">Esporte Lazer</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Casual" name="Categoria" value="Esporte Lazer" />
                                <label for="Casual">Casual</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Utilítario" name="Categoria" value="Utilítario" />
                                <label for="Utilítario">Utilítario</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Corrida" name="Categoria" value="Corrida" />
                                <label for="Corrida">Corrida</label>
                            </div>
                        </section>
                        <section id="genero">
                            <h3>Gênero</h3>
                            <div>
                                <input type="checkbox" id="masculino" name="Gênero" value="Masculino" />
                                <label for="masculino">Masculino</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Feminino" name="Gênero" value="Feminino" />
                                <label for="Feminino">Feminino</label>
                            </div>
                            <div>
                                <input type="checkbox" id="Unisex" name="Gênero" value="Unisex" />
                                <label for="Unisex">Unisex</label>
                            </div>
                        </section>
                        <section id="Estado">
                            <h3>Estado</h3>
                            <div>
                                <input type="radio" id="novo" name="estado" value="Novo" />
                                <label for="novo">Novo</label>
                            </div>
                            <div>
                                <input type="radio" id="usado" name="estado" value="Usado" />
                                <label for="usado">Usado</label>
                            </div>
                        </section>
                    </form>
                </div>
            </section>
        </>



    );

}



