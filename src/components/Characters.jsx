import { useContext } from 'react'
import { CharactersContext } from '../context/charactersContext'
import {Pagination} from './Pagination'
export const Characters = () =>
{

  const { characters } = useContext(CharactersContext);
 // console.log('estamos en characters.jsx');
  //console.log(characters)

  return (
    <div className="row">
    <Pagination/>
      {characters.map(character =>
      {
        return (
          <div className="col-3" key={character.id}>
            <div className="card mt-4"  >
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name} </h5>
                <p className="card-text">
                <b>Status: {character.status} </b><br/>
                <b>Species: {character.species} </b><br/>
                </p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}