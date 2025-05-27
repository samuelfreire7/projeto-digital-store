import './Header.css';



export default function Header() {
    return (
        <header className="inicio">
            <div className="imagem-principal">
                <a href="/"><img src="src/assets/images/logo_DStore.png" alt="Logo da loja" /></a>
            </div>

            <div className="search-bar">
                <input
                    id="barraPesquisa"
                    type="text"
                    placeholder="Pesquisar produto..."
                    style={{ fontSize: 'medium' }}
                />
            </div>

            <div className="itens-cadastro">
                <a
                    id="cadastro"
                    className="links"
                    href="/cadastro"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                    Cadastre-se
                </a>
                <a href="/Login">
                    <input id="botaoEntrar" type="button" value="Entrar" />
                </a>
                <a id="iconeCarrinho" href="#carrinho">
                    <div id="bolinhaCarrinho"></div>
                </a>
            </div>
        </header>
    );
}




// import './HeaderStyle.css';
// import logo from '../../assets/logo.png';
// import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate ao invés de useHistory
// import React, { useState } from 'react';

// export default function Header() {
//     const [selectedLink, setSelectedLink] = useState('Home');
//     const navigate = useNavigate(); // Use useNavigate para navegação programática

//     const handleLinkSelection = (linkName) => {
//         setSelectedLink(linkName);
//     };

//     const produtosFicticios = [
//         { nome: 'Sapato Azul', url: '/ProductViewPage' },
//         { nome: 'Sapato Vermelho', url: '/produto-vermelho' },
//         { nome: 'Sapato Preto', url: '/produto-preto' }
//     ];

//     const handleKeyDown = (event) => {
//         console.log('Tecla pressionada:', event.key);
//         if (event.key === 'Enter') {
//             const searchText = event.target.value.trim().toLowerCase();
//             console.log('Texto de busca:', searchText);
//             let produtoEncontrado = produtosFicticios.find(produto => produto.nome.toLowerCase() == searchText);
//             console.log('Produto encontrado:', produtoEncontrado);
//             if (produtoEncontrado) {
//                 navigate(produtoEncontrado.url);
//             } else {
//                 console.log(`Produto '${searchText}' não encontrado.`);
//             }
//         }
//     };

//     return (
//         <div className="caixaHeader">
//             <div id='caixaHeader2'>
//             <div id='cabecalho'>
//                 <Link to={'/'} onClick={() => handleLinkSelection('Home')}>
//                     <img id="logo" src={logo} alt="logo" />
//                 </Link>
//                 <input
//                     id="barraPesquisa"
//                     type="text"
//                     placeholder="Pesquisar produto..."
//                     onKeyDown={handleKeyDown}
//                 />
//                 <input id="botaoLupa" type="button" value='' />
//                 <Link to={'/Cadastro'} id="cadastro" className="links">Cadastre-se</Link>
//                 <Link to={'/Login'}>
//                     <input id="botaoEntrar" type="button" value="Entrar" />
//                 </Link>
//                 <a id="iconeCarrinho" href="#carrinho">
//                     <div id='bolinhaCarrinho'>2</div>
//                 </a>
//             </div>
//             <div id="linksHeader">
//                 <Link
//                     to={'/'}
//                     className={`links ${selectedLink === 'Home' ? 'selected' : ''}`}
//                     onClick={() => handleLinkSelection('Home')}
//                 >
//                     Home
//                 </Link>
//                 <Link
//                     to={'/ProductListingPage'}
//                     className={`links ${selectedLink === 'Produtos' ? 'selected' : ''}`}
//                     onClick={() => handleLinkSelection('Produtos')}
//                 >
//                     Produtos
//                 </Link>
//                 <Link
//                     to={'/ProductViewPage'}
//                     className={`links ${selectedLink === 'Categorias' ? 'selected' : ''}`}
//                     onClick={() => handleLinkSelection('Categorias')}
//                 >
//                     Categorias
//                 </Link>
//                 <Link
//                     to={'/ProductViewPage'}
//                     className={`links ${selectedLink === 'Pedidos' ? 'selected' : ''}`}
//                     onClick={() => handleLinkSelection('Pedidos')}
//                 >
//                     Meus Pedidos
//                 </Link>
//             </div>
//             </div>
//         </div>
//     );
// }


