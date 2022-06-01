import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from 'C:/Users/eduardo/workspace/Marmitas_Express/projeto-final/src/imagens/lambreta.png'
import UserPKT from 'C:/Users/eduardo/workspace/Marmitas_Express/projeto-final/src/imagens/usr.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal} from 'react-bootstrap';
import './index.css'

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
                <Modal.Body>

                    
                    <form>
                        <ul className='forms'>
                            <li className='forms_lista'>
                                <input type='text' id='nome_usr' placeholder='Nome' className='input_estado'></input>
                            </li>
                            
                            <li className='forms_lista'>
                                <input type='text' id='telefone_usr' placeholder='Telefone' className='input_estado'></input>
                            </li>
                            
                            <li className='input_group'>
                                <input type='text' id='cidade_usr' placeholder='Cidade' className='input_cidade'></input>
                                <select  id='estados' className='input_estado'>
                                    <option selected>Estado</option>
                                </select>
                            </li>
                            
                            <li className='input_group'>
                                <input type='text' id='endereco_usr' placeholder='Endereço' className='input_endereco'></input>
                                <input type='text' id='numero_usr' placeholder='Numero'></input>
                            </li>

                            <Button onClick={handleClose} className='send_button'>
                                Enviar
                            </Button>
                        </ul>
                    </form>           

                </Modal.Body>

            </Modal>
          </>

        );
      }

    return (

        // Navbar que sera utilizado em todas as paginas
        <div className="header">
            <div className='headerContent'>
                    {/*container para organizar a foto e o nome da pagina*/}
                    <a className='logo-nome' href="#">
                        <Link className='lista-links' to='/'>
                            <p className="tituloH">Marmitas Express</p>
                            <img className='logo' src={Logo} alt="logo" width="60" height=""></img>
                        </Link>
                    </a>
                    
                    {/* Lista dos caminhos para as outras paginas */}
                    <div>
                            {/* Link para o modal do login */}
                            <li class="user">
                                <ModalLogin/>
                            </li>
                    </div>
            </div>
        </div>
    )
}
