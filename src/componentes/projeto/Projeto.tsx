
 import './Projeto.css'

type ProjetoProps={
    nome:string,
    descricao:string,
    imagem:string
}

export default function Projeto(props:ProjetoProps){
    return(
        <div className="projeto_content">
            <div className="foto_projeto">
                <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.nome}</h1>
                <p className="descricao">
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}