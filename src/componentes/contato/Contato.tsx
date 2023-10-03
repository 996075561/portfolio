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
</main>
  );
}
export default Contato