import React from 'react';
import Card from './Card';

import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key={card.headline} card={card} />)}
    </div>
  )
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default Cards;