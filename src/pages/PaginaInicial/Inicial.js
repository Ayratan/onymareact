import React, {useEffect,useState} from 'react';
import ClinicasEstrutura from '../../components/Clinicas/Estrutura';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Inicial.css'

const PaginaInicial =  () => {
    const [clinicas, setClinicas] =useState([]);
    const [pesquisa,setPesquisa] = useState('');

    useEffect(() => {
    const params = {};
    if(pesquisa){
      params.nome_like = pesquisa;
    }
    axios.get('http://localhost:5000/clinicas', {params})
    .then((response)=> {
      setClinicas(response.data)
    });
    },[pesquisa]);


    return (
    <div>
      <header>
      <Header texto= "Visualizador de Clínicas"/>
      </header>
      <div className="inputs_visualizador">
      <Link to="/cadastro">Cadastrar Nova Clínica</Link>
      <input type="search" 
      className="clinica_pesquisa__input" 
      placeholder="Pesquisar Clínica" 
      value={pesquisa}
      onChange={(ev) => setPesquisa(ev.target.value)}
      />
      </div>
      <div className="espaço-clinicas">
      {clinicas.map((clinica) => (
        <ClinicasEstrutura clinica={clinica} key={clinica.id}/>
      ))}
      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
    )}

export default PaginaInicial;