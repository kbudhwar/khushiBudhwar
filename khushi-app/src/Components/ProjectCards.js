import React from 'react';
import './ProjectStyles.css'

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <div className="project-card" style={{backgroundImage:{image}}}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="badge-container">
        {technologies.map((technology) => (
          <span key={technology} className="badge">{technology}</span>
        ))}
      </div>
      <a id="card-link" href={link}>View Project</a>
    </div>
  );
}

export default ProjectCard;