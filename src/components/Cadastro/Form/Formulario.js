import React, {useState} from "react"
import './Formulario.css'
import axios from 'axios'
import { useHistory } from "react-router"

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
    const history = useHistory();

    
function onSubmit(ev){
    ev.preventDefault();

    axios.post('http://localhost:5000/clinicas', values)
    .then((response) => {
     history.push('/');
    })
}  

function onChange(ev) {
        const {name, value} = ev.target;
    
        setValues({...values, [name]: value})
    }
    console.log(values)

    return (
      
        <div className="pagina_formulario">
           
            <form onSubmit={onSubmit}>
                <div className="cadastro-formulario__grupo">
                    <h1>Nova Clínica</h1>
                    <label htmlFor="nome">Nome </label>
                    <input id="nome" name="nome" onChange={onChange} required='true' ></input>
                    <label htmlFor="endereço">Endereço </label>
                    <input id="endereço" name="endereço" onChange={onChange} required='true'></input>
                    <label htmlFor="cep" >CEP </label>
                    <input id="cep" name="cep" onChange={onChange} required='true'></input>
                    <label htmlFor="email">Email </label>
                    <input type="email" id="email" name="email"onChange={onChange} required='true' ></input>
                    <label htmlFor="whatsapp">Whatsapp </label>
                    <input id="whatsapp" name="whatsapp" onChange={onChange} required='true'></input>

                    <div className="cadastro-formulario__radios">
                    <label>Exame Clínicos: </label>
                    <label htmlFor="exclin"><input type="radio"id="exclin" name="exclin" value="true" onChange={onChange}></input>Sim</label>
                    <label htmlFor="exclin"><input type="radio"id="exclin" name="exclin" value="false" onChange={onChange}></input>Não</label>
                    </div>

                    <div className="cadastro-formulario__radios">
                    <label>Exame Complementar: </label>
                    <label htmlFor="excomp"><input type="radio"id="excomp" name="excomp" value="true" onChange={onChange}></input>Sim</label>
                    <label htmlFor="excomp"><input type="radio"id="excomp" name="excomp" value="false" onChange={onChange}></input>Não</label>
                    </div>
                    <div className="cadastro-formulario__radios">
                    <label>PPRA: </label>
                    <label htmlFor="PPRA"> <input type="radio"id="PPRA" name="PPRA" value="true" onChange={onChange}></input>Sim</label>
                    <label htmlFor="PPRA"><input type="radio"id="PPRA" name="PPRA" value="false" onChange={onChange}></input>Não</label>
                    </div>
                    <div className="cadastro-formulario__radios">
                    <label>PCMSO: </label>
                    <label htmlFor="PCMSO"> <input type="radio"id="PCMSO" name="PCMSO" value="true" onChange={onChange}></input>Sim</label>
                    <label htmlFor="PCMSO"><input type="radio"id="PCMSO" name="PCMSO" value="false" onChange={onChange}></input>Não</label>
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