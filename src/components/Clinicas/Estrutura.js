import React from "react";
import './Estrutura.css'

const ClinicasEstrutura = ({clinica}) => (

<div className="estrutura-clinica">
        <span>Clinica</span>
         <div className="estrutura-clinica__info">
        
        
         <p>{clinica.nome}</p>
         <div className="estrutura-clinica_endemail"> 
         <p>{clinica.endereço}</p>
         <p>{clinica.email}</p>
        
         </div>
         </div>
        <div className="estrutura-clinica__exames">
            {(clinica.exclin == true || clinica.exclin =="true") &&(
                <li>Exame Clínico</li>
            )}
            {(clinica.excomp === true || clinica.excomp =="true") &&(
                <li>Exame Complementar</li>
            )}
            {(clinica.PPRA === true || clinica.PPRA == "true") &&(
                <li>PPRA</li>
            )}
            {(clinica.PCMSO === true || clinica.PCMSO == "true") &&(
                <li>PCMSO</li>
            )}
            
           
            
        </div >
        <div className="estrutura_clinica__whats" >
 
           Whatsapp:
        <p >{clinica.whatsapp}</p>
        </div>
          </div>
)

export default ClinicasEstrutura;