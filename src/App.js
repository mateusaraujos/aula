import logo from './logo.svg';
import GithubImage from './github-mark.png'
import './App.css';

function App() {
  return (
    <div className='container text-center'>

      <h1 className='py-5 text-uppercase'>Github Profile</h1>

      <form>
        <div className='form-group'>

          <div className='input-group'>
            <input 
             type="text" 
             className='form-control' 
             required
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
        <img 
         src={GithubImage} 
         className='responsive rounded-circle' 
         height="200px"
         alt="" 
        />

        <h2>
          <a className='text-decoration-none' href='https://github.com/mateusaraujos' target='_new'>
            Mateus Araújo
          </a>
        </h2>

        <h3>Alagoas, Brazil</h3>
        <p>
          <a className='text-decoration-none text-info' href='https://www.linkedin.com/in/mateusaraujos/' target='_new'>https://MeuLinkedIn.dev</a>
        </p>
      </div>

    </div>
  );
}

export default App;
