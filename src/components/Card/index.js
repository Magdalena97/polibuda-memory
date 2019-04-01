import React from 'react'; 
import propTypes from 'prop-types';
import Logo from './logo.png';

import './style.scss'

//zmienne pojedynczej karty:
/*
-id identyfikacja danej karty
-state stan czy katra jest odslonieta czy nie 
-press czy jest nacisnieta 
*/ 

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            idClicked: this.props.id
        }));
    }

    render(){
        return(
        <div className="Card">
            <img onclick={this.handleClick} src={Logo} alt="Logo" className="logo"/>
        </div>
        )


    }
}
// function  Card (props) {
//     return (
//         <div>
//     <div className="Card">
//                 <img src={Logo} alt="Logo2" className="logo"/>
//      </div>
//      <div>
//      {console.log(props.id)}
//      </div>
//      </div>
//     );    
// }

Card.propTypes = {
    id:propTypes.number.isRequired,
};
export default Card;
//obiety klasy musza przyjmowac wartosci z json czyli musimy miec for ktory przelatuje przez json i ustawia obiety w klaise 
// trzeba miec on click by wiedziec na jaka kartke ktos nakliknal


