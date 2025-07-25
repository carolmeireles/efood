import Card from '../Card'
import { List } from './styles'

const CardList = () => (
    <div className="container">
        <List>
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
            <li>
                <Card />
            </li>
        </List>
    </div>
)

export default CardList