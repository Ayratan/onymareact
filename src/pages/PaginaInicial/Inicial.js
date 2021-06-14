import React, {useEffect,useState} from 'react';
import ClinicasEstrutura from '../../components/Clinicas/Estrutura';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';




const PaginaInicial =  () => {
    const [clinicas, setClinicas] =useState([])

    useEffect(() => {
    axios.get('http://localhost:5000/clinicas')
    .then((response)=> {
      setClinicas(response.data)
    });
    },[]);


    return <div>
      <Header texto= "Visualizador de Clínicas"/>
      
      {clinicas.map((clinica) => (
        <ClinicasEstrutura clinica={clinica} key={clinica.id}/>
      ))}
    
      <Footer texto="Fim da Página" />
    </div>
}

export default PaginaInicial;