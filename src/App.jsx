import './App.css'
import Descripción from './componentes/Descripción'
import Pasatiempos from './componentes/pasatiempos'
import Experiencia from './componentes/Experiencia'
import Boton from './componentes/Boton'
import NavBar from './componentes/NarBar'
import xdImage from './xd.jpg'

function App() {
  return (
    <>
      <NavBar />
      <div className='contenido'>
        <div className='centrado'>
          <h1 className='margen'>Yo</h1>
          <img src={xdImage} alt="soy yo" className="imagen" />
        </div>
        <div>
          
        </div>
        <Descripción />
        <Pasatiempos />
        <Experiencia />
        <div className='centrado'>
          <Boton/>
        </div>
      </div>
      
    </>
  )
}

export default App
