import React from 'react';
import styled from 'styled-components';

const StyledOverLay = styled.div`
    width:100vw;
    height:100vh;
    left:0;
    right:0;
    top:0;
    background:rgba(0,0,0,0.4);
    position:fixed;
    z-index:${ props => props.isOpen ? 100000 : -100000 };
    opacity: ${ props => props.isOpen ? 1 : 0 };
    pointer-events: ${ props => props.isOpen ? "auto" : "none" }

`;

function OverLay ( { children, onClick, isOpen } )
{
    return (
        <StyledOverLay isOpen={ isOpen } onClick={ onClick } >
            {children }
        </StyledOverLay>
    );
}

export default OverLay;
