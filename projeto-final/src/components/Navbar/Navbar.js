import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/imagens/lambreta.png'
import UserPKT from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/imagens/usr.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal} from 'react-bootstrap';


export default function Navbar() {

    //Função que aciona o modal para armazenar os dados de login do usuario
    function ModalLogin() {

        //Constante para armazer a variavel se o modal esta aberto ou fechado
        const [show, setShow] = useState(false);
        
        //Constantes para abrir e fechar o modal
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
        //Renderizando o modal
        return (
          <>
            {/* Botao em que quando acionado sera ativado o modal */}
            <div> 
                <a className='text-link' variant="primary" onClick={handleShow} > Login </a>
                <img className='user-login' src={UserPKT } width="40" height="" variant="primary" onClick={handleShow}></img>  
            </div>
            
            {/* Conteudo do modal */}
            <Modal show={show} onHide={handleClose}>
                
                {/* Header */}
                <Modal.Header className="modalHeader" closeButton>
                    <div className='logo-nome'>
                        <p className="tituloH">Marmitas Express</p>
                        <img src={Logo } alt="logo" width="60" height="" class="d-inline-block align-text-top"></img>
                    </div>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                {/* Body */}
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                {/* Footer   */}
                <Modal.Footer>    
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>
          </>

        );
      }

    return (

        // Navbar que sera utilizado em todas as paginas
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light ">
                {/*container para organizar os itens dentro do navbar */}
                <div class="container-fluid">

                    {/*container para organizar a foto e o nome da pagina*/}
                    <a class="navbar-brand" className='logo-nome' href="#">
                        <Link className='lista-links' to='/'>
                            <p className="tituloH">Marmitas Express</p>
                            <img src={Logo } alt="logo" width="60" height="" class="d-inline-block align-text-top"></img>
                        </Link>
                    </a>
                    
                    {/* Lista dos caminhos para as outras paginas */}
                    <div>
                        <ul className='lista-links'>
                            
                            {/* Link para pagina de cardapio */}
                            <li class="nav-link">
                                <Link className='lista-links' to='/cardapio'>
                                    <a className='text-link'> Cardapio </a>
                                </Link>
                            </li>

                            {/* Link para o modal do login */}
                            <li class="nav-link">
                                <ModalLogin/>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
