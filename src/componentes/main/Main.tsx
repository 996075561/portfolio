
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
            cargaHoraria:"Carga Horária:300Hrs",
            imagem:"/inclusao.png"
        },
        {
            id:2,
            nome:"Crescendo em Tempo de Crise - Tigres Asiáticos",
            cargaHoraria:"Carga Horária:250Hrs",
            imagem:"/fecinavi.png"
        },
        {
            id:3,
            nome:"Xadrez",
            cargaHoraria:"Carga Horária:180Hrs",
            imagem:"/xadrez.png"
        },
        {
            id:4,
            nome:"PodCast: Pode isso no IF?",
            cargaHoraria:"Carga Horária:Em andamento",
            imagem:"/podcast.png"
        },
        {
            id:5,
            nome:"Foto preferida",
            cargaHoraria:"Viagem para Foz do Iguaçu",
            imagem:"/viagem.png"
        },
        {
            id:6,
            nome:"Hobby",
            cargaHoraria:"Sinuca",
            imagem:"/sinuca.png"
        },
        {
            id:7,
            nome:"Hobby",
            cargaHoraria:"Pescaria",
            imagem:"/pescaria.png"
        },
        {
            id:8,
            nome:"Dogs",
            cargaHoraria:"Ayla e Kyara",
            imagem:"/Dog.png"
        },
        {
            id:9,
            nome:"Relacionamento",
            cargaHoraria:"3 anos",
            imagem:"/namorado.png"
        },
        {
            id:10,
            nome:"Sonho realizado",
            cargaHoraria:"Primeira moto 0Km",
            imagem:"moto.png"
        },
        {
            id:11,
            nome:"Familia",
            cargaHoraria:"Mãe e Pai",
            imagem:"familia.png"
        },
        {
            id:12,
            nome:"Série preferida",
            cargaHoraria:"The Wither",
            imagem:"/serie.png"
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
                
                <p>BUSCAR SOBRE LUANA:</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    {/* <p className='texto_digitado'>{texto}</p> */}
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
