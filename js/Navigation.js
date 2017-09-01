import React from 'react'
import { NavLink as RRNavLink, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div className='sticky-top'>
        <Navbar color='faded' inverse toggleable role='navigation' >
          <NavbarToggler type='button' right onClick={this.toggle} />
          <NavbarBrand tag={Link} to='/'>
            <img
              src='./_public/favicon.png'
              height='30'
              className='d-inline-block align-top'
              alt='brand'
            />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink activeClassName='active' tag={RRNavLink} exact to='/'>
                  ГОЛОВНА
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName='active'
                  tag={RRNavLink}
                  to='/products'
                >
                  ПРОДУКЦІЯ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName='active'
                  tag={RRNavLink}
                  to='/services'
                >
                  ПОСЛУГИ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName='active' tag={RRNavLink} to='/price'>
                  ЦІНИ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName='active'
                  tag={RRNavLink}
                  to='/contacts'
                >
                  КОНТАКТИ
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
