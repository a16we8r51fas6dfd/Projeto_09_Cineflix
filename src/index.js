import ReactDOM from 'react-dom'
import "./css/reset.css"
import "./css/style.css"
import SelecaoFilme from './SelecaoFilme'
import SelecaoHorario from './SelecaoHorario'
import SelecaoAssentos from './SelecaoAssentos'
import Sucesso from './Sucesso'

function App() {
    return(
        <>
            <Sucesso />
        </>
    )
}


ReactDOM.render(<App/>, document.querySelector('.root'))