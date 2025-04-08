import './style.css';
import transferencia from '../assets/transferencia.png';

function Transferencia(){
    return(
         <div className='container'>
                    <a href='#' className='transferencia-container'>
                        <img src={transferencia} alt='Transferencia' className='transferencia-imagem' /> 
                        <p className='transferencia-texto'> Transferência</p>
                    </a>
                </div>
    )
};

export default Transferencia;