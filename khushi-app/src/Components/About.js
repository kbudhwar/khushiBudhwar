import React, {Component } from 'react';
import './AboutStyles.css'
import { Element } from 'react-scroll';
import Rocket from '../images/Rocket.png'



class About extends Component{
    constructor(props) {
        super(props);
        this.state = { scroll: false,
                showDiv: false };
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
        this.setState({ scroll: window.scrollY > 50 });
      }
    
    render(){
        return(
            <div>
              <Element name="about">
            <div className={this.state.scroll ? "background background-animation" : ""}>
                <div className='title'>about me</div>
                <div className='about-me'>From interative websites to scalable applications, I love working on complex problems and finding creative solutions. I am passionate about machine learning, women in stem and all things space. Oh and I am a coffee fanatic!
                <br></br><br></br>I have recently worked as a Machine Learning Engineering intern at <a href="https://www.blackberry.com/us/en">Blackberry</a>, where I got to work on thrilling nlp problems. I also was a Software Engineering intern at <a href="https://www.verticalscope.com/">Verticalscope</a> working with tools like k8s and react.
                <br></br><br></br>I love meeting new people - feel free to reach out to me on <a href='https://www.linkedin.com/in/khushi-budhwar/'>linkidin</a> or by <a href="mailto:khushi.budhwar@gmail.com">email</a>!
                </div>
                <img className="rocket" src={Rocket} alt="Rocket"></img>
                <svg class="arrows1">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
            </Element>
            </div>
        )
    }
}

export default About