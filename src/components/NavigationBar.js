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
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="business" onClick={this.props.clickHandler}>Business</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="entertainment" onClick={this.props.clickHandler}>Entertainment</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="general" onClick={this.props.clickHandler}>General</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="health" onClick={this.props.clickHandler}>Health</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="science" onClick={this.props.clickHandler}>Science</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="sports" onClick={this.props.clickHandler}>Sports</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem active>
                        <MDBNavLink to="#!" name="technology" onClick={this.props.clickHandler}>Technology</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                    {/*<MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBFormInline waves>
                          <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                          </div>
                        </MDBFormInline>
                      </MDBNavItem>
                    </MDBNavbarNav>*/}
                  </MDBCollapse>
                </MDBNavbar>
              );
            }
}

export default NavigationBar;