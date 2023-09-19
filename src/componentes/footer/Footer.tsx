import './Footer.css'
export default function Footer() {
  return (
    <footer>

      <div id="page-container">
        <div id="content-wrap">
        </div>
            

        <footer id="footer">
        <div className='quadrado'>
           <img src="eu.png"/> 
            </div>
          <div id='quem'>
           <p className='letra'>QUEM SOU EU?</p>
            <p>Meu nome é Luana Trindade</p>
            <p>Nascida no dia 28/04/2005</p>
            <p>Filha da Luciene Bento e Luciano Trindade</p>
            <p>Filha unica</p>
           
          </div>


          <div id='meta'>
           <p className='letra'>META</p>
            <p>Formar em Designer Web</p>
            <p>Morar em Campo Grande-MS ou Maringa-PR</p>
            <p>Casar</p>
            <p>Conhecer o Mexico e a Noruega</p>
          </div>

          <div id='lema'>
           <p className='letra'>LEMA</p>
            <p>O que for pra ser, será no tempo certo</p>
          
          </div>
         
        </footer>
      </div>
    </footer>
  )
}
