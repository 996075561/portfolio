import './Footer.css'
export default function Footer() {
  return (
    <footer>

      <div id="page-container">
        <div id="content-wrap">
        </div>
            

        <footer id="footer">
        <div className='quadrado'>
           <img src="luana.png"/> 
            </div>
          <div id='quem'>
           <p className='letra'>QUEM SOU EU?</p>
            <p>- Nome: Luana da Silva Trindade.</p>
            <p>- Nascida em: Campo Grande-MS</p>
            <p>- Signo: Touro</p>
            <p>- Aniversário: 28/04/2005</p>
            <p>- Filha unica</p>

          </div>


          <div id='meta'>
           <p className='letra'>SONHOS</p>
            <p>- Formar em Estética ou Designer Web</p>
            <p>- Ter meu próprio negócio</p>
            <p>- Conhecer Noruega e México</p>
          </div>

          <div id='lema'>
           <p className='letra'>LEMA</p>
            <p>“A luz que me guia é mais forte que os olhos que me cercam”</p>
          
          </div>
         
        </footer>
      </div>
    </footer>
  )
}
