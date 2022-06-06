
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react';
import 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/components/Home/index.css'
import ModalCompra from '../ModalCompra/Modal.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

    return (
        <div className='body'>
            <div className='produto'>
                
                <div className='imagem_produto'>
                    <img src="https://t2.rg.ltmcdn.com/pt/posts/3/2/6/macarrao_com_calabresa_5623_600.jpg"></img>
                </div>

                <div className="desricao_produto">
                    <div className="content_descricao">
                        <h1 className="titulo">Macarrão a Bolonhesa</h1>
                        <p className="descricao">Delicioso prato italiano:Tagliatelle acompanhado com molho de tomate caseiro e carne moida</p>
                        {/* <button className='btn_comprar' value={15.90}>Comprar</button> */}
                        <ModalCompra produto="Macarrão a Bolonhesa" valor="15.90"/>
                    </div>
                </div>
            </div>
            
            <div className='produto'>
                
                <div className='imagem_produto'>
                    <img src="https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg"></img>
                </div>

                <div className="desricao_produto">
                    <div className="content_descricao">
                        <h1 className="titulo">Feijoada</h1>
                        <p className="descricao">Feijoada completa, acompanha: Feijão, arroz, torresmo, couve refogada, bisteca de porco e molho apimentado
                        </p>
                        <ModalCompra produto="Feijoada" valor="35.90"/>
                    </div>
                </div>
            </div>

            <div className='produto'>
                
                <div className='imagem_produto'>
                    <img src="http://www.investimentosenoticias.com.br/media/k2/items/cache/bc69d05925d32b49c9fd9a7159be5a42_XL.jpg"></img>
                </div>

                <div className="desricao_produto">
                    <div className="content_descricao">
                        <h1 className="titulo">Bife com fritas</h1>
                        <p className="descricao">Maravilhoso bife de filet-mignon acompanhando: Arroz, fritas, salada de alface com tomate</p>
                        <ModalCompra produto="Bife com fritas" valor="20.90"/>
                        
                    </div>
                </div>
            </div>

            <div className='produto'>
                
                <div className='imagem_produto'>
                    <img src="https://cdn.octoshop.com.br/lojas/clubfitlife/uploads_produto/file-de-frango-grelhado-com-arroz-branco-feijao-e-pure-de-batatas-60f9d668cb21f.jpg"></img>
                </div>

                <div className="desricao_produto">
                    <div className="content_descricao">
                        <h1 className="titulo">Peito de Frango com Purê</h1>
                        <p className="descricao">Macio peito de frango acomphando: Arroz com brócolis, purê de batata e feijão</p>
                        <ModalCompra produto="Peito de Frango com Purê" valor="20.90"/>
                    </div>
                </div>
            </div>

        </div>
    )
}