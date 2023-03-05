import React, {Component } from 'react';
import mountain from '../images/mountain-icon.png'
import './NavbarStyles.css'
import { Link } from 'react-scroll';


class Navbar extends Component{
    state={clickedMobile: false, home:"teal", about:"rgb(97, 96, 96)", projects:"rgb(97, 96, 96)", contact:"rgb(97, 96, 96)"};

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    };
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < 300) {
            console.log("here")
          this.setState({ home: "teal", about: "rgb(97, 96, 96)", projects: "rgb(97, 96, 96)", contact: "rgb(97, 96, 96)"});
        } else if (scrollPosition < 1000) {
          this.setState({ home: "rgb(97, 96, 96)", about: "teal", projects: "rgb(97, 96, 96)", contact: "rgb(97, 96, 96)" });
        } else if (scrollPosition < 2000) {
          this.setState({ home: "rgb(97, 96, 96)", about: "rgb(97, 96, 96)", projects:"teal",  contact: "rgb(97, 96, 96)"});
        } else {
          this.setState({ home: "rgb(97, 96, 96)", about: "rgb(97, 96, 96)", projects:"rgb(97, 96, 96)",  contact: "teal"});
        }
      };
    render(){
    return(
        <div>
            <div className='strip'>
            </div>
            <nav>
            <Link to="home" smooth={true}>
            <a href='#home'>
            <img src={mountain} alt="Mountain Icon" className="nav-icon" />
            </a>
            </Link>
            <div>
                <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
                <Link to="home" smooth={true}>
                <li>
                    <a href="#home" style={{ color: this.state.home }}>home</a>
                </li>
                </Link>
                <Link to="about" smooth={true}>
                <li>
                <a href="#about" style={{ color: this.state.about }}>about</a>
                </li>
                </Link>
                <li>
                <a href="#projects" >projects</a>
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