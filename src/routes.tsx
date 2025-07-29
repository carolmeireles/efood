import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Prato from './Pages/Prato'

const Rotas = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prato' element={<Prato />} />
    </Routes>
)

export default Rotas