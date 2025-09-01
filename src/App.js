import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Habilidades from './components/habilidades/Habilidades';
import Servicos from './components/serviços/Servicos';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scollup/ScrollUp';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
    <Home />
    <Sobre />
    <Habilidades />
    <Servicos />
    <Contato />
    </main>
    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
