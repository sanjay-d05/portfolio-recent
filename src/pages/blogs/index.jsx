import React, { useContext } from 'react' ;

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

/* modals */
import {BlogCard} from '../../modals/modal' ;

function Blogs() {

  const {isDarkTheme , blogs} = useContext(PortfolioContext) ;

  return (
    <div className={`portfolio-container px-1 px-lg-2 ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>

      <div className="container">

        <h5 className='text-center fs-1'>
          MY {" "}
          <span style={{color:'#ab3483'}}>
            <strong>
              Blogs
            </strong>
          </span>
        </h5>
        <p className='fs-5 text-center px-2'>
          Below are few blogs I've worked on recently
        </p>

        <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-4 py-5">

          {blogs.map((blog , index) => (
            <BlogCard 
            title={blog.title}
            desc={blog.desc}
            blogUrl={blog.blogUrl}
            technology={blog.technology}
            duration={blog.duration}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blogs