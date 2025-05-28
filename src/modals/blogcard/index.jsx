import { useContext } from 'react';

/* react bootstrap */
import Card from 'react-bootstrap/Card';

/* react icons */
import { FaArrowRight } from "react-icons/fa";

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

function BlogCard({title , desc , blogUrl , technology , duration}) {

    const {isDarkTheme} = useContext(PortfolioContext) ;

  return (
    <Card
    style={{
        width: '18rem',
        background : 'transparent'
    }}
    className={`${isDarkTheme ? 'blog-card-dark' : 'shadow'}`} 
    >
      <Card.Body>
        <span style={{backgroundColor:'#ab3483' , color:'#ffffff'}} className='rounded p-1'>
          {technology}
        </span>
        <Card.Title style={{color:'#ab3483'}} className='mt-2'>
            {title}
        </Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <Card.Link href={blogUrl} target='_blank' className={`text-decoration-none fw-bold ${isDarkTheme ? 'view-blog-dark' : 'view-blog-light'}`} style={{color:'#ab3483'}}>
           View More <FaArrowRight />
          </Card.Link> 
          <span>
            {duration} min read
          </span>
        </div>
      </Card.Body>
    </Card>

  )
}

export default BlogCard