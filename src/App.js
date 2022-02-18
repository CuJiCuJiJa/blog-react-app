import {useEffect, useState} from 'react'
import Entry from './components/Entry';
import './App.css';


function App() {

  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState('')
  
  //Fetch devuelve una promesa, cuando se cumple .then() captura la respuesta y formatea a JSON en el callback con .json() la cual es devuelve otra promesa con la respuesta formateada y lista para usarse.
  //La función useEffect() se ejecuta cada vez que el componente se renderiza (nuevas props, render)
  //se le puede pasar un argumento para indicarle cuando ejecutarse, así se le puede asignar una variable que funcionará de dependencia para la ejecución del useEffect.
  /*
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')  
    .then(response => response.json())
    .then(json => setEntries(json))
  }, [])
  */ //DUMMYDATA//
 
  const handleChange = (e) => {
    setNewEntry(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const entryToAdd = {
      id: entries.length + 1,
      body: newEntry
    }
    setEntries(entries.concat(entryToAdd))
    setNewEntry('')
  }

  return ( 
    <div className="App">
      
      <ol>
        { 
         entries.length !== 0 ? entries.map(entry => <Entry key={entry.id} {...entry}/>) : <strong> No se encuentran  elementos </strong>
        }
      </ol>   

      <form onSubmit={handleSubmit}>
        <input required onChange={handleChange} type='text' value={newEntry}/>
        <button>Agregar Nota</button>
      </form>

    </div>
  );
}

export default App;
