import './style.css';
import { useState, useEffect} from 'react';


function Saudacao(){
    const [saudacao, setSaudacao] = useState("");

    useEffect(()=> {
        const atualizarSaudacao = () => {

        const hora = new Date().getHours();

        if(hora >= 5 && hora < 12){
            setSaudacao("Bom dia!");
        } else if (hora >= 12 && hora < 18){
            setSaudacao("Boa tarde!");
        } else {
            setSaudacao("Boa noite!");
        }
        };

        atualizarSaudacao();
        const intervalo = setInterval(atualizarSaudacao, 3600000);
        return () => clearInterval(intervalo);

    }, []);

    return(
        <p className='saudacao_texto'> {saudacao} </p>

    )
};

export default Saudacao;

