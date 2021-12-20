import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./css/reset.css"
import "./css/style.css"
import SelecaoFilme from './SelecaoFilme'
import SelecaoHorario from './SelecaoHorario'
import SelecaoAssentos from './SelecaoAssentos'
import Sucesso from './Sucesso'
import { useState } from 'react'

function App() {
    const [dados, setDados] = useState(null)

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SelecaoFilme setDados={setDados} />} />
                <Route exact path='/sessoes/:id' element={<SelecaoHorario dados={dados} setDados={setDados} />} />
                <Route exact path='/assentos/:id' element={<SelecaoAssentos dados={dados} setDados={setDados}/>} />
                <Route exact path='/sucesso' element={<Sucesso dados={dados} setDados={setDados}/>} />
            </Routes>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.querySelector('.root'))