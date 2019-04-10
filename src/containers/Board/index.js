import React, { useState, useEffect} from 'react';

import './style.scss';

import CardComponent from '../../components/CardComponent';
import initializeDeck from '../../components/Deck';

export default function Board(){
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    //const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])//save two flipped cards
    const [disabled, setDisabled] = useState(false)// disabled the borad after flipped two cards, so i cant flipped three cards

    useEffect( () => {
        //resizeBoard()
        setCards(initializeDeck())
    },[])

   /* useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)

        return () => window.removeEventListener('resize', resizeListener)
    })*/
    const handleClick = (id,pair) => {
        console.log(`Id:`+id)
        console.log(`pair`+pair)
        setDisabled(true)
        if(flipped.length==0){
            console.log("Nacisnieto jedna karte")
            setFlipped([id])
            setDisabled(false)
        }else{
            if(sameCardCliked(id)) {
                setDisabled(false)
                return
            }
            setFlipped([flipped[0],id])
            if(isMatch(pair,id)){
                setSolved([...solved,flipped[0],id])
                resetCards()   
            }else{
                console.log("nie ma pary")
                setTimeout(resetCards,2000)
            }
        }
        
    }
    const resetCards = () => {
        setFlipped([])//will be an empty array again
        setDisabled(false)
    }

    const sameCardCliked = (id) =>flipped.includes(id)

   const isMatch = (pair,id) => {
        console.log("Jest para")
        const clickedCard = cards.find((card) => card.id == id)
        console.log(clickedCard)
        const flippedCard = cards.find((card) => flipped[0] == card.id)
        console.log()
        return flippedCard.pair==clickedCard.pair
    }

    /*const resizeBoard = () => {
        setDimension(
                Math.min(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight,
            ),
        )
    }*/
    return(
        <div>
            <CardComponent
                //dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick} 
                disabled={disabled}
                solved={solved}
            />   
        </div>
    )

}
