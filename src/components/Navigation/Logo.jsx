import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";

const StyledLogo = styled.button`
        cursor:pointer;
        text-align:center;
        background:none;
        border:none;
        svg path
        {
            fill: ${ ( { theme } ) => theme.logo };
        }

`;

function Logo ()
{

    return (
        <StyledLogo
            onClick={ () => scroll.scrollToTop( { duration: 300 } ) } >
            <MyLogo />
        </StyledLogo>
    );
}

export default Logo;
