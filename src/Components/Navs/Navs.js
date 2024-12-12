import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link } from 'react-scroll';
import './Navs.css';
// import { Link } from "react-router-dom";

function Navs(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container className="py-2">
          <Navbar.Brand href="#home">Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className="first">Home</Link>
              <Link to="services" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>services</Link>
              <Link to="banner" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>banner</Link>
              <Link to="pricing" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>pricing</Link>
              <Link to="blog" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>blog</Link>
              <Link to="features" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>features</Link>
              <Link to="team" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>team</Link>
              <Link to="contact" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>contact us</Link>
            </Nav>
            <Form>
              <Button variant="try">Try it Free</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navs;