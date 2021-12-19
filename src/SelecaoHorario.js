import { useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'

import './SelecaoHorario.css'

export default function SelecaoFilme() {
    const [sessoes, setSessoes] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`)

        requisicao.then(resposta => {
            setSessoes(resposta.data.days)
        })
    }, [])

    if(sessoes === null) {
        return(
            <h1>carregando mais ainda, muito carregamento mesmos</h1>
        )
    }

    return(
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>

            <div className="mensagem-topo">
                <h2>Selecione o horário</h2>
            </div>

            {sessoes.map((sessao) => 
                <div className="sessao">
                    <p>{sessao.weekday} - {sessao.date}</p>
                    {sessao.showtimes.map((horario) => 
                        <button>{horario.name}</button>
                    )}
                </div>
            )}
        </>
    )
}