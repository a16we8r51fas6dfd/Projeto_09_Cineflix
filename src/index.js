import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./css/reset.css"
import "./css/style.css"
import SelecaoFilme from './SelecaoFilme'
/* import SelecaoHorario from './SelecaoHorario' */
/* import SelecaoAssentos from './SelecaoAssentos'
import Sucesso from './Sucesso' */

function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SelecaoFilme />} />
            </Routes>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.querySelector('.root'))