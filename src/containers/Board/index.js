import React, { useState, useEffect} from 'react';

import './style.scss';

import CardComponent from '../../components/CardComponent';
import Header from '../../components//Header';
import initializeDeck from '../../components/Deck';

import Logo from './logo2.gif';

export default function Board(){
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [solved, setSolved] = useState([])//save two flipped cards
    const [disabled, setDisabled] = useState(false)// disabled the borad after flipped two cards, so i cant flipped three cards

    useEffect( () => {
        setCards(initializeDeck())
    },[])

    const handleClick = (id,pair) => {
        setDisabled(true)
      
        if(flipped.length===0){
            setFlipped([id])
            setDisabled(false)
            setTimeout(timeToMatch, 300);
        }else{
            if(sameCardCliked(id)) {
                setDisabled(false)
                return
            }
            setFlipped([flipped[0],id])
            
            if(isMatch(pair,id) === true){
                setSolved([...solved,flipped[0],id])
                resetCards()
                return;   
            }else{
                setTimeout(resetCards,2000)
               

                return;
            }
            
        }
        
    }
    const timeToMatch = ()=> {
        if(flipped.length===1){
            resetCards();
        }
    }

    const resetCards = () => {
        setFlipped([])//will be an empty array again
        setDisabled(false)
    }

    const sameCardCliked = (id) =>flipped.includes(id)

   

   const isMatch = (pair,id) => {
        const clickedCard = cards.find((card) => card.id === id)
        const flippedCard = cards.find((card) => flipped[0] === card.id)
        return (flippedCard.pair === clickedCard.pair && flipped.includes(id) && flipped.includes(flipped[0]));
    }
    return(
        <div className="partParent">
            <div className="partTop">
                <img src={Logo} className="logoBoard"/>
                <Header/>
               
            </div>
                <CardComponent
                    cards={cards}
                    flipped={flipped}
                    handleClick={handleClick} 
                    disabled={disabled}
                    solved={solved}
                />  
        </div>
    )

}
