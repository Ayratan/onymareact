import React from "react"
import './App.css';
import ClinicasEstrutura from "./components/Clinicas/Estrutura";


const App = () =>{

  const clinica = [{
    "id" : 1,
    "nome": "EHS Soluções Inteligentes",
    "endereço": "Rua Barão do Triunfo,612/ CJ901",
    "cep": "04602-002",
    "email": "contato@ehsss.com.br",
    "whatsapp": "(11) 93477-9755",
      "exclin": true,
      "excomp" : true,
      "PPRA" : true,
      "PCMSO" : true,
 },
{
  "id" : 2,
  "nome": "SA ASSESSORIA",
  "endereço": "Rua Joaquim Guarani,105",
  "cep": "04707-060",
  "email": "selma@saassessoria.com.br",
  "whatsapp": "(11) 95182-8221",
    "exclin": true,
    "excomp" : false,
    "PPRA" : false,
    "PCMSO" : true,
},
{
  "id" : 3,
  "nome" : "GEREMED SAUDE E SEGURANCA OCUPACIONAL",
  "endereço" : "Rua do Estilo Barroco, 452",
  "cep" : "04709-011",
  "email" : "nubia@geremed.com.br" ,
  "whatsapp" : "(11) 95536-9651",
  "exclin" : true,
  "excomp": false,
  "PPRA" : true,
  "PCMSO" : true,
},
{
  "id" : 4,
  "nome" : "CEMIP SAUDE",
  "endereço" : "AV. ADOLFO PINHEIRO, 2464 / 3º ANDAR SALA 31",
  "cep" : "04734-902",
  "email" : "cemip@cemip.com.br" ,
  "whatsapp" : "(11) 95521-1900",
  "exclin" : true,
  "excomp": true,
  "PPRA" : false,
  "PCMSO" : false,
},
{
  "id" : 5,
  "nome" : "OCUPACIONAL SS SAÚDE E SEGURANÇA DO TRABALHO",
  "endereço" : "Rua Francisco Romeiro Sobrinho, 141",
  "cep" : "04710-180",
  "email" : "cleiton@ocupacionalss.com.br" ,
  "whatsapp" : "(11) 95181-0102",
  "exclin" : true,
  "excomp": true,
  "PPRA" : true,
  "PCMSO" : true,
},
{
  "id" : 6,
  "nome" : "GBEN - GESTAO DE BENEFICIOS OCUPACIONAIS",
  "endereço" : "Rua Enxovia, 472 / Conj 2009",
  "cep" : "04711-030",
  "email" : "VANESSA@GBEN.COM.BR" ,
  "whatsapp" : "(11) 92776-2700",
  "exclin" : true,
  "excomp": true,
  "PPRA" : true,
  "PCMSO" : true,
},
{
  "id" : 7,
  "nome" : "GRUPO MORATTI",
  "endereço" : "Rua Francisco de Morais, 219",
  "cep" : "04714-010",
  "email" : "" ,
  "whatsapp" : "(11) 93567-8031",
  "exclin" : true,
  "excomp": false,
  "PPRA" : false,
  "PCMSO" : false,
},
{
  "id" : 8,
  "nome" : "HEALTH MANAGER",
  "endereço" : "Rua Indiana, 1148 / Conj 02",
  "cep" : "04562-002",
  "email" : "comercial1@healthmanager.com.br" ,
  "whatsapp" : "(11) 95091-7416",
  "exclin" : true,
  "excomp": true,
  "PPRA" : true,
  "PCMSO" : true,
},
{
  "id" : 9,
  "nome" : "S&MED CONSULTORIA E GESTAO DE SSO",
  "endereço" : "Avenida Engenheiro Luiz Carlos Berrini, 1140",
  "cep" : "04571-000",
  "email" : "CONTATO@SMEDGESTAO.COM.BR" ,
  "whatsapp" : "(11) 94280-8636",
  "exclin" : true,
  "excomp": false,
  "PPRA" : false,
  "PCMSO" : false,
},
{
  "id" : 10,
  "nome" : "MANTRIS",
  "endereço" : "Avenida das Nações Unidas, 11633 / 7º Andar",
  "cep" : "04578-000",
  "email" : "credenciamento@mantris.com.br" ,
  "whatsapp" : "(11) 92141-8000",
  "exclin" : true,
  "excomp": false,
  "PPRA" : true,
  "PCMSO" : true,
}]



  return (
    <div className="App" 
    style={{
        maxWidth: 1000,
        margin: '30px auto',
    }}
    >
      <ClinicasEstrutura clinica={clinica[0]}/>
      <ClinicasEstrutura clinica={clinica[1]}/>
      <ClinicasEstrutura clinica={clinica[2]}/>
      <ClinicasEstrutura clinica={clinica[3]}/>
      <ClinicasEstrutura clinica={clinica[4]}/>
      <ClinicasEstrutura clinica={clinica[5]}/>
      <ClinicasEstrutura clinica={clinica[6]}/>
      <ClinicasEstrutura clinica={clinica[7]}/>
      <ClinicasEstrutura clinica={clinica[8]}/>
      <ClinicasEstrutura clinica={clinica[9]}/>
      

    </div>
  );
}

export default App;
