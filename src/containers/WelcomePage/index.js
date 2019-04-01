import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

import './style.scss';

import Header from '../../components/Header';
import Logo from './logo2.jpg';

class WelcomePage extends Component{

    constructor(props) {
        super(props)
        this.onNavigationBoard = this.onNavigationBoard.bind(this)
      }
    
    onNavigationBoard() {
        this.props.history.push("/board");
    }

    render(){
        return(
            <div className="WelcomePage">
                <div className="flexbox">
                    <img src={Logo} className="logo" alt="Logo of University of Technology"/>
                    <div className="flexbox2">
                        <div className="header"> <Header/></div>
                        <button onClick={this.onNavigationBoard} className="welcomeButton"><span>Zaczynamy!</span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(WelcomePage)

