import React, { Component } from "react";
import { Element } from "react-scroll";
import "./ProjectStyles.css";
import ProjectCard from "./ProjectCards";


const projects = [
    {
      title: 'Leaf It',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '../images/plant.jpeg',
      link: 'https://github.com/Shivam-J-07/Leaf-It'
    },
    {
      title: 'Jarvis GPT',
      description: 'Nulla tempus sodales ante, non auctor felis ultricies quis.',
      image: 'project2.png',
      link: 'https://www.example.com/project2'
    },
    {
        title: 'NLP Next Word Predictor',
        description: 'Nulla tempus sodales ante, non auctor felis ultricies quis.',
        image: 'project2.png',
        link: 'https://www.example.com/project2'
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
