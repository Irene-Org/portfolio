import React from 'react';
import styled from 'styled-components';

import moon from "../../assets/images/moon.svg";
import sun from "../../assets/images/sun.svg";

const Toggle = styled.button`    

    border:none;
    background:none;
    position:relative;
    display:inline-block;
    min-width:30px;
    min-height:30px;
  

     @media screen and (min-width:768px)
     {
        width:100%;
        height:100%;
     }

    img
    {
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        transition: opacity 0.2s ease;
    }

    .sun
    {
        
        opacity: ${ ( props ) => props.mode === "light" ? 1 : 0 };
        
    }

    .moon
    {
        opacity: ${ ( props ) => props.mode === "dark" ? 1 : 0 };
        
    }


`;

function ToggleButtons ( { toggler, mode } ) 
{


    return (
        <Toggle tabIndex="0" mode={ mode } onClick={ toggler }>

            <img

                className="moon"
                src={ moon }
                alt="Moon icon" />

            <img

                className="sun"
                src={ sun }
                alt="Sun icon" />

        </Toggle>
    );
}

export default ToggleButtons;
