import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import { Container, Disclaimer, SocialLinks } from './styles'
import { Logo } from '../Footer/styles'

const Footer = () => (
    <Container>
        <div className="container">
            <Logo>
                <img src={logo} alt="efood" />
            </Logo>
            <SocialLinks>
                <li>
                    <a href="#">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li className='facebook'>
                    <a href="#">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </li>
            </SocialLinks>
            <Disclaimer>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </Disclaimer>
        </div>
    </Container>
)

export default Footer