import './SelecaoAssentos.css'

export default function SelecaoAssentos() {
    return(
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>

            <div className="mensagem-topo">
                <h2>Selecione o(s) assento(s)</h2>
            </div>

            <div className="assentos">
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
                <div className="assento">
                    01
                </div>
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