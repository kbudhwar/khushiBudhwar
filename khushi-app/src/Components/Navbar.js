import React, { Component } from "react";
import mountain from "../images/mountain-icon.png";
import "./NavbarStyles.css";
import { Link } from "react-scroll";

class Navbar extends Component {
  state = {
    clickedMobile: false,
    home: "teal",
    about: "rgb(97, 96, 96)",
    projects: "rgb(97, 96, 96)",
    contact: "rgb(97, 96, 96)",
    cursor: "rgb(248, 167, 91)",
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
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
      this.setState({
        home: "teal",
        about: "rgb(97, 96, 96)",
        projects: "rgb(97, 96, 96)",
        contact: "rgb(97, 96, 96)",
        cursor: "rgb(248, 167, 91)",
      });
    } else if (scrollPosition < 750) {
      this.setState({
        home: "rgb(97, 96, 96)",
        about: "teal",
        projects: "rgb(97, 96, 96)",
        contact: "rgb(97, 96, 96)",
        cursor: "teal",
      });
    } else if (scrollPosition < 1200) {
      this.setState({
        home: "rgb(97, 96, 96)",
        about: "rgb(97, 96, 96)",
        projects: "teal",
        contact: "rgb(97, 96, 96)",
        cursor: "rgb(248, 167, 91)",
      });
    } else {
      this.setState({
        home: "rgb(97, 96, 96)",
        about: "rgb(97, 96, 96)",
        projects: "rgb(97, 96, 96)",
        contact: "teal",
        cursor: "rgb(255, 133, 124)",
      });
    }
  };
  render() {
    return (
      <div>
        <div className="strip"></div>
        <div className="cursor" style={{ backgroundColor: this.state.cursor }}>
        </div>
        <nav>
          <Link to="home" smooth={true}>
            <a href="#home">
              <img src={mountain} alt="Mountain Icon" className="nav-icon" />
            </a>
          </Link>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <Link to="home" smooth={true}>
                <li>
                  <a href="#home" style={{ color: this.state.home }}>
                    home
                  </a>
                </li>
              </Link>
              <Link to="about" smooth={true}>
                <li>
                  <a href="#about" style={{ color: this.state.about }}>
                    about
                  </a>
                </li>
              </Link>
              <Link to="projects" smooth={true}>
                <li>
                  <a href="#projects" style={{ color: this.state.projects }}>
                    projects
                  </a>
                </li>
              </Link>
              <Link to="contact" smooth={true}>
                <li>
                  <a href="#contact" style={{ color: this.state.contact }}>
                    contact
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={
                this.state.clickedMobile ? "fas fa-times" : "fas fa-bars"
              }
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
