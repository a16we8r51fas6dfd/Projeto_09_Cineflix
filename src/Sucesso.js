import './Sucesso.css'

export default function Sucesso({dados, setDados}) {
    const cpf = dados.data.cpf

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
                <p>{dados.titulo}</p>
                <p>{dados.dia} {dados.horario}</p>
            </div>

            <div className="mensagem-info">
                <strong>Ingressos</strong>
                {dados.numeroAssento.map(assento => 
                    <p key={assento} >Assento {assento}</p>    
                )}
            </div>

            <div className="mensagem-info">
                <strong>Comprador</strong>
                <p>Nome: {dados.data.nome}</p>
                <p>CPF: {dados.data.cpf}</p>
            </div>

            <div className="voltar-home">
                <button onClick={() => console.log(dados)}>Voltar para Home</button>
            </div>
        </>
    )
}