import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/imagens/lambreta.png'
import UserPKT from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/imagens/usr.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal} from 'react-bootstrap';
import 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/components/Modal/index.css'


export default function ModalLogin(){
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
        <div className='teste'>
                {/* Botao em que quando acionado sera ativado o modal */}
                <div> 
                    <a className='text-link' variant="primary" onClick={handleShow} > Login </a>
                    <img className='user-login' src={UserPKT } width="40" height="" variant="primary" onClick={handleShow}></img>  
                </div>
                
                {/* Conteudo do modal */}
                <Modal show={show} onHide={handleClose}>
                    
                    {/* Header */}
                    <Modal.Header className="modalHeader" closeButton>
                        <div className='container_logo'>
                            <div className='logo-nome-modal'>
                                <p className="tituloH">Marmitas Express</p>
                                <img src={Logo } alt="logo" width="60" height="" class="d-inline-block align-text-top"></img>
                            </div>
                        </div>
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
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                        <option value="EX">Estrangeiro</option>
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
            </div>
        </>

        );
    }

    return (
        <ModalLogin/>
    )
}
