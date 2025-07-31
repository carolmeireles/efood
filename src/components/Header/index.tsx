import { Link } from 'react-router-dom'
import fundo from '../../assets/fundo2.png'
import logo from '../../assets/logo.png'
import { HeaderStyle } from './styles'

const Header = () => (
    <HeaderStyle style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
            <a href="#">
                Restaurantes
            </a>
            <Link to='/'>
                <img src={logo} alt="efood" />
            </Link>
            <Link to='#'>0 produto(s) no carrinho</Link>
        </div>
    </HeaderStyle>
)

export default Header