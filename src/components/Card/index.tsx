import sushi from '../../assets/sushi.png'
import estrela from '../../assets/estrela.png'
import { Button, CardContainer, Desc, Tags, Title, TitleContainer } from './styles'
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
        <TitleContainer>
            <Title>Hioki Sushi</Title>
            <div>
                4.9
                <img src={estrela} alt="Estrela" />
            </div>
        </TitleContainer>
        <Desc>
            Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
        </Desc>
        <Button>Saiba mais</Button>
    </CardContainer>
)

export default Card