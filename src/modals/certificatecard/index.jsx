import { useContext } from "react";
import { IoEyeSharp } from "react-icons/io5";

/* context */
import { PortfolioContext } from "../../context/Portfoliocontext";

function CertificateCard({title , issuedBy , imgSrc , imgAlt , completedOn , url}) {

    const {isDarkTheme} = useContext(PortfolioContext) ;

  return (
   <div className={`container py-2 ${isDarkTheme ? 'certificate-card-dark' : 'certificate-card-light'}`}>

    <div className="row  justify-content-center">
        <div className="col-12 col-lg-4">
            <img src={imgSrc} alt={imgAlt} className="card-img-top px-3" />
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column  justify-content-center">
            <h4 className="fs-4 fw-bold">
                {title}
            </h4>
            <h5 >
                Issued By : {issuedBy}
            </h5>
            <div className='d-flex justify-content-between align-items-center gap-3 pe-3'>
            <p className="mb-0">
                Completed on : {completedOn}
            </p>
            <a className="btn resume-btn text-light" href={url} target="_blank" title={title}>
                View <span></span> <IoEyeSharp size={20}/>
            </a>
            </div>
        </div>
    </div>
   </div>
  )
}

export default CertificateCard