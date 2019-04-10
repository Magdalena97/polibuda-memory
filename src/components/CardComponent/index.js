import React, { useState} from 'react';
import PropTypes from 'prop-types'

import './style.scss';

import Card from '../Card';

export default function CardComponent({disabled,/*dimension,*/cards, flipped,solved,handleClick}){
    return(
    <div className="board">
        {cards.map((card) =>(
            <Card
                key={card.id} 
                id={card.id}
                type={card.type}
                content={card.content}
                pair={card.pair}
                width={200}
                height={200}
                flipped={flipped.includes(card.id)}
                solved={solved.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled || solved.includes(card.id)}
            />
        ))}
    </div>
    )
}

CardComponent.propTypes = {
    disabled: PropTypes.bool.isRequired,
    //dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}