import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Twitter } from "../assets/images/twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/images/linkedIn.svg";
import { ReactComponent as Github } from "../assets/images/github.svg";

const Social = styled.aside`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:absolute;
    right:10px;
    top:90px;
    padding:5px;  
    border-radius:30px;
    position:fixed;
    background: ${ ( { theme } ) => theme.socialBg };

    @media screen and (min-width:768px)
    {
        top:230px;
        padding:5px 10px;
    }

    svg
    {
        margin:10px auto;
        fill: ${ ( { theme } ) => theme.socialText };
    }
`;


function SocialBtns ()
{
    return (
        <Social>

            <a
                href="https://twitter.com/okafor_irene"
                target="_blank"
                rel="noreferrer"
            >
                <Twitter /></a>



            <a
                href="https://www.linkedin.com/in/irene-okafor-521861115/
            "
                target="_blank"
                rel="noreferrer"
            ><LinkedIn /></a>

            <a
                href="https://github.com/Irene-24"
                target="_blank"
                rel="noreferrer"
            ><Github /></a>


        </Social>
    );
}

export default SocialBtns;
