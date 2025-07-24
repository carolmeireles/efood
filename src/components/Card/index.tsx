import sushi from '../../assets/sushi.png'
import estrela from '../../assets/estrela.png'
import ButtonTag from '../ButtonTag'

const Card = () => (
    <div>
        <img src={sushi} alt="Sushi" />
        <div>
            <div>
                Destaque da semana
            </div>
            <div>
                Japonesa
            </div>
        </div>
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
        <ButtonTag />
    </div>
)

export default Card