import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import {menuData} from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'            

const Nav = styled.nav`
    height: 60px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    z-index: 100;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${ NavLink }
    font-style: italic;
    font-size: 30px;
    text-decoration: underline;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${   NavLink   }
    color: #fff;
`;


const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;   

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const Navbar = () => {
    return (
        <Nav>
            <Logo to="/"> MARTIN INC </Logo>
            <MenuBars />

            <NavMenu>
                { menuData.map((item, i)=>(
                    <NavMenuLinks to={item.link} key={i}>
                        {item.title}
                    </NavMenuLinks>
            )) }
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="false"> Contact Us </Button>
            </NavBtn>
        </Nav>
    )
}
