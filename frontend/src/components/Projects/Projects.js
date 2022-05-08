import { Button, Typography } from '@mui/material';
import React from 'react';
import './Projects.css';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from 'react-icons/fa';

export const ProjectCard = () => {
  return (
    <>
      <a href="/" className="projectCard" target="black">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt="Project"
          />
          <Typography variant="h5">hey baby</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>hey baby</Typography>
          <Typography variant="h6">Tech Stack:</Typography>
        </div>
      </a>

      <Button style={{ color: 'rgba(40,40,40,0.7)' }}>
        <Delete />
      </Button>
    </>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            // id={item._id}
            // key={item._id}
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H619_4oc5gYaV5dhIa-kV8uIYURaHU9SAA&usqp=CAU"
            projectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H619_4oc5gYaV5dhIa-kV8uIYURaHU9SAA&usqp=CAU"
            projectTitle="hey baby"
            description="hey bbay"
            technologies="baby"
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
