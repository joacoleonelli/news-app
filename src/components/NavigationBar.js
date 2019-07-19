import React from 'react';
import { 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavItem, 
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBNavbarNav, 
    MDBHamburgerToggler 
} from 'mdbreact';
import {
        isMobile
} from "react-device-detect";

import Constants from "../utils/constants";

class NavigationBar extends React.Component {
         state = {
            isOpen: false
          };
          
          toggleCollapse = () => {
            this.setState({ isOpen: !this.state.isOpen });
          }
          
          render() {
            return (
                <MDBNavbar className="nav-bar" dark expand="md">
                  <MDBNavbarBrand>
                    <strong className="text-white">Categories</strong>
                  </MDBNavbarBrand>
                  {
                    isMobile ? 
                      <MDBHamburgerToggler color="#ffffff" id="hamburger1" onClick={this.toggleCollapse}/>
                       : <MDBNavbarToggler onClick={this.toggleCollapse} />
                  }
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" onClick={this.props.clickHandler}>Headlines</MDBNavLink>
                      </MDBNavItem>
                      { 
                        Constants.CATEGORIES.map(category => (
                          <MDBNavItem key={category} active>
                            <MDBNavLink to="#!" name={category.toLowerCase()} onClick={this.props.clickHandler}>{category}</MDBNavLink>
                          </MDBNavItem>
                        )) 
                      }
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBNavbar>
              );
            }
}

export default NavigationBar;