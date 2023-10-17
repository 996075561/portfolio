import './Contato.css'
import { useState } from "react";


function Contato(){

  const [nome,setNome] = useState("")
  function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setNome(e.target.value)
}
  const [telefone,setTelefone] = useState("")
  function mudaTelefone(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setTelefone(e.target.value)
}
  const [email,setEmail] = useState("")
  function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setEmail(e.target.value)
}
  const [assunto,setAssunto] = useState("")
  function mudaAssunto(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setAssunto(e.target.value)
}
    return(

<main className='contato'>   
  <div>
    <form name="contato-container">

        <h5>ENTRE EM CONTATO</h5>
        <label className="nome">NOME</label>
        <input type="text" id="nomeid" placeholder="Ex:Luana" name="nome" onChange={mudaNome}/>
       
        <label className="fone">TELEFONE</label>
        <input type="tel" id="foneid" placeholder="(xx)xxxx-xxxx" name="fone" onChange={mudaTelefone}/>
        
        <label className="email">EMAIL</label>
        <input type="email" id="emailid" placeholder="fulano@email.com" name="email" onChange={mudaEmail}/>
      
        <label className="email">ASSUNTO</label>
        <input type="assunto" id="assuntoid" placeholder="Assunto" name="assunto" onChange={mudaAssunto}/>
       
        <input type="submit" className="enviar"/>
    </form> 
  </div>
              <div className="pesquisas">
              <div>
                    <p>TEXTO DIGITADO</p>
                </div>
                <div>
                    <p className='texto_digitado'>NOME:{nome}</p>
                    <p ></p>
                </div>
               
                <div>
                    <p className='texto_digitado'>TELEFONE: {telefone}</p>
                    <p ></p>
                </div>
                <div>
                    <p className='texto_digitado'>EMAIL: {email}</p>
                    <p ></p>
                </div>
                <div>
                    <p className='texto_digitado'>ASSUNTO: {assunto}</p>
                    <p ></p>
                </div>
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