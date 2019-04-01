import React from 'react';

import './style.scss';

import Logo from '../WelcomePage/logo2.jpg';
import Header from '../../components/Header';
import CardComponent from '../../components/CardComponent';

const Board = () =>(
    <div className="Board">
        <div className="flexbox" >
            <img src={Logo} className="logoBoard" alt="Logo of University of Technology"/>
           <div className=" headerBoard"> <Header/></div>
            <hr className="horizontalLine"/>
        </div>
        <CardComponent/>   
    </div>
);

export default Board;
