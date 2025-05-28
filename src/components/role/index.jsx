import { Typewriter } from 'react-simple-typewriter';

const Role = () => {
  return (
    <h1 className='px-0 fw-bold fs-2 mt-3' style={{color:'#ab3483'}}>
      <Typewriter
       words={
        [
            "Full Stack Developer" ,
            "MERN Stack Developer" ,
            "Web Developer" ,
            "Front-End Developer",
            "Back-End Developer"
        ]
        } 
        loop={true} 
        />
    </h1>
  );
};

export default Role;
