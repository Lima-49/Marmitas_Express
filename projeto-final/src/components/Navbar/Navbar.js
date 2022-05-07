import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to='/'> Início </Link></li>
                <li><Link to='/cardapio'> Cardapio </Link></li>
                <li><Link to='/cadastro'> Cadastro </Link></li>
            </ul>
        </nav>
    )
}