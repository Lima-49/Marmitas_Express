import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../imagens/lambreta.png'
import UserPKT from '../../imagens/usr.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal} from 'react-bootstrap';
import 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/components/ModalCompra/index_compra.css'
import { createBrowserHistory } from 'history'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalCompra(props){
    //Função que aciona o modal para armazenar os dados de login do usuario
    function ModalCompra() {

        //Constante para armazer a variavel se o modal esta aberto ou fechado
        const [show, setShow] = useState(false);
        
        //Constantes para abrir e fechar o modal
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        //Variavel para salvar o adicional
        const [adicional, setAdicional] = useState("Adicionais")
        const [preco, setPreco] = useState(" 0,00")

        //Variavel para aramzenar a conta do preco final
        const [preco_final, setCalculaFinal] = useState(props.valor)
        
        //Funcao para fechar o modal quando finalizar a compra
        const handleClick = () => {
            toast.error("Compra efetuada com sucesso!")
        
            handleClose()
        }

            
        //Renderizando o modal
        return (
        <>
        <div className='teste'>
                {/* Botao em que quando acionado sera ativado o modal */}
                <div> 
                    <button className='btn_comprar' onClick={handleShow}>Comprar</button>
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
                            
                                <li className='input_group'>
                                    <select id='4.50' className='input_adicional' onChange={(e)=>{const selected = e.target.value 
                                                                                                    console.log(selected)
                                                                                                    if(selected == "Adicionais"){
                                                                                                        const selectedPreco = "0.00"
                                                                                                        const calcula =  parseFloat(selectedPreco) + parseFloat(props.valor)
                                                                                                        setCalculaFinal(calcula)
                                                                                                        setAdicional(selected)
                                                                                                        setPreco(selectedPreco)
                                                                                                    }
                                                        
                                                                                                    else{
                                                                                                        const selectedPreco = e.target.id
                                                                                                        const calcula =  parseFloat(selectedPreco) + parseFloat(props.valor)
                                                                                                        setCalculaFinal(calcula)
                                                                                                        setAdicional(selected)
                                                                                                        setPreco(selectedPreco)
                                                                                                    }}}>
                                                                                                        

                                        <option selected value={"Adicionais"}>Adicionais</option>
                                        <option value={"Coca-Cola"} >Coca-Cola 250ml</option>
                                        <option value={"Coca-Cola Zero"} >Coca-Cola Zero 250ml</option>
                                        <option value={"Guarana Antartica"} >Guarana Antartica 250ml</option>
                                        <option value={"Sprite"} >Sprite 250ml</option>
                                        <option value={"Fanta Laranja"} >Fanta Laranja 250ml</option>
                                    </select>
                                </li>
                                
                                <li className='input_group'>
                                    <table className='table_modal'>
                                        <tr>
                                            <th className='th_modal'>Produto Selecionado</th>
                                            <th className='th_modal'>Valor</th>
                                        </tr>
                                        <tr>
                                            <td className='td_modal'>{props.produto}</td>
                                            <td className='td_modal'>R$ {props.valor}</td>
                                        </tr>
                                        <tr>
                                            <td className='td_modal'>{adicional}</td>
                                            <td className='td_modal'>R$ {preco}</td>
                                        </tr>
                                    </table>
                                </li>
                                
                                <div className='calculo_final'>Preço Final: R$ {preco_final}</div>

                                <Button onClick={handleClick} className='send_button'>
                                    Finalizar Compra
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
        <ModalCompra/>
    )
}
