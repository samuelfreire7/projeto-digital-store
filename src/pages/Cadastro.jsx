import gmail1 from '../assets/images/gmail-1.png'
import facebook1 from '../assets/images/facebook-1.png'
import tenis1 from '../assets/images/tenis1.png'
import Tenis2 from '../assets/images/tenis2.png'





import "./Cadastro.css"

export default function Cadastro() {
    return (
        <section id="cad">
            <form className='form-cad'>
                <div className="formulario">
                    <h1>Crie sua conta</h1>
                    <p>
                        Já possui uma conta? Entre
                        <a href="cadastro.html">aqui</a>.
                    </p>
                    <label for="email">Email*</label>
                    <input className='input-cad' type="email" placeholder="Insira seu email" id="email" name="email" required></input>

                    <button type="submit" className="criar-conta">Criar Conta</button>
                    <div className="outras-formas-de-se-cadastrar">
                        <p>Ou faça login com</p>
                        <a href="#"><img src={gmail1} alt="Login com Gmail" /></a>
                        <a href="#"><img src={facebook1} alt="Login com Facebook" /></a>
                    </div>
                </div>
            </form>
            <div className="tenis">
                <img className="imgt" src={tenis1} alt="" />
                <img className="imgt2" src={Tenis2} alt="" />
            </div>
        </section>
    )
}