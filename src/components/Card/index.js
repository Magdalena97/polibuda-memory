import React from 'react'; 
import PropTypes from 'prop-types';

import './style.scss'
function renderContent(type,content,height,width,flipped){ 
    if(type=="image") return renderImage(content,height,width,flipped)
    else return renderText(content,flipped)
}
function renderImage(content,height,width,flipped){
    return (
       <img 
            style={{
                height,width
            }}
            className={flipped ? 'front' : 'back'}
            src={flipped ? content : `/Img/back.png`}
        />
    )
}

function renderText(content,flipped){
    return 
        /*if(flipped)
    <p>{content}</p>
    else <img scr= `/Img/back.png`/>*/
    
    
}
export default function Card({id,type,content,width,height,flipped,handleClick}){
    
        return <div 
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width,height
            }}
            onClick={() => handleClick(id)}
        >
            <div className="flipper">
               { renderContent(type,content,height,width,flipped) }
            </div>
        </div>
    
}

Card.propTypes = {
    handleClick:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,
    flipped:PropTypes.bool.isRequired,
}

