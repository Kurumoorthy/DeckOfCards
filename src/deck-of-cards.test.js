import React from 'react'
import ReactDOM from 'react-dom'
import DeckOfCards from './../src/components/deck-of-cards'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeckOfCards />, div)
})