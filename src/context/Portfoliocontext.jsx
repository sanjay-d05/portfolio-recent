import { createContext, useState } from "react";

/* react icons */
import {
  FaHome ,
  FaProjectDiagram ,
  FaPenNib ,
} from 'react-icons/fa' ;
import {
  IoPersonSharp ,
  IoLogoGithub ,
  IoLogoLinkedin
} from 'react-icons/io5' ;
import {GrCertificate} from 'react-icons/gr' ;
import { SiLeetcode } from "react-icons/si";
import {
   DiHtml5 ,
   DiCss3 ,
   DiReact ,
   DiBootstrap ,
   DiNodejs ,
   DiMongodb ,
   DiMysql,
   DiPhp ,
   DiPython ,
   DiGit ,
   DiJava
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoFirebase } from "react-icons/io5";
import {IoLogoJavascript} from 'react-icons/io' ;
import { SiTailwindcss } from "react-icons/si";
import {
     SiVercel ,
     SiPostman ,
     SiCanva
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import {IoLogoFigma } from 'react-icons/io5' ;

/* assets/projects */
import encrypt_decrypt from '../assets/projects/encrypt-decrypt.jpeg' ;
import live_weather from '../assets/projects/live-weather.jpeg' ;
import trendy_tales from '../assets/projects/trendy-tales.jpeg' ;
import wedding_photography from '../assets/projects/wedding-photography.jpeg' ;
import todo from '../assets/projects/todo.jpeg' ;
import gpt3 from '../assets/projects/gpt3.jpeg' ;
import mind_sprint from '../assets/projects/mind-sprint.jpeg' ;

import certficate1 from '../assets/certificates/coursera1.jpg';
import certficate2 from '../assets/certificates/coursera2.jpg';
import certficate3 from '../assets/certificates/coursera3.jpg';
import certficate5 from '../assets/certificates/coursera5.jpg';
import certificate6 from '../assets/certificates/udemy1.jpg';
import certificate7 from '../assets/certificates/udemy2.jpg';
import { useLocation } from "react-router-dom";


export const PortfolioContext = createContext() ;

const PortfolioProvider = ({children}) => {

    const location = useLocation() ;

    const [load ,setLoad] = useState(true) ;
    const [isDarkTheme , setIsDarkTheme] = useState(true) ;

    const navs = [
  {
    icon : <FaHome size={20}/> ,
    title : 'Home' ,
    url : '/'
  } ,
  {
    icon : <IoPersonSharp size={20}/> ,
    title : 'About' ,
    url : '/about'
  } ,
  {
    icon : <FaProjectDiagram size={20}/> ,
    title : 'Projects' ,
    url : '/projects'
  } ,
  {
    icon : <GrCertificate size={20}/> ,
    title : 'Certificates' ,
    url : '/certificates'
  } ,
  {
    icon : <FaPenNib size={20}/> ,
    title : 'Blogs' ,
    url : '/blogs'
  } ,
    ] ;

    const links = [
      {
        icon: <IoLogoGithub size={20}/> ,
        title : 'Github' ,
        url : 'https://github.com/sanjay-d05'
      } ,
      {
        icon: <IoLogoLinkedin size={20}/> ,
        title : 'Linkedin' ,
        url : 'https://www.linkedin.com/in/sanjayd05/'
      } ,
      {
        icon: <SiLeetcode size={20}/> ,
        title : 'Leetcode' ,
        url : 'https://leetcode.com/u/sanjay_05_08_17/'
      } ,
    ] ;

    const techstack = [
      {
        icon : <DiHtml5 style={{marginBottom:'15px'}} /> ,
        title :'HTML5'
      } ,
      {
        icon : <DiCss3 style={{marginBottom:'15px'}} /> ,
        title : 'CSS3'
      } ,
      {
        icon : <IoLogoJavascript style={{marginBottom:'15px'}} /> ,
        title : 'JavaScript'
      } ,
      {
        icon : <DiReact style={{marginBottom:'15px'}} /> ,
        title : 'React JS'
      } ,
      {
        icon : <DiBootstrap style={{marginBottom:'15px'}} /> ,
        title : 'Bootstrap CSS'
      } ,
      {
        icon : <SiTailwindcss style={{marginBottom:'15px'}} /> ,
        title : 'Tailwind CSS'
      } ,
      {
        icon : <DiNodejs style={{marginBottom:'15px'}} /> ,
        title : 'Node JS'
      } ,
      {
        icon : <CgCPlusPlus style={{marginBottom:'15px'}} /> ,
        title : 'C++'
      } ,
      {
        icon : <DiMongodb style={{marginBottom:'15px'}} /> ,
        title : 'MongoDB'
      } ,
      {
        icon : <DiMysql style={{marginBottom:'15px'}} /> ,
        title : 'MySQL'
      } ,
      {
        icon : <DiPhp style={{marginBottom:'15px'}} /> ,
        title : 'PHP'
      } ,
      {
        icon : <DiPython style={{marginBottom:'15px'}} /> ,
        title : 'Python'
      } ,
      {
        icon : <DiGit style={{marginBottom:'15px'}} /> ,
        title : 'Git'
      } ,
      {
        icon : <DiJava style={{marginBottom:'15px'}} /> ,
        title : 'Java'
      } ,
      {
        icon : <IoLogoFirebase style={{marginBottom:'15px'}} /> ,
        title : 'Firebase'
      } ,
    ] ;

    const toolstack = [
      {
        icon : <BiLogoVisualStudio tyle={{marginBottom:'15px'}} /> ,
        title : 'VS Code'
      } ,
      {
        icon : <SiPostman tyle={{marginBottom:'15px'}} /> ,
        title : 'Postman'
      } ,
      {
        icon : <SiVercel tyle={{marginBottom:'15px'}} /> ,
        title : 'Vercel'
      } ,
      {
        icon : <SiCanva tyle={{marginBottom:'15px'}} /> ,
        title : 'Canva'
      } ,
      {
        icon : <IoLogoFigma tyle={{marginBottom:'15px'}} /> ,
        title : 'Figma'
      } ,
    ];

    const projects = [
      {
        imgSrc : encrypt_decrypt ,
        title : 'Encryption and Decryption' ,
        description : 'Encryption and Decryption is shown in real time' ,
        githubLink : 'https://github.com/sanjay-d05/encryption-decryption' ,
        demoLink : 'https://sanjay-d05.github.io/encryption-decryption/'
      } ,
      {
        imgSrc : live_weather ,
         title : 'Live Weather App' ,
        description : 'It Generates real time weathers and weather changes using weather APIs.' ,
        githubLink : 'https://github.com/sanjay-d05/live-weather-app' ,
        demoLink : 'https://live-weather-app-eta.vercel.app/' ,
      } ,
      {
        imgSrc : trendy_tales ,
        title : 'Trendy Tales' ,
        description : 'It showcases the front-end and UI/UX of an e-commerce application' ,
        githubLink : 'https://github.com/sanjay-d05/trendy-tales' ,
        demoLink : 'https://trendy-tales.vercel.app/' 
      } ,
      {
        imgSrc : todo ,
        title : 'Todo Task Manager' ,
        description : 'Helps you keep track of your daily tasks ' ,
        githubLink : 'https://github.com/sanjay-d05/todo-list' ,
        demoLink : 'https://todo-list-drab-mu-82.vercel.app/'
      } ,
      {
        imgSrc : gpt3 ,
        title : 'GPT3' ,
        description : 'Its an static app which showcases Css skills' ,
        githubLink : 'https://github.com/sanjay-d05/static-gpt-3' ,
        demoLink : 'https://static-gpt-3.vercel.app/'
      } ,
      {
        imgSrc : mind_sprint ,
        title : 'Mind Sprint' ,
        description : 'A Quiz app to test your basic programming knowledge and skills' ,
        githubLink : 'https://github.com/sanjay-d05/mind-sprint' ,
        demoLink : 'https://mind-sprint.vercel.app/'
      }
    ] ;

    const certificates = [
      { 
        title: 'Introduction to Web Development with HTML, CSS, JavaScript', 
        issuedBy: 'IBM', 
        imgSrc: certficate1, 
        completedOn: 'Nov 4, 2023', 
        url: 'https://coursera.org/verify/Q68KFZTUXVG7' 
      },
      { 
        title: 'Introduction to Web Development', 
        issuedBy: 'UC Davis', 
        imgSrc: certficate2, 
        completedOn: 'Dec 8, 2023', 
        url: 'https://coursera.org/verify/LXGHG5KCWZPM' 
      },
      { 
        title: 'Developing Front-End Apps with React', 
        issuedBy: 'IBM', 
        imgSrc: certficate3, 
        completedOn: 'Jan 4, 2024', 
        url: 'https://coursera.org/verify/AX9P46GT5WUN' 
      },
      { 
        title: 'Build a computer vision app with Azure Cognitive Services', 
        issuedBy: 'Microsoft', 
        imgSrc: certficate5, 
        completedOn: 'Jul 3, 2024', 
        url: 'https://coursera.org/verify/M32RZHTXVYRQ' 
      },
      { 
        title: 'Python & Java: Master Backend & Frontend Developments', 
        issuedBy: 'Udemy', 
        imgSrc: certificate7, 
        completedOn: 'Sep 3, 2024', 
        url: 'https://ude.my/UC-34642dc2-882e-40d1-a536-465bf2de4a4b' 
      },
      { 
        title: 'Databases with Python: MySQL, SQLite, MongoDB', 
        issuedBy: 'Udemy', 
        imgSrc: certificate6, 
        completedOn: 'Sep 4, 2024', 
        url: 'https://ude.my/UC-f1b98072-128c-4221-ac8c-63d0667796ba' 
      }
    ];

    const blogs = [
      {
        title : 'React.js for Beginners: A Complete Guide' ,
        desc : 'React.js is a popular JavaScript library used for building user interfaces, especially for single-page applications (SPAs).' ,
        blogUrl : 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/reactjs-for-beginners-complete-guide-to.html' ,
        technology : 'React' ,
        duration : 4
      } ,
      {
        title : 'Getting Started with Node.js: A Beginners Guide' ,
        desc : 'Node.js is a JavaScript runtime environment used to run code outside the browser,ideal for building scalable backend services.' ,
        blogUrl : 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-nodejs-beginners.html' ,
        technology : 'Node' ,
        duration : 5 
      } ,
      {
        title : 'Getting Started with Express.js' ,
        desc : 'Express.js is a minimal and flexible framework for Node.js used to build web apps and APIs with a robust set of features.' ,
        blogUrl : 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-expressjs.html' ,
        technology : 'Express' ,
        duration : 3 
      } ,
      {
        title : 'MongoDB : A Beginner’s Guide to NoSQL Databases' ,
        desc : 'MongoDB is a popular NoSQL database used for storing data in a flexible,JSON-like format,commonly used in modern web applications.' ,
        blogUrl : 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/mongodb-beginners-guide-to-nosql.html' ,
        technology : 'MongoDB' ,
        duration : 5 
      } ,
      {
        title : 'Getting Started with the MERN Stack' ,
        desc : 'The MERN stack is a popular JavaScript-based technology stack used for building full-stack web applications.' ,
        blogUrl : 'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-mern-stack.html' ,
        technology : 'MERN' ,
        duration : 8 
      }
    ] ;


    const value ={
        location ,
        load , setLoad ,
        isDarkTheme , setIsDarkTheme ,
        navs , links ,
        techstack ,
        toolstack ,
        projects ,
        certificates ,
        blogs
    } ;

    return(
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    )
} ;

export default PortfolioProvider ;