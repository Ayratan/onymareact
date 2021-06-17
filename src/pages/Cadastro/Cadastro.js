import React from 'react'
import { useParams } from 'react-router-dom';
import CadastroFormulario from '../../components/Cadastro/Form/Formulario';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';  
import './Cadastro.css';
import { Link } from 'react-router-dom';

const PagesCadastro = () => {
    const{ id }  = useParams();
 return (
     <div>
         <header>
            <Header  texto="Cadastro de Clínicas"/>
        </header>
        <Link to="/">Visualizar Clínicas</Link>
        <content>
            <CadastroFormulario id={id ? Number.parseInt(id,10) : null} />
        </content>
        <footer>
            <Footer/>
        </footer>
    </div>
 )
   
;
}
export  default PagesCadastro;