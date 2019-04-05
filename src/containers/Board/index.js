import React, { useState, useEffect} from 'react';

import './style.scss';

import CardComponent from '../../components/CardComponent';
import initializeDeck from '../../components/Deck';

export default function Board(){
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])//save two flipped cards
    const [disabled, setDisabled] = useState(false)// disabled the borad after flipped two cards

    useEffect( () => {
        resizeBoard()
        setCards(initializeDeck())
    },[])

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)

        return () => window.removeEventListener('resize', resizeListener)
    })
    const handleClick = (id) => {
        setDisabled(true)
        setFlipped([...flipped,id])
    }

    const resizeBoard = () => {
        setDimension(
                Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            ),
        )
    }
    return(
        <div>
            <CardComponent
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick} 
                disabled={disabled}
            />   
        </div>
    )

}
