import React, { useContext } from 'react' ;

/* framer motion */
import {motion} from 'framer-motion' ;

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

/* modals */
import {CertificateCard} from '../../modals/modal.js'


function Certificates() {

  const {isDarkTheme , certificates} = useContext(PortfolioContext) ;

  // Animation variants for left and right sliding
const leftSlide = { hidden: { opacity: 0, x: -200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
const rightSlide = { hidden: { opacity: 0, x: 200 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  return (
    <div className={`portfolio-container px-1 px-lg-2 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">

        <h5 className='text-center fs-1'>
          Certified {" "}
          <span style={{color:'#ab3483'}}><strong>Skills</strong></span>
          {" "} & {" "}
          <span style={{color:'#ab3483'}}><strong>Achievements</strong></span>
        </h5>
        <p className='fs-5 text-center'>
          Below are some certifications I have achieved recently
        </p>

        <div className="row justify-content-center gap-4 mt-5">
          {certificates.map((certificate , index) => (
            <motion.div
            key={index}
            className='col-12 col-lg-3'
            style={{ height: 'auto', width: '80%' }}
            variants={index % 2 === 0 ? leftSlide : rightSlide} // Alternating left and right
            initial="hidden" 
            whileInView="visible"
            >
              <CertificateCard
              title={certificate.title}
              issuedBy={certificate.issuedBy}
              imgSrc={certificate.imgSrc}
              imgAlt={certificate.imgAlt}
              completedOn={certificate.completedOn}
              url={certificate.url}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Certificates