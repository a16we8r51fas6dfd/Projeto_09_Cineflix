import { useState, useEffect } from 'react'
import { /* Link, */ useParams } from 'react-router-dom'
import axios from 'axios'

import './SelecaoAssentos.css'

export default function SelecaoAssentos() {
    const [assentos, setAssentos] = useState(null)
    const [assentosSelecionados, setAssentosSelecionados] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)

        requisicao.then(resposta => {
            setAssentos(resposta.data.seats)
        })
    }, [])

    if (assentos === null) {
        return <h1>carregando mais ainda meu deus do ceu so carrega</h1>
    }

    function condicaoAssento(assento) {
        
        if (assentosSelecionados.includes(assento.id)) {
            return 'selecionado'
        } else if(assento.isAvailable === true) {
            return 'disponivel'
        } else if (assento.isAvailable === false) {
            return 'indisponivel'
        } else {
            return
        }
    }

    function selecionarAssento(assento) {
        if (assento.isAvailable === true && assentosSelecionados.includes(assento.id) === false) {
            setAssentosSelecionados([...assentosSelecionados, assento.id])
            console.log(assentosSelecionados)
        } else if (assentosSelecionados.includes(assento.id)) {
            const novosAssentos = assentosSelecionados.filter(assentinho => assentinho !== assento.id)
            setAssentosSelecionados(novosAssentos)
        } else if (assento.isAvailable === false) {
            alert('Esse assento não está disponível')
        }
    }

    return(
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>

            <div className="mensagem-topo">
                <h2>Selecione o(s) assento(s)</h2>
            </div>

            <div className="assentos">                
                {assentos.map(assento =>        
                    <div onClick={() => selecionarAssento(assento)} className={`assento ${condicaoAssento(assento)}`}>
                        {assento.name}
                    </div>
                )}
            </div>

            <div className="legenda-assentos">
                <div className="legenda">
                    <div className="bolinha selecionado"></div>
                    <p>Selecionado</p>
                </div>
                <div className="legenda">
                    <div className="bolinha disponivel"></div>
                    <p>Disponível</p>
                </div>
                <div className="legenda">
                    <div className="bolinha indisponivel"></div>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className="input-titulo">
                <p>Nome do comprador:</p>
                <input type="text" placeholder='Digite seu nome...'/>
            </div>

            <div className="input-titulo">
                <p>CPF do comprador:</p>
                <input type="text" placeholder='Digite seu CPF...'/>
            </div>

            <div className="reservar">
                <button>Reservar assento(s)</button>
            </div>

            <div className="filme-selecionado">
                <div className='filme-selecionado-miniatura'></div>
                <p>Enola Holmes</p>
            </div>
        </>
    )
}