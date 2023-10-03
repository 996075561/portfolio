import './Contato.css'

function Contato(){
    return(

<main className='contato'>   
  <div>
    <form name="contato-container">

        <h1>ENTRE EM CONTATO</h1>

        <input type="text" id="nomeid" placeholder="fulano" name="nome" />
        <label className="nome">Nome</label>

        <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
        <label className="fone">Fone</label>

        <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" />
        <label className="email">Email</label>

        <input type="submit" className="enviar"/>
    </form> 
  </div>
</main>
  );
}
export default Contato