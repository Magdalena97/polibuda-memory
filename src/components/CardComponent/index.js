import React, { useState} from 'react';
import PropTypes from 'prop-types'

import './style.scss';

import Card from '../Card';

export default function CardComponent({dimension,cards, flipped,handleClick}){
    return(
    <div className="board">
        {cards.map((card) =>(
            <Card
                key={card.id} 
                id={cards.id}
                type={card.type}
                width={dimension /4.5}
                height={dimension /4.5}
                flipped={flipped.includes(card.id)}
                handleClick={() => handleClick(card.id)}
            />
        ))}
    </div>
    )
}

CardComponent.propTypes = {
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}