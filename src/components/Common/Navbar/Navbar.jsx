import React from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components'
import Logo from '../../../assets/Logo.png';


const Navbar = () => {
  return (
    <StyledNavbar>
        <Icon icon="ci:menu-alt-03" color="#484848" width="36" height="36" />
            <Logo />
        <Icon icon="akar-icons:shopping-bag" color="#484848" width="32" height="32" />
    </StyledNavbar>
  )
}

const StyledNavbar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export default Navbar