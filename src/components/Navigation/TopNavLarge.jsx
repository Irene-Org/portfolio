import React from 'react';
import styled from 'styled-components';
import Link from "./Link";
import Logo from "./Logo";
import ToggleButtons from "./ToggleButtons";
import { navList } from "../../utils";


const StyledNavLarge = styled.nav`     
    display:none;
    @media screen and (min-width:768px)
    {
        position:fixed;
        top:0;
        left:0;
        right:0;
        width:100vw;
        padding:1vw 3vw;
        background: ${ ( { theme } ) => theme.bodyBg };
        box-shadow: 2px 4px 4px ${ ( { theme } ) => theme.shadow };
        transition: box-shadow 0.2s ease,
                    background 0.2s ease;
        display:flex;
        justify-content:space-between;
        align-items:center;


        .links
        {
            display:flex;
            justify-content:space-between;
            align-items:center;  
            list-style-type:none;
            text-transform:capitalize;
            font-weight:700;
            min-width:65%;
            margin-right:10px;

            @media screen and (min-width:1200px)
            {
                min-width:50%;
            }


            .nav-item
            {
                font-size: 1.2rem;
                cursor:pointer;
                padding: 0 4px;
                border-bottom: 3px solid transparent;
                position:relative;

                & a:hover,
                & a.active
                {
                    color: ${ ( { theme } ) => theme.highlight };
                    transition: color 0.2s ease;
                }

                & a.active:after
                {
                    content: " ";
                    width:100%;
                    height:4px;
                    border-radius:2px;
                    background:${ ( { theme } ) => theme.highlight };
                    position:absolute;
                    left:0;
                    bottom:-6px;
                }                   
                
            }

            .toggler
            {
                padding:0;
                width:40px;
                height:40px;
            }
        }
    }
`;

function TopNavLarge ( { toggleTheme, mode } ) 
{
    return (
        <StyledNavLarge>

            <Logo />

            <ul className="links" >
                {
                    navList.map( item =>
                        (
                            <li key={ item } className="nav-item" >
                                <Link
                                    activeClass="active"
                                    to={ item }
                                    spy={ true }
                                    smooth={ true }
                                    offset={ -100 }
                                    duration={ 500 }
                                >
                                    { item }
                                </Link>
                            </li>
                        ) )
                }

                <li className="nav-item">
                    <a
                        href="http://localhost:3000/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Résumé</a>
                </li>

                <li className="nav-item toggler">
                    <ToggleButtons
                        mode={ mode }
                        toggler={ toggleTheme } />
                </li>

            </ul>





        </StyledNavLarge>
    );
}

export default TopNavLarge;
