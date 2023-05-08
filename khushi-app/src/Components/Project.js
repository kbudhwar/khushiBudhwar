import React, { Component } from "react";
import { Element } from "react-scroll";
import "./ProjectStyles.css";
import ProjectCard from "./ProjectCards";


const projects = [
    {
      title: 'Leaf It',
      description: 'An automatic plant irrigation system, that will water a plant depending on its moisture level and its species',
      image: '../images/plant.jpeg',
      technologies: ['Python', 'Raspberry Pi'],
      link: 'https://github.com/Shivam-J-07/Leaf-It'
    },
    {
      title: 'Spotify Heardle',
      description: 'Using a users spotify profile, the website plays a snippit of a song in which the user names the title.',
      image: 'project2.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/kbudhwar/Spotify-Karoke'
    },
    {
        title: 'NLP Next Word Predictor',
        description: 'Created a NLP auto-complete tool that will predict the next word given any sequence of words. Extracted my own emails and documents as data, to best mimic my speech.',
        image: 'project2.png',
        technologies: ['Tensorflow', 'Keras', 'Pandas'],
        link: 'https://github.com/kbudhwar/nlp-project'
      },
    // ... more projects
  ];

class Project extends Component {
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
    this.setState({ scroll1: window.scrollY > 500 });
  }

  render() {
    return (
      <div>
        <Element name="projects">
        <div className={this.state.scroll1 ? "backgroundProject background-animation" : ""}>
        <div className={this.state.scroll1 ? 'title-projects' : "about-me-no"}>projects</div>
        <div className={this.state.scroll1 ? 'projects' : "about-me-no"}>
          <div style={this.state.scroll1 ? {display:"flex"}:{display:"none"}}>
            {projects.map((project) => (
            <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
            />
        ))}
        </div>
        </div>
          </div>

          <div className="backgroundProject-media">
        <div className='title-projects'>projects</div>
        <div className="projects">
          <div style={{display:"flex"}}>
            {projects.map((project) => (
            <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
            />
        ))}
        </div>
        </div>
          </div>
        </Element>
      </div>
    );
  }
}
export default Project;
