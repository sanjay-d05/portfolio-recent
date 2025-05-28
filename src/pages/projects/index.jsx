import React, { useContext } from 'react' ;

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

/* modals */
import {ProjectCard} from '../../modals/modal' ;

function Projects() {

  const {isDarkTheme , projects} = useContext(PortfolioContext) ;

  return (
    <div className={`portfolio-container px-1 px-lg-2 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>

     <div className="container">

       <h5 className='text-center fs-1'>
        MY Latest {" "}
        <span style={{color:'#ab3483'}}>
          <strong>
              Works
          </strong>
        </span>
      </h5>
      <p className='fs-5 text-center'>
        Below are few projects I've worked on recently
      </p>

      <div className="row justify-content-center text-center gap-4">
        {projects.map((project , index) => (
          <div key={index} className="col-12 col-md-3 mt-5" style={{height:'auto'}}>
            <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            />
          </div>
        ))}
      </div>

     </div>

    </div>
  )
}

export default Projects