import React, { useContext } from 'react' ;

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

/* react bootstrap */
import { Button } from 'react-bootstrap';

/* react icons */
import { IoMdDownload } from 'react-icons/io';

/* assets */
import resume from '../../assets/SANJAY_D_RESUME.pdf' ;
import homeImg from '../../assets/home-secondary.svg' ;

/* components */
import {Role} from '../../components/require' ;

/* react syntax highlighter */
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

/* react parallax tilt */
import Tilt from 'react-parallax-tilt' ;

function Home() {

  const {isDarkTheme} = useContext(PortfolioContext) ;

  const codeString = `
    const coder = {
      name: 'SANJAY D',
      skills: ['React', 'NodeJS', 'Python', 'Express',
              'Java', 'MySql', 'MongoDB'],
      hardWorker: true,
      quickLearner: true,
      problemSolver: true,
      hireable: function() {
        return (
          this.hardWorker &&
          this.problemSolver &&
          this.skills.length >= 5
        );
      }
  };`;

  return (
    <div className={`portfolio-container px-1 px-lg-2 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">

        <div className="row justify-content-center">

          <div 
          className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start gap-2"
          >
            <h5 className={`fw-bold display-5 display-md-2`}>
              Hello , 
            </h5>
            <h5 className={`fw-bold display-5 display-md-2`}>
              I'M {" "} <span style={{color:'#ab3483'}}>SANJAY D</span>
            </h5>
            <Button href={resume} className='resume-btn' target='_blank'>
              Download CV {" "} <IoMdDownload />
            </Button>
            <Role />
          </div>

          <div className="col-12 col-lg-6 pt-5 pt-lg-0">

            <div style={{
            backgroundColor: "#1e1e2e",
            padding: "15px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "600px", // Prevents it from becoming too wide
            position: "relative",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            overflowX: "auto", // Enables horizontal scrolling for small screens
          }}>
            {/* Window Buttons (Three Dots) */}
            <div style={{
              display: "flex",
              gap: "5px",
              padding: "1px",
              position: "absolute",
              top: "5px",
              left: "10px"
            }}>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#ff5f56",
                borderRadius: "50%"
              }}></span>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#ffbd2e",
                borderRadius: "50%"
              }}></span>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#27c93f",
                borderRadius: "50%"
              }}></span>
            </div>

            {/* Code Block */}
            <SyntaxHighlighter
              language="javascript"
              style={dracula}
              customStyle={{ paddingTop: "30px", fontSize: "14px" }} // Smaller font for better mobile view
            >
              {codeString}
            </SyntaxHighlighter>
          </div>

          </div>

        </div>

        <div className="row justify-content-center" style={{marginTop:'8rem'}}>

          <div className="col-12 col-lg-8">

            <h3 className='mb-3 display-5 display-md-4 fw-bold'> 
                LET ME {" "}
                <span style={{color:'#ab3483'}}>
                    INTRODUCE {" "}
                </span>
                MYSELF
            </h3>

            <p className="mb-2 fs-5 fs-md-3">
                I have developed a strong passion for programming, and I believe I’ve learned quite a bit so far. 🤷‍♂️
            </p>

            <p className='mb-2 fs-5 fs-md-3'>
                I have a solid foundation in {" "}
                <span style={{color:'#ab3483'}}>
                major programming languages {" "}
                </span>
                such as {" "}
                <span style={{color:'#ab3483'}}>
                Python and JavaScript. {" "}
                </span>
            </p>

            <p className='mb-2 fs-5 fs-md-3'>
                My fields of interest include building new {" "}
                <span style={{color:'#ab3483'}}>
                Web Technologies {" "}
                </span>
                and {" "}
                <span style={{color:'#ab3483'}}>
                Products
                </span>
            </p>

            <p className='fs-5 fs-md-3'>
            Whenever possible, I also apply my passion for developing products using {" "}
            <span style={{color:'#ab3483'}}>
            Node.js {" "}
            </span>
            and {" "}
            <span style={{color:'#ab3483'}}>
            Modern Javascript Library {" "}
            </span>
            and {" "}
            <span style={{color:'#ab3483'}}>
            Frameworks {" "}
            </span> 
            like {" "}
            <span style={{color:'#ab3483'}}>
            React.js {" "}
            </span> 
            and {" "}
            <span style={{color:'#ab3483'}}>
            Vue.js.
            </span>
            </p>

          </div>

          <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center pt-5 pt-lg-0">
            <Tilt>
              <img src={homeImg} alt="person-icon" className='pt-3'/> 
            </Tilt>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home