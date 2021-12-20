import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './SelecaoFilme.css'

export default function SelecaoFilme({setDados}) {
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

    function handleDados(filme, poster) {
        const dadosObjeto = {titulo: filme, poster: poster}

        setDados(dadosObjeto)
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
                    <Link onClick={() => handleDados(filme.title, filme.posterURL)} key={filme.id} to={`sessoes/${filme.id}`} className="filme">
                        <img  src={filme.posterURL} alt={filme.title} />
                    </Link>
                )}
            </div>
        </>
    )
}