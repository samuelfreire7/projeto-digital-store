
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Cadastro from './pages/Cadastro'
import HomePage from './pages/HomePage'
import RoutePage from './routes/RoutePage'
import NavLinks from "./components/NavLinks";



function App() {
  return (
    <>
      <Header />
      <NavLinks />
      <RoutePage />
      <Footer />
    </>
  )
}

export default App





