import './style.css';
import historico from '../assets/historico.png';

function Historico(){
    return(
         <div className='container'>
                    <a href='#' className='historico-container'>
                        <img src={historico} alt='Histórico' className='historico-imagem' /> 
                        <p className='historico-texto'> Histórico</p>
                    </a>
                </div>
    )
};

export default Historico;