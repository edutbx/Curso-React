import Roupas from '../Roupas'
import './Colecao.css'

const Colecao = (props) => {
    return (
        (props.roupas.length > 0) ? <section className='colecao' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='lista-roupas'>
                 {props.roupas.map(roupa =>
                <Roupas
                    nome={roupa.nome}
                    tamanho={roupa.tamanho}
                    tipo={roupa.tipo}
                    cor={roupa.cor}
                />
            )
            }
            </div>
           
        </section>
        : ''
    )
}

export default Colecao