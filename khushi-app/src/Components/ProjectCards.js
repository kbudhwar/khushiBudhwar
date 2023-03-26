import React from 'react';
import './ProjectStyles.css'

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card" style={{backgroundImage:{image}}}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
}

export default ProjectCard;