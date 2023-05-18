import { useState } from 'react'
import Header from './componentes/Header/Header'
import './componentes/Header/Header.css'
import Formulario from './componentes/Formulario/Formulario'
import './componentes/Formulario/Formulario.css'
import MiOrg from './componentes/MiOrg/Miorg'
import './componentes/MiOrg/Miorg.css'
import './App.css'

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <>
    <Header/>
    {mostrarFormulario === true ? <Formulario/> : <div></div>}
    
    <MiOrg/>
    </>
  )
}

export default App
