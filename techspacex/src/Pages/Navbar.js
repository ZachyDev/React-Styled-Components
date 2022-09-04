import React from 'react'
import { NavbarWrapper, Title, NavbarMain, NavbarUl,NavbarLi } from '../StyledComponents/StyledComponents'
function Navbar() {
  return (
    <>
       <NavbarWrapper>
          <Title>
            TechspaceX.
          </Title>
          <NavbarMain>
            <NavbarUl>
              <NavbarLi>
                Home
                About
                Contact Us
              </NavbarLi>
            </NavbarUl>
          </NavbarMain>
       </NavbarWrapper>
    </>
  )
}

export default Navbar;