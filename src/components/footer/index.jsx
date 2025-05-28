import React, { useContext } from 'react' ;
import { PortfolioContext } from '../../context/Portfoliocontext';
import { Link } from 'react-router-dom';

function Footer() {

  const {isDarkTheme , links} = useContext(PortfolioContext) ;

  return (
    <div 
    className='container-fluid py-3 d-flex justify-content-center align-items-center w-100'
    style={isDarkTheme ? {backgroundColor : '#000000'} : {backgroundColor : '#ffffff'}}
    >
      <div className="row justify-content-center w-100 gap-2 gap-lg-0 px-3">

        <div className="col-12 col-lg-6">
          <p className={`mb-0 text-center text-lg-start ${isDarkTheme ? 'text-light' : 'text-dark'}`}>
                Designed And Developed By SANJAY D
            </p>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
          {links.map((link , index) => (
             <Link 
              key={index}
              to={link.url}
              target='_blank'
              className={`d-flex justify-content-center align-items-center social-links ${isDarkTheme ? 'text-portfolio-primary' : 'text-dark'} `}
              >
                {link.icon}
              </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer