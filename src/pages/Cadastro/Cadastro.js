import React from 'react'
import { useParams } from 'react-router-dom';
import CadastroFormulario from '../../components/Cadastro/Form/Formulario';


const PagesCadastro = () => {
    const{ id }  = useParams();
 return (
    <div>
        <CadastroFormulario />
    </div>
);
}
export  default PagesCadastro;