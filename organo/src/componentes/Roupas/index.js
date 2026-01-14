import './Roupas.css'

const Roupas = (props) => {

    const tipo = props.tipo?.trim().toLowerCase();
    const cor = props.cor?.trim().toLowerCase();

const imagens = {
    camiseta: {
        branca: "/imagens/camisaBranca.png",
        preta: "/imagens/camisaPreta.png"
    },
    bone: {
        preto: "/imagens/bonePreto.webp",
        branco: "/imagens/boneBranco.jfif"
    },
    calça: {
        branca: "/imagens/calcaBranca.jpg",
        preta: "/imagens/calcaPreta.webp"
    }
};

const imagem = imagens[tipo]?.[cor] || "/imagens/default.png";

    return (
        <div className="roupas">

            <div className="cabecalho">
                <img src={imagem} alt={props.nome} />
            </div>

            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.tamanho}</h5>
            </div>

        </div>
        
    )
}

export default Roupas
