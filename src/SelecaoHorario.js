import { useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'

import './SelecaoHorario.css'

export default function SelecaoFilme({dados, setDados}) {
    const [sessoes, setSessoes] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`)

        requisicao.then(resposta => {
            setSessoes(resposta.data.days)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(sessoes === null) {
        return(
            <h1>carregando mais ainda, muito carregamento mesmos</h1>
        )
    }

    function handleDados(diaSemana, dia, horario) {
        const dadosObjeto = {...dados, diaSemana: diaSemana, dia: dia, horario: horario}

        setDados(dadosObjeto)
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
                <div key={sessao.id} className="sessao">
                    <p>{sessao.weekday} - {sessao.date}</p>
                    {sessao.showtimes.map((horario) =>
                        <Link key={horario.id} to={`/assentos/${horario.id}`}>
                            <button onClick={() => handleDados(sessao.weekday, sessao.date, horario.name)}>{horario.name}</button>
                        </Link>
                    )}
                </div>
            )}

            <div className="filme-selecionado">
                <div className='filme-selecionado-miniatura'><img src={dados.poster} alt={dados.titulo} /></div>
                <p>{dados.titulo}</p>
            </div>
        </>
    )
}