import React from 'react';

import './style.scss';

import Card from '../Card'; 

class CardComponent extends React.Component{
    createTable = () => {
        let table = []
            for (let i = 0;i < 3;i++ ){
                table.push(
                <div className="CardComponent">
                    <Card id={i}/>
                </div>)
            }
        return table
    }
    render(){
        return(this.createTable())
    }

}

export default CardComponent;

