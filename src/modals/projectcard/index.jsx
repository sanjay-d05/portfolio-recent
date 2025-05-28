import { useContext } from "react";
import {
     FaGithub ,
     FaExternalLinkSquareAlt 
} from "react-icons/fa";
import { PortfolioContext } from "../../context/Portfoliocontext";

function ProjectCard({imgSrc , title , description , githubLink , demoLink}) {

    const {isDarkTheme} = useContext(PortfolioContext) ;

  return (
    <div className={`card py-2 ${isDarkTheme ? 'project-card-container-dark' : 'project-card-container-light'}`} >
      <img src={imgSrc} className="card-img-top px-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">
            {title}
        </h5>
        <p className="card-text">
            {description}
        </p>
        <div className='d-flex justify-content-center gap-3'>

          <a className={`btn ${isDarkTheme ? 'btn-projects-dark' : 'btn-projects-light'}`} href={githubLink} target='_blank'>
            <FaGithub style={{marginBottom:'3px'}} /> &nbsp;
            {'GitHub'}
          </a>
          <a className={`btn ${isDarkTheme ? 'btn-projects-dark' : 'btn-projects-light'}`} href={demoLink} target='_blank'>
            <FaGithub style={{marginBottom:'3px'}} /> &nbsp;
            {'Demo'}
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default ProjectCard