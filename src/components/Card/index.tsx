import massa from '../../assets/massa.png'
import estrela from '../../assets/estrela.png'
import { Button, CardContainer, Desc, Tags, Title, TitleContainer } from './styles'
import Tag from '../Tag'
import { Link } from 'react-router-dom'

const Card = () => (
    <CardContainer>
        <img src={massa} alt="massa" />
        <Tags>
            <Tag>
                Italiana
            </Tag>
        </Tags>
        <TitleContainer>
            <Title>La Dolce Vita Trattoria</Title>
            <div>
                4.6
                <img src={estrela} alt="Estrela" />
            </div>
        </TitleContainer>
        <Desc>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
        </Desc>
        <Link to='/restaurante'>
            <Button>Saiba mais</Button>
        </Link>
    </CardContainer>
)

export default Card