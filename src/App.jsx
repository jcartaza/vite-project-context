//Context
import { CharactersContextProvider} from './context/charactersContext'

import {Characters} from "./components/Characters"



function App() {
  

  return (
    <div className="container">
    
      <h2 className="alert alert-success text-center">Rick and Morty App</h2>

      <CharactersContextProvider>
          <Characters/>
      </CharactersContextProvider>
     
    </div>
  )
}

export default App
