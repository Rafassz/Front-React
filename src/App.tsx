
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div>
      <nav>
        <Link to="/usuarios/Lista"> Usuários</Link>
        <Link to="/usuarios">Criar usuário</Link>
      </nav>
    </div>
  )
}

export default App
