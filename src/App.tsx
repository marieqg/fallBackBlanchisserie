import './App.css'
import logo from './assets/logo.png'

function App() {

  return (
    <>
        <img src={logo} alt="Logo de la Blanchisserie de Chauny"/>
        <div>
            <h1>Blanchisserie de Chauny</h1>
            <h2>Site en travaux...</h2>
            <p className='horaires'>Horaires d'ouverture :</p>
            <p>Lundi - Vendredi : 9h00 - 12h00 / 13h30 - 19h00</p>
            <p>Samedi - Dimanche : Fermé</p>
            <p>Contactez nous par téléphone au <a href='tel:0223520474'>03.23.52.04.74</a> ou par mail: <a href='mailto:ste.letang@wanadoo.fr'>ste.letang@wanadoo.fr</a></p>
        </div>
    </>
  )
}

export default App
