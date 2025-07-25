import sushi from '../../assets/sushi.png'
import estrela from '../../assets/estrela.png'
import { Button, CardContainer, Tags } from './styles'
import Tag from '../Tag'

const Card = () => (
    <CardContainer>
        <img src={sushi} alt="Sushi" />
        <Tags>
            <Tag>
                Destaque da semana
            </Tag>
            <Tag>
                Japonesa
            </Tag>
        </Tags>
        <div>
            <h3>Hioki Sushi</h3>
            <span>
                4.9
                <img src={estrela} alt="Estrela" />
            </span>
        </div>
        <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Button>Saiba mais</Button>
    </CardContainer>
)

export default Card