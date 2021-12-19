import './Sucesso.css'

export default function Sucesso() {
    return (
        <>
            <header>
                <h1>CINEFLEX</h1>
            </header>

            <div className="mensagem-topo">
                <p>Pedido feito<br/>com sucesso!</p>
            </div>

            <div className="mensagem-info">
                <strong>Filme e sessão</strong>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>

            <div className="mensagem-info">
                <strong>Ingressos</strong>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>

            <div className="mensagem-info">
                <strong>Comprador</strong>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 999.999.999-09</p>
            </div>

            <div className="voltar-home">
                <button>Voltar para Home</button>
            </div>
        </>
    )
}