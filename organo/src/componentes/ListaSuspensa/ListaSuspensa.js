import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key={item} value={item}>{item}</option>)}
            </select>

            {/* Isso é a mesma coisa que:
            <select>
                {props.itens.map(item => {
                    return <option>{item}</option>
                })}
            </select> */}
        </div>
    )
}

export default ListaSuspensa;
