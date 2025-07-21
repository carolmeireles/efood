import { Header } from './styles'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'

const Hero = () => (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
        <h1>
            <img src={logo} alt="efood" />
        </h1>
        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </Header>
)

export default Hero