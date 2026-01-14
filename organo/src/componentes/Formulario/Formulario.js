import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from "../Botao/Botao";

export const Formulario = (props) => {


    const [tipo, setTipo] = useState('')
    const [nome, setNome] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [colecao, setColecao] = useState('')
    const [cor, setCor] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.roupaCadastrada({
            tipo,
            nome,
            tamanho,
            colecao,
            cor
        })
        setTipo('')
        setNome('')
        setTamanho('')
        setColecao('')
        setCor('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos abaixo</h2>
                <CampoTexto obrigatorio={true} label="Tipo de peça"
                    placeholder="Ex: Camiseta, calça, boné"
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />
                <CampoTexto obrigatorio={true} label="Nome da peça" placeholder="Ex: Oversized Essential //Calça New //Boné Type"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true} label="Tamanho" placeholder="Ex: P, M, G, GG // 38, 40, 42"
                    valor={tamanho}
                    aoAlterado={valor => setTamanho(valor)}
                />
                <CampoTexto label="Cor" placeholder="Ex: Preto, branco"
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}
                />
                <ListaSuspensa obrigatorio={true} label="Coleções" itens={props.colecoes}
                    valor={colecao}
                    aoAlterado={valor => setColecao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}