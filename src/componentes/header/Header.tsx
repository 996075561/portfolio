import './Header.css'
export default function Header(){
  return(
   
    <header>
            <div className="logo">
              <img src="logo.png" alt="" />
            </div>
            
           <nav>
           <ul>
           
            <li><a href='#'>SOBRE</a></li>
            <li><a href='#'>CONTATO</a></li>
            <li><a href='#'>MAIS</a></li>
           </ul>
           </nav>
        </header>
  )
}
 