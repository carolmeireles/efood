import { Header, Logo, Slogan } from './styles'
import logo from '../../assets/logo.png'
import fundo from '../../assets/fundo.png'

const Hero = () => (
    <Header style={{ backgroundImage: `url(${fundo})` }}>
        <div className="container">
            <Logo>
                <img src={logo} alt="efood" />
            </Logo>
            <div>
                <Slogan>
                    Viva experiências gastronômicas no conforto da sua casa
                </Slogan>
            </div>
        </div>
    </Header>
)

export default Hero