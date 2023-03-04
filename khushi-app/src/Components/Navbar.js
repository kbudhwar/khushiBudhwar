import React, {Component } from 'react';
import mountain from '../images/mountain-icon.png'
import './NavbarStyles.css'


class Navbar extends Component{
    state={clickedMobile: false};

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    };
    render(){
    return(
        <div>
            <nav>
            <a href='#home'>
            <img src={mountain} alt="Mountain Icon" className="nav-icon" />
            </a>
            <div>
                <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
                <li>
                    <a href="#home">home</a>
                </li>
                <li>
                <a href="#about" >about</a>
                </li>
                <li>
                <a href="#portfolio" >portfolio</a>
                </li>
                <li>
                <a href="#contact">contact</a>
                </li>
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" 
                className={this.state.clickedMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
        </div>
    )
}
}
export default Navbar