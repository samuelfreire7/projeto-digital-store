import "./Footer.css"
import logoDigitalFooter from "../assets/images/logo_DStore_branca.png"
import logoFacebookFooter from "../assets/images/logoFacebook.png"
import logoInstagramFooter from "../assets/images/logoInstagram.png"
import logoTwitterFooter from "../assets/images/logoTwitter.png"


export default function Footer() {
    return (
        <>
            <footer>

                <section className="sera">

                    <div className="logod">
                        <img src={logoDigitalFooter} alt="" />

                        <div className="lorem">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.</p>
                        </div>


                        <div className="logos">
                            <a href=""><img src={logoFacebookFooter} alt="" /></a>
                            <a href=""><img src={logoInstagramFooter} alt="" /></a>
                            <a href=""><img src={logoTwitterFooter} alt="" /></a>
                        </div>

                    </div>

                    <div className="informaçao">
                        <h3>Informação</h3>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>

                    </div>

                    <div className="categoria">
                        <h3 className="h3tit">Categorias</h3>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                    <div className="contato">
                        <h3 className="h3tit">Contato</h3>
                        <p>Av. Santos Dumont, 1510-1 andar Aldeota, Fortaleza -CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                    <div className="divFinal">
                        <hr className="linha-footer" />
                    </div>
                </section>
                <p className="p"> &copy; 2025 Digital College</p>
            </footer>
        </>
    );
};