import Cabecalho from './Cabecalho';
import Banner from './Banner';
import Saudacao from './Saudacao';
import Deposito from './Deposito';
import Saque from './Saque';
import Transferencia from './Transferencia';
import Historico from './Historico';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho />
        <Banner />
        <Saudacao />
        
      </header>
      
      <main>
      <Deposito />
      <Saque />
      <Transferencia />
      <Historico />
      </main>

      <footer>
        <Footer />
      </footer>
      
  
    </div>
  );
}

export default App;
