import React, { Component } from 'react'
import cards from './../mock/cards'
import './cards.css'

class DeckOfCards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards,
      hearts: true,
      diamonds: true,
      spades: true,
      clubs: true,
    }
  }
  toggleCards(event, filterValue) {
    const { cards } = this.state

    const checked = event.target.checked
    const updatedCards = cards.map((item) => {
      const obj = { ...item }
      if (item.suit === filterValue) {
        obj.flag = checked
      }
      return obj
    })
    this.setState({
      cards: [...updatedCards],
      [filterValue]: checked,
    })
  }

  render() {
    const { cards, hearts, spades, diamonds, clubs } = this.state
    return (
      <div className="cards">
        <div className="header">
          <div className="toggle-container">
            <span className="toggle-item">
              <lable>
                <input
                  type="checkbox"
                  checked={spades}
                  onChange={(event) => this.toggleCards(event, 'spades')}
                />
                Spade
              </lable>
            </span>
            <span className="toggle-item">
              <lable>
                <input
                  type="checkbox"
                  checked={hearts}
                  onChange={(event) => this.toggleCards(event, 'hearts')}
                />
                Heart
              </lable>
            </span>
            <span className="toggle-item">
              <lable>
                <input
                  type="checkbox"
                  checked={clubs}
                  onChange={(event) => this.toggleCards(event, 'clubs')}
                />
                Club
              </lable>
            </span>
            <span className="toggle-item">
              <lable>
                <input
                  type="checkbox"
                  checked={diamonds}
                  onChange={(event) => this.toggleCards(event, 'diamonds')}
                />
                Diamond
              </lable>
            </span>
          </div>
        </div>

        <div className="main-container">
          {cards.map((item, index) => {
            return item.flag ? (
              <section
                className={`card ${item.suit}`}
                value={item.value}
                key={index}
              >
                <div className="card-inner card-inner-centered">
                  <div className="card-column">
                    <div className="card-symbol"></div>
                  </div>
                </div>
              </section>
            ) : null
          })}
        </div>
      </div>
    )
  }
}

export default DeckOfCards
