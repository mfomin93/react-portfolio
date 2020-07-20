import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../assets/arrays/ProjectData';

function Projects() {

    const projectComponents= projectData.map(project => {
        return(
            <ProjectCard key={project.id} 
                    name={project.name} 
                    imgSrc={project.imgSrc}
                    description={project.description}
                    deploySrc={project.deploySrc}
                    codeSrc={project.codeSrc}
                    responsibilities={project.responsibilites}/>
        )
    })

    return(
        <div>
            {projectComponents}
        </div>
        
    )
}

export default Projects;