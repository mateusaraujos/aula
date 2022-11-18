import GithubImage from './github-mark.png'
import './App.css';
import { useState } from 'react';

function App() {

  // Estado interno. [valorDoEstado, setValorNoEstado]
  const [search, setSearch] = useState(''); // Controlar o estdo do input.
  const [userData, setUserData] = useState(); // Controlar o estado dos dados.

  // Manipular o formulário quando apertar no botão Search.
  const handleSubmit = (event) => {
    event.preventDefault(); // Eliminando o refresh da página ao dar submit.

    // Buscar, como se fosse um client HTTP nativo do JavaScript.
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json()) // Pega a resposta da api e transforma em JSON.
      .then(userResponse => setUserData(userResponse));
  }

  // Para o input não ficar readOnly, por causa do value.
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className='container text-center'>

      <h1 className='py-5 text-uppercase'>Github Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>

          <div className='input-group'>
            <input 
             type="text" 
             className='form-control' 
             required
             value={search}
             onChange={handleChange}
            />

            <span className='input-group-btn'>
              <button type='submit' className='btn btn-success'>
                Search
              </button>
            </span>
          </div>

        </div>
      </form>

      <div className='py-5'>
        {!userData && (
          <img 
            src={GithubImage} 
            className='responsive rounded-circle' 
            height="200px"
            alt="" 
          />
        )}

        {userData && (
          <div>
            <img 
              src={userData.avatar_url} 
              className='responsive rounded-circle' 
              height="200px"
              alt="" 
            />

            <h2 className='pt-4'>
              <a className='text-decoration-none' href={userData.html_url} target='_new'>
                {userData.name}
              </a>
            </h2>

            <h3>{userData.location}</h3>
            <p className='container-fluid'>
              <a className='text-decoration-none text-info' href={userData.blog} target='_new'>
                {userData.blog}
              </a>
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
