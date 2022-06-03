import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/imagens/lambreta.png'
import UserPKT from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/imagens/usr.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal} from 'react-bootstrap';
import 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/components/Navbar/index.css'
import ModalLogin from 'C:/Users/Vitor Augusto/Documents/Programas/Faculdade/Desenvolvimento Web/Marmitas_Express/projeto-final/src/components/Modal/Modal.js'

export default function Navbar() {

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
