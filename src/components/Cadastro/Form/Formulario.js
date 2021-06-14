import React, {useState} from "react"
import './Formulario.css'

const initialValue = {
    nome: '',
    endereço: '',
    cep: '',
    email: '',
    whatsapp: '',
    exclin: false,
    excomp: false,
    PPRA: false,
    PCMSO: false,
}
const CadastroFormulario = () => {
    const [values,setValues] = useState(initialValue);
    
function onSubmit(ev){
    ev.preventDefault();
}  

function onChange(ev) {
        const {name, value} = ev.target;
    
        setValues({...values, [name]: value})
    }

    return (
      
       //     "id" : 1,
     //      "nome": "EHS Soluções Inteligentes",
       //     "endereço": "Rua Barão do Triunfo,612/ CJ901",
       //    "cep": "04602-002",
       //     "email": "contato@ehsss.com.br",
      //     "whatsapp": "(11) 93477-9755",
       //       "exclin": true,
       //      "excomp" : true,
        //      "PPRA" : true,
        //     "PCMSO" : true,
         


        <div>
            <h1>Cadastro Clinicas</h1>
            <h2>Nova Clínica</h2>


            <form onSubmit={onSubmit}>
                <div className="cadastro-formulario__grupo">
                    <label htmlFor="nome">Nome </label>
                    <input id="nome" name="nome" onChange={onChange} ></input>
                    <label htmlFor="endereço">Endereço </label>
                    <input id="endereço" name="endereço" onChange={onChange}></input>
                    <label htmlFor="cep" >CEP </label>
                    <input id="cep" name="cep" onChange={onChange}></input>
                    <label htmlFor="email">Email </label>
                    <input type="email" id="email" name="email"onChange={onChange} ></input>
                    <label htmlFor="whatsapp">Whatsapp </label>
                    <input id="whatsapp" name="whatsapp" onChange={onChange}></input>
                    <div className="cadastro-formulario__exames">
                        Exame Clínico
                        <label htmlFor="exclin"></label>
                        <input type="radio" value="" name="exclins"onChange={onChange}></input> 
                    </div>
                    <div>
                        <button type="submit">Cadastrar Clínica</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}
export default CadastroFormulario