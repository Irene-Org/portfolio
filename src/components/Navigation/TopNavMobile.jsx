import React from 'react';
import styled from 'styled-components';
import Link from "./Link";
import Logo from "./Logo";
import ToggleButtons from "./ToggleButtons";
import { navList } from "../../utils";

const StyledNavMobile = styled.nav`
 @media screen and (min-width:768px)
    {
        display:none;
    }

    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100vw;
    padding:10px 20px;
    background: ${ ( { theme } ) => theme.bodyBg };
    box-shadow: 2px 4px 4px ${ ( { theme } ) => theme.shadow };
    transition: box-shadow 0.2s ease,
                background 0.2s ease;
    display:flex;
    justify-content:space-between;
    align-items:center;

`;

function TopNavMobile ( { toggleTheme, mode } ) 
{
    return (
        <StyledNavMobile>

            <Logo />
            <ToggleButtons
                mode={ mode }
                toggler={ toggleTheme } />
        </StyledNavMobile>
    );
}

export default TopNavMobile;
