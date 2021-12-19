import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './SelecaoFilme.css'

export default function SelecaoFilme() {
    const [filmes, setFilmes] = useState(null)
    
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")

        requisicao.then(resposta => {
            setFilmes(resposta.data)
        })
    }, [])

    if(filmes === null) {
        return(
            <h1>carregando carregando carregando carregando carregando carregando carregando carregando</h1>
        )
    }

    return(
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>

            <div className="mensagem-topo">
                <h2>Selecione o filme</h2>
            </div>

            <div className='filmes'>
                {filmes.map((filme) => 
                    <Link to={`sessoes/${filme.id}`} className="filme">
                        <img onClick={() => console.log(filme.id)} src={filme.posterURL} alt={filme.title} />
                    </Link>
                )}
            </div>
        </>
    )
}