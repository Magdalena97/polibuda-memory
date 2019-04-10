import React from 'react'; 
import PropTypes from 'prop-types';

import './style.scss';

function renderContent(type,content,solved,height,width,flipped){ 
    if(type=="image") return renderImage(content,solved,height,width,flipped)
    else return renderText(content,solved,flipped,height,width)
}
function renderImage(content,solved,height,width,flipped){
    console.log(content)
    console.log(`flipped: ${flipped}, solved: ${solved}`)
    return (
       <img 
            style={{ height,width }}
            className={flipped ? 'front' : 'back'}
            src={flipped || solved ? content : `/images/back.jpg`}
        />
    )
}
function renderText(content,solved,flipped,height,width){
    console.log(content)
    console.log(`flipped: ${flipped}, solved: ${solved}`)
    if(flipped || solved){
        if(solved){
            console.log('teraz')
            return( <p 
                    style={{ height,width }}
                    className={'frontText1'}>{content}
                    </p>)}
        else {
            return( <p 
                    style={{ height,width }}
                    className={'frontText'}>{content}
                    </p>)}}
    else {
        return(  <img  
                style={{ height,width }}
                className={'back'} 
                src={ `/images/back.jpg`}
        /> )}  
}
export default function Card({id,type,content,pair,solved,width,height,flipped,handleClick,disabled}){
    
        return <div 
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width,height
            }}
            onClick={() =>disabled ? null: handleClick(id,pair)}
        >
            <div className="flipper">
               { renderContent(type,content,solved,height,width,flipped) }
            </div>
        </div>
    
}

Card.propTypes = {
    handleClick:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    pair:PropTypes.number.isRequired,
    flipped:PropTypes.bool.isRequired,
    height:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    disabled:PropTypes.bool.isRequired,
    solved:PropTypes.bool.isRequired,
    content:PropTypes.string.isRequired,
}

