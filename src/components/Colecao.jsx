import "./Colecao.css"

export default function ColecoesDestaque() {
  return (
    <section className="colecoes-destaque">
      <h3>Coleções em Destaque</h3>

      <div className="imagens-colecao">
        <div>
          <img src="src/assets/images/blusacoleçao.png" alt="Blusas" />
          <p>Blusas</p>
        </div>

        <div>
          <img src="src/assets/images/calcacolecao.png" alt="Calças" />
          <p>Calças</p>
        </div>

        <div>
          <img src="src/assets/images/fone.png" alt="Headphones" />
          <p>Headphones</p>
        </div>

        <div>
          <img src="src/assets/images/tenis.png" alt="Tênis" />
          <p>Tênis</p>
        </div>
      </div>
    </section>
  );
}