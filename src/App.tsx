import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Presentation from './components/Presentation'
import Projet from './components/Projet'

function App() {

  return (
    <>
      <div className='data-container'>
        <Card />
        <div className='main-data'>
          <Presentation />
          <Projet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
