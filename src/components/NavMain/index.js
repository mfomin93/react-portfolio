import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Home from '../../pages/Home'
import Contact from '../../pages/Contact';
import Projects from '../../pages/Projects';

const NavMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HashRouter>
      <Navbar expand="md" className='wholeNav'>
            <NavbarBrand><Link to={'/'} id='navName'>Mark Fomin</Link></NavbarBrand>
            <NavbarToggler onClick={toggle} style={{backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='-10 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")`, borderColor: 'white'}}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink className='navLinks'><Link to={'/projects'} className='nav-link'>Projects</Link></NavLink>
                </NavItem>
                <NavItem>
                <NavLink className='navLinks'><a href={'https://pdfhost.io/v/xoxnxJzXl_Microsoft_Word_Resume202007090320docx.pdf'} className='nav-link'>Resume</a></NavLink>
                </NavItem>
                <NavItem>
                <NavLink className='navLinks'><Link to={'/contact'} className='nav-link'>Contact</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
    </HashRouter>
          
  );
}

export default NavMain;