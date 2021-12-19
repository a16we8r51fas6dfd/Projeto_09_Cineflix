import './SelecaoHorario.css'

export default function SelecaoFilme() {
    return(
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>

            <div className="mensagem-topo">
                <h2>Selecione o horário</h2>
            </div>

            <div className="sessao">
                <p>quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </div>

            <div className="sessao">
                <p>quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </div>

            <div className="filme-selecionado">
                <div className='filme-selecionado-miniatura'>

                </div>
                <p>Enola Holmes</p>
            </div>
        </>
    )
}