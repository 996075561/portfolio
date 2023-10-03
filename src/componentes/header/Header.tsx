import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
    return(
    <header>

      <div className="logo">
        <Link to="/"><img src="logo.png" alt="" /></Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/sobre">SOBRE</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
          <li>
            <Link to="/mais">MAIS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header
