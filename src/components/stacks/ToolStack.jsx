import React, { useContext } from 'react' ;

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

function ToolStack() {

  const {toolstack} = useContext(PortfolioContext) ;
  
  return (
    <div className="row justify-content-center gap-4">
      {
        toolstack.map((stack , index) => (
          <div key={index} title={stack.title} className="col-4 col-md-2 tech-icons">
            {stack.icon}
        </div>
        ))
      }
    </div>
  )
}

export default ToolStack