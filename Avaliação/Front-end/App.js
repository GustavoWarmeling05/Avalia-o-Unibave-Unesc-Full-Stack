import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const filme = {
    id: 0,
    nome: '',
    genero: '',
    ano: ''
  }

  const [btnSalvar, setBtnSalvar] = useState(true);
  const [filmes, setFilmes] = useState([])
  const [objetoFilme, setObjetoFilme] = useState(filme);

  useEffect(() => {
    fetch("http://localhost:8080/filmes/listar")
      .then(resposta => resposta.json())
      .then(resposta_conversao => setFilmes(resposta_conversao))
  })

  const insereDados = (e) => {
    setObjetoFilme({ ...objetoFilme, [e.target.name]: e.target.value });
  }

  /* CADASTRA O FILME */
  const cadastrar = () => {
    fetch("http://localhost:8080/filmes/cadastrar", {
      method: 'post',
      body: JSON.stringify(objetoFilme),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'

      }
    })
      .then(resposta => resposta.json())
      .then(resposta_conversao => {
        alert('Filme cadastrado com sucesso!');
        setFilmes([...filmes, resposta_conversao]);
        limpaFormulario();
      })

  }

  /* ALTERA O FILME */
  const alterar = (id) => {
  setObjetoFilme(filmes[id]);
  }

  /* REMOVE O FILME */
  const remover = (indice, id) => {
    fetch("http://localhost:8080/filmes/remover/" + id, {
      method: 'delete',
    })
      .then(resposta_conversao => {
        alert('Filme excluido com sucesso!');

        let vetorCopia = [...filmes];

        let indice = vetorCopia.findIndex((p) => {
          return p.id === objetoFilme.id;
        })
        vetorCopia.splice(indice, 1);
        setFilmes(vetorCopia)
        limpaFormulario();
      })
  }

  /* LIMPA OS CAMPOS DO FORMULARIO */
  const limpaFormulario = () => {
    setObjetoFilme(filme);
    setBtnSalvar(true)
  }

  const cadastroValido = () => {
    let nome = document.getElementById('idnome').value;
    let genero = document.getElementById('idgenero').value;
    let ano = document.getElementById('idano').value;

    if (nome === '' || genero === '' || ano === '') {
      alert('Preencha todos os campos!')
    }
    return true;
  }

  return (
    <div className='App'>
      <div className='esquerda'>
        <h1>Cadastrar um novo filme</h1>

        <Formulario
          eventoInsere={insereDados}
          cadastrar={cadastrar}
          objeto={objetoFilme}
          cancelar={limpaFormulario}

        />
      </div>

      <div className='direita'>
        <label id='buscanome'>Busca nome:</label>
        <input type="search" />

        <Tabela
          lista={filmes}
          alterar={alterar}
          remover={remover}
        />
      </div>
    </div>
  )
}

export default App;
