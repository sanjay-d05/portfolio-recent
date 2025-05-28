import React, { useContext } from 'react'
import { PortfolioContext } from '../../context/Portfoliocontext'

function TechStack() {

  const {techstack} = useContext(PortfolioContext) ;

  return (
    <div className="row justify-content-center gap-4">
      {techstack.map((stack , index) => (
        <div key={index} title={stack.title} className="col-4 col-md-2 tech-icons">
          {stack.icon}
        </div>
      ))}
    </div>
  )
}

export default TechStack