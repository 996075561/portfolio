import './Header.css'
export default function Header(){
  return(
   
    <header>
            <div className="logo">
              <img src="logo.png" alt="" />
            </div>
            
           <nav>
           <ul>
           
            <li><a href='#'>Sobre</a></li>
            <li><a href='#'>Contato</a></li>
            <li><a href='#'>Mais</a></li>
           </ul>
           </nav>
        </header>
  )
}
 