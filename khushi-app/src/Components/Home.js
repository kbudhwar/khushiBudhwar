import React, {Component } from 'react';
import face from '../images/face.png'
import './HomeStyles.css'
import { gsap } from "gsap";


class Home extends Component{
    handleMouseMove = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        gsap.set(".cursor", {
                x:mouseX,
                y: mouseY - 70
        });

        gsap.set(".shape", {
            x:mouseX,
            y: mouseY,
            stagger: -0.1
        });
        
      }
    
      componentDidMount() {
        document.addEventListener('mousemove', this.handleMouseMove);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
      }
    

    render(){
        return(
            <div className='home'>
                <div className='cursor'></div>
                <div className='shapes'>
                    <div className='shape shape-1'></div>
                    <div className='shape shape-2'></div>
                    <div className='shape shape-3'></div>
                </div>
                <div className='content'>
                    <h1>hi i'm khushi!
                    <h2>i'm a second year software engineering student at the university of waterloo</h2>
                    </h1>
                    <img src={face} id='face'></img>
                </div>
                <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
            </div>
        )
    }
}

export default Home