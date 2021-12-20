import { useState, useEffect } from 'react'
import { /* Link, */ useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import './SelecaoAssentos.css'

export default function SelecaoAssentos({ dados, setDados }) {
    const [assentos, setAssentos] = useState(null)
    const [assentosSelecionados, setAssentosSelecionados] = useState([])
    const { id } = useParams()
    const [comprador, setComprador] = useState('')
    const [cpf, setCpf] = useState('')
    const [assentoNome, setAssentoNome] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${id}/seats`)

        requisicao.then(resposta => {
            setAssentos(resposta.data.seats)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            setAssentoNome([...assentoNome, assento.name])
            console.log(assentosSelecionados)
        } else if (assentosSelecionados.includes(assento.id)) {
            const novosAssentos = assentosSelecionados.filter(assentinho => assentinho !== assento.id)
            setAssentosSelecionados(novosAssentos)
            const novosNomes = assentoNome.filter(assentinho => assentinho != assento.name)
            setAssentoNome(novosNomes)
        } else if (assento.isAvailable === false) {
            alert('Esse assento não está disponível')
        }
    }

    function enviarDados(cpf, comprador, assentosSelecionados, assentoNome) {
        let data = {
            ids: assentosSelecionados,
            nome: comprador,
            cpf: cpf
        }

        setDados({...dados, data, numeroAssento: assentoNome})
            
        const post = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", data)

        post.then(() => navigate('/sucesso'))
        post.catch(() => console.log(data, dados))
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
                    <div key={assento.id} onClick={() => selecionarAssento(assento)} className={`assento ${condicaoAssento(assento)}`}>
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
                <input type="text" placeholder='Digite seu nome...' value={comprador} onChange={event => setComprador(event.target.value)}/>
            </div>

            <div className="input-titulo">
                <p>CPF do comprador:</p>
                <input type="text" placeholder='Digite seu CPF...' value={cpf} onChange={event => setCpf(event.target.value)}/>
            </div>

            <div className="reservar">
                <button onClick={() => enviarDados(cpf, comprador, assentosSelecionados, assentoNome)}>Reservar assento(s)</button>
            </div>

            <div className="filme-selecionado">
                <div className='filme-selecionado-miniatura'><img src={dados.poster} alt={dados.titulo} /></div>
                <p>{dados.titulo} <br />{dados.diaSemana} {dados.horario}</p>
            </div>
        </>
    )
}