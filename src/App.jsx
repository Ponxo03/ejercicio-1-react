import './App.css'
import Header from './Ejercicio1/Header/Header'
import data from './Ejercicio1/Data/Lista'
import Promotion from './Ejercicio1/Promotion/Promotion';
import Heanding from './Ejercicio1/Heading/Heanding';
import Gallery from './Ejercicio1/Gallery/Gallery';




const {header,promotion,heading,gallery,} = data;


function App() {
  console.log(header)

  return (
    <>
    <Header header={header}></Header>
    <Promotion promotion={promotion}></Promotion>
    <Heanding heading={heading}></Heanding>
    <Gallery gallery={gallery}></Gallery>
    
    </>
  )
}

export default App
