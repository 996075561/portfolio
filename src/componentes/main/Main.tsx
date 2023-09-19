import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Main.css'
type ProjetosType = {
    id: number,
    nome:string,
    cargaHoraria:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const projetos:ProjetosType[] = [
        {
            id:1,
            nome:"Inclusao digital",
            cargaHoraria:"300 Horas",
            imagem:"/curso.jpg"
        },
        {
            id:2,
            nome:"Investigação do método de Integração de Monte Carlo para dados discreto",
            cargaHoraria:"250 Horas",
            imagem:"/curso.jpg"
        },
        {
            id:3,
            nome:"Crescendo em Tempo de Crise - Tigres Asiáticos",
            cargaHoraria:"180 Horas",
            imagem:"/curso.jpg"
        }

    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p>Buscar Projetos</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {projetos.filter((projeto)=>projeto.nome.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetosType)=>
                    <Projeto key={projeto.id} 
                           nome={projeto.nome} 
                           descricao={projeto.cargaHoraria} 
                           imagem={projeto.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}

// export default function Main () {

//     return(
//         <main>

//             <div className='quadrado'>
//            <div className='eu'>
//            <img src="eu.png"/> 
//             </div>
//             </div>
//         </main>
//     )
// }
