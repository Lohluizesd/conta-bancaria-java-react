import './style.css';
import deposito from '../assets/deposito.png';

function Deposito(){
    return(
        
        <div className='container'>
            <a href='#' className='deposito-container'>
                <img src={deposito} alt='Depósito' className='deposito-imagem' /> 
                <p className='deposito-texto'> Depósito</p>
            </a>
        </div>
    )

    
};

export default Deposito;