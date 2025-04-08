import './style.css';
import saque from '../assets/saque.png';

function Saque(){
    return(
        
        <div className='container'>
            <a href='#' className='saque-container'>
                <img src={saque} alt='Saque' className='saque-imagem' /> 
                <p className='saque-texto'> Saque</p>
            </a>
        </div>
    )

    
};

export default Saque;