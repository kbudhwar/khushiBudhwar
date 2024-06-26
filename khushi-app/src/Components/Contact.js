import React, {Component } from 'react';
import { Element } from 'react-scroll';
import './ContactStyles.css'

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = { scroll1: false, showDiv: false };
        this.handleScroll = this.handleScroll.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.timer = setTimeout(() => {
          this.setState({ showDiv: true });
        }, 3000);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll() {
        this.setState({ scroll1: window.scrollY > 1150 });
      }
render(){
    return(
        <div>
            <Element name="contact">
            <div className={this.state.scroll1 ? "backgroundContact background-animation" : ""}>
            <div className={this.state.scroll1 ? "title-contact" : "about-me-no"}>contact me</div>
            <a href='https://www.linkedin.com/in/khushi-budhwar/'>
            <i className= {this.state.scroll1 ? "fa-brands fa-linkedin": "about-me-no"} aria-hidden="true"></i>
            </a>
            <a href='https://github.com/kbudhwar'>
            <i className= {this.state.scroll1 ? "fa-brands fa-github": "about-me-no"} aria-hidden="true"></i>
            </a>
            <a href='mailto:khushi.budhwar@gmail.com'>
            <i className={this.state.scroll1 ?  "fa fa-envelope": "about-me-no"} aria-hidden="true"></i>
            </a>
            <a href='https://drive.google.com/file/d/1AsIP0x_O2qXljkTH5fON0D8IlgaFk0Fm/view?usp=sharing'>
            <i className={this.state.scroll1 ?  "fa fa-file": "about-me-no"} aria-hidden="true"></i>
            </a>
            <div className={this.state.scroll1 ?  'memo': "about-me-no"}>made with&nbsp;&nbsp;<i class="fa-solid fa-heart"></i>&nbsp;&nbsp;by khushi budhwar</div>
             </div>
             <div className='backgroundContact-media'>
                <div className='title-contact'>contact me</div>
                <a href='https://www.linkedin.com/in/khushi-budhwar/'>
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href='https://github.com/kbudhwar'>
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                </a>
                <a href='mailto:khushi.budhwar@gmail.com'>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href='https://drive.google.com/file/d/1UpPjmEEZ6UWHxg7S9Sub3EDaEObH4h40/view?usp=sharing'>
                <i class="fa fa-file" aria-hidden="true"></i>
                </a>
                <div className='memo'>made with&nbsp;&nbsp;<i class="fa-solid fa-heart"></i>&nbsp;&nbsp;by khushi budhwar</div>
             </div>
            </Element>
        </div>
    )
}
}
export default Contact