import Hero from "./components/Hero"
import { CssGlobal } from "./styles"
import CardList from "./components/CardList"
import Footer from './components/Footer'

function App() {

  return (
    <>
      <CssGlobal />
      <Hero />
      <CardList />
      <Footer />
    </>
  )
}

export default App
