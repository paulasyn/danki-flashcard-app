import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom';

import '../index.css'

export default function EditDeck() {
  const decksList = [1, 2, 3];


  return (
    <div>
    <h1>Edit Decks</h1>
    <p></p>
    <h2>Created Decks</h2>
      <div className='flex flex-col gap-2'>
        {decksList.map((deck) => (
          <Link key={deck} to={`/edit/${deck}`}>
            <p> 
              Deck {deck} 
            </p>
          </Link>
        ))}
      </div>
   </div>
  )
}

