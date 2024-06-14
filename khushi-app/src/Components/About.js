import React, {Component } from 'react';
import './AboutStyles.css'
import { Element } from 'react-scroll';
import Rocket from '../images/Rocket.png'



class About extends Component{
    constructor(props) {
        super(props);
        this.state = { scroll: false,
                showDiv: false, };
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
                <div className={this.state.scroll ? "title" : "about-me-no"}>about me</div>
                <div className={this.state.scroll ? "about-me" : "about-me-no"}>From interactive websites to scalable applications, I love working on complex problems and finding creative solutions. I am passionate about machine learning, women in stem and all things space. Oh and I am a coffee fanatic!
                <br></br><br></br>I have recently worked as a Data Science intern at <a href="https://open.spotify.com/">Spotify</a>, where I got to be a part of the personzalization team helping use causal inference to enhance music experience. Prior to Spotify, I was a Machine Learning associate at <a href="https://altaml.com/">AltaML</a> where I helped the government leverage AI by predicting labour market indicators.
                <br></br><br></br>I have also worked as a Machine Learning Engineering intern at <a href="https://www.blackberry.com/us/en">Blackberry</a>, where I got to work on thrilling nlp problems using pytorch, keras, and pycaret. Lastly, I was a Software Engineering intern at <a href="https://www.verticalscope.com/">Verticalscope</a> working with tools like k8s and react.
                <br></br><br></br>I love meeting new people - feel free to reach out to me on <a href='https://www.linkedin.com/in/khushi-budhwar/'>LinkedIn</a> or by <a href="mailto:khushi.budhwar@gmail.com">email</a>!
              </div>
                <img className={this.state.scroll ? "rocket" : "about-me-no"} src={Rocket} alt="Rocket"></img>
            </div>
            <div className="background-media">
                <div className="title">about me</div>
                <div className="about-me">From interative websites to scalable applications, I love working on complex problems and finding creative solutions. I am passionate about machine learning, women in stem and all things space. Oh and I am a coffee fanatic!
                <br></br><br></br>I have recently worked as a Machine Learning Engineering intern at <a href="https://www.blackberry.com/us/en">Blackberry</a>, where I got to work on thrilling nlp problems using pytorch, keras, and pycaret. I also was a Software Engineering intern at <a href="https://www.verticalscope.com/">Verticalscope</a> working with tools like k8s and react.
                <br></br><br></br>I love meeting new people - feel free to reach out to me on <a href='https://www.linkedin.com/in/khushi-budhwar/'>git </a> or by <a href="mailto:khushi.budhwar@gmail.com">email</a>!
              </div>
                <img className="rocket" src={Rocket} alt="Rocket"></img>
            </div>
            </Element>
            </div>
        )
    }
}

export default About