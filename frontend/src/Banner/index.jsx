import './style.css';
import banner from '../assets/banner.png';
import ocultar from '../assets/ocultar.png';
import { useState } from 'react';

function Banner(){
    const [ocultarSaldo, setOcultar] = useState(true);

        const alternarSaldo = () => {
            setOcultar(!ocultarSaldo);
    };

    return(
        
        <div className="banner-container">
            <img src={banner} className='banner-img' alt='Imagem do Jbanking' />
                <div className="saldo-info">
                    <p className="saldo-titulo">Saldo</p>

                    <p className="saldo-valor">
                        {ocultarSaldo ? "R$3000" : " R$ * * * *"}

                    <a href='#' className='icone-ocultar-botao' onClick={alternarSaldo}>
                        <img 
                        src={ocultar} alt='Olho para ocultar ou mostrar saldo' className='icone-ocultar'></img>
                    </a>
                    </p>

                </div>
                 
        </div>
    )
    
};

export default Banner;