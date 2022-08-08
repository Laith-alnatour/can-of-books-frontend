import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './Auth/AuthButtons';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './mystyle.module.css'; 


function Header () {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" > 
        <Navbar.Brand><h3 className={styles.bigblue}>My Favorite Books</h3></Navbar.Brand>
        <NavItem><Link to="/" className={styles.bigblue}>Home</Link></NavItem>
        {isAuthenticated &&
          <NavItem><Link to="/profile" className={styles.bigblue}>User Profile</Link></NavItem>
        }
        <NavItem><Link to="/about" className={styles.bigblue}>About</Link></NavItem>
        <AuthButtons className={'Auth'} />
      </Navbar>
    </>
  )
}

export default Header;