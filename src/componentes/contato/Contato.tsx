import './Contato.css'

function Contato(){
    return(

<main className='contato'>   
  <div>
    <form name="contato-container">

        <h5>ENTRE EM CONTATO</h5>
        <label className="nome">NOME</label>
        <input type="text" id="nomeid" placeholder="Ex:Luana" name="nome" />
       
        <label className="fone">TELEFONE</label>
        <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
        
        <label className="email">EMAIL</label>
        <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" />
      
        <label className="email">ASSUNTO</label>
        <input type="email" id="emailid" placeholder="Assunto" name="email" />
       
        <input type="submit" className="enviar"/>
    </form> 
  </div>
  <div className='redes'>
    <div>
      <img src="email.png" />
      <p>luana.trindade@estudante.ifms.edu.br</p>
    </div>
    <div>
      <img src="fecebook.png"/> 
      <p>Luana Trindade</p>
    </div>
    <div>
    <img src="whatsapp.png" /> 
    <p>67 996075561</p>
    </div>
    <div>
    <img src="instagram.png"/> 
    <p>@luana_trindade.lua</p>
    </div>
  </div>
</main>
  );
}
export default Contato