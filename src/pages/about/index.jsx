import React, { useContext } from 'react' ;

/* context */
import {PortfolioContext} from '../../context/Portfoliocontext' ;

/* react icons */
import { FaHandPointRight } from 'react-icons/fa';

/* assets */
import aboutImg from '../../assets/about-img.svg' ;

/* components */
import TechStack from '../../components/stacks/TechStack' ;
import ToolStack from '../../components/stacks/ToolStack' ;

function About() {

  const {isDarkTheme} = useContext(PortfolioContext) ;

  return (
    <div className={`portfolio-container px-1 px-lg-2 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-lg-8">

             <h5 className='text-center mb-3 fs-1 '>
                About {" "}
                <span style={{color:'#ab3483'}}>
                  Me
                </span>
              </h5>
              <p className='fs-5'>
                Hi Everyone, I am  {" "}
                <span  style={{color:'#ab3483'}}>
                SANJAY D {" "}
                </span>
                from {" "}
                <span  style={{color:'#ab3483'}}>
                TamilNadu, India. {" "}
                </span>
                I am currently pursuing my Bachelor's Degree in Hindustan University.
              </p>
              <p className='fs-5'>
                Besides coding, I enjoy other activities too!
              </p>
              <ul style={{listStyleType:'none'}} className='fs-5'>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Games</li>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Travelling</li>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Reading Books</li>
                <li><FaHandPointRight color='#ab3483' className='mb-1'/>{" "} Listening Music</li>
              </ul>
              <div>
                <p className='fs-5 mb-0 text-center px-4'>
                "Success is not Final , Failure is not fatal , its the Effort you make that counts !"
                </p>
                <p className='text-center ps-5 fs-4' style={{color:'#ab3483'}}>
                  -SANJAY D
                </p>
              </div>

          </div>

          <div className="col-12 col-lg-4 pt-5 pt-lg-0">
            <img src={aboutImg} alt='About-Image' />
          </div>

        </div>

        <h5 className='fs-1 mb-3 text-center' style={{marginTop:'8rem'}}>
          Professional {" "}
          <span style={{color:'#ab3483'}}>
            Skillset
          </span>
        </h5>
        <TechStack />

        <h5 className="fs-1 mb-3 text-center" style={{marginTop:'8rem'}}>
        <span style={{color:'#ab3483'}}>
          Tools {" "}
        </span>
        I Use
      </h5>
      <ToolStack />

      </div>
    </div>
  )
}

export default About