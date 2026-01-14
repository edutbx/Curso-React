import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Colecao from './componentes/Colecao';
import Rodape from './componentes/Rodape';


function App() {

 const colecoes = [
  {
    nome: 'Verão 2025',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Verão 2024',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Inverno 2015',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Primavera 2018',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5'
  },
  {
    nome: 'Outono 2020',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Natal 2025',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  },
  {
    nome: 'Ano novo - edição especial',
    corPrimaria: '#82CFFA', 
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Coleção All Black',
    corPrimaria: "#837d7dff",
    corSecundaria: '#adacacff'
  }
]

  const [roupas, setRoupas] = useState([])
  
  const novaRoupaAdicionada = (roupa) => {
    console.log(roupa)
    setRoupas([...roupas, roupa])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario colecoes={colecoes.map(colecao => colecao.nome)} roupaCadastrada = {roupa => novaRoupaAdicionada(roupa)} />  

      {colecoes.map(colecao => 
      <Colecao 
      key={colecao.nome} 
      nome = {colecao.nome}
      corPrimaria={colecao.corPrimaria} 
      corSecundaria = {colecao.corSecundaria} 
      roupas = {roupas.filter(roupas => roupas.colecao === colecao.nome)}
      />)}
    <Rodape />
    </div>
  );
}

export default App;
