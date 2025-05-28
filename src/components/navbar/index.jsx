import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

/* react bootstrap */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

/* react icons */
import { FaMoon, FaRegMoon } from 'react-icons/fa';

/* context */
import { PortfolioContext } from '../../context/Portfoliocontext';

function PortfolioNavbar() {
  const { isDarkTheme, setIsDarkTheme, navs, links , location } = useContext(PortfolioContext);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={isDarkTheme ? { backgroundColor: '#000000' } : { backgroundColor: '#ffffff' }}
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand
              href="/"
              className={`flex-grow-1 ${isDarkTheme ? 'text-portfolio-primary' : 'text-dark'}`}
            >
              <span className="fw-bold">Sd.</span>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={`${isDarkTheme ? 'bg-light' : ''}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={`${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            >
              <Offcanvas.Header
                closeButton
                className={`border-bottom ${
                  isDarkTheme ? 'offcanvas-header-dark border-light' : 'offcanvas-header-light border-dark'
                }`}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 pe-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-1">
                    {navs.map((nav, index) => {
                      const isActive = location.pathname === nav.url;
                      return (
                        <Nav.Link
                          key={index}
                          href={nav.url}
                          title={nav.title}
                          className={`d-flex justify-content-center align-items-center gap-1 fw-bold nav-link-custom
                            ${isDarkTheme ? 'text-portfolio-primary' : 'text-dark'} 
                            ${isActive ? 'active-nav' : ''}`}
                        >
                          {nav.icon}
                          <span>{nav.title}</span>
                        </Nav.Link>
                      );
                    })}
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-3 gap-lg-0">
                    {links.map((link, index) => (
                      <Nav.Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        className={`d-flex justify-content-center align-items-center social-links 
                          ${isDarkTheme ? 'text-portfolio-primary' : 'text-dark'}`}
                      >
                        {link.icon}
                      </Nav.Link>
                    ))}

                    {isDarkTheme ? (
                      <FaRegMoon className="ms-2 text-portfolio-primary" size={20} onClick={() => setIsDarkTheme(false)} />
                    ) : (
                      <FaMoon className="ms-2 text-dark" size={20} onClick={() => setIsDarkTheme(true)} />
                    )}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default PortfolioNavbar;
