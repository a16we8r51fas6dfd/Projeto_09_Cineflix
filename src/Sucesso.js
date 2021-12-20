import './Sucesso.css'
import { useNavigate } from 'react-router-dom'

export default function Sucesso({dados, setDados}) {
    const cpf = dados.data.cpf.split('')
    const cpfString = `${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]} - ${cpf[9]}${cpf[10]}`
    const navigate = useNavigate()

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
                <strong onClick={() => (console.log(dados))}>Ingressos</strong>
                {dados.numeroAssento.map(assento => 
                    <p key={assento} >Assento {assento}</p>    
                )}
            </div>

            <div className="mensagem-info">
                <strong>Comprador</strong>
                <p>Nome: {dados.data.nome}</p>
                <p>CPF: {cpfString}</p>
            </div>

            <div className="voltar-home">
                <button onClick={() => navigate('/')}>Voltar para Home</button>
            </div>
        </>
    )
}