import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from "./Link";
import { navList } from "../../utils";
import OverLay from "../OverLay";


const getMin = () =>
{
    const w = 0.8 * window.innerWidth,
        h = 0.8 * window.innerHeight;

    return Math.min( w, h, 500 );
};

const getTransform = index =>
{
    const step = 360 / 5;

    const angle = index * step;

    const r = 0.8 * ( getMin() / 2 );

    return `rotate( ${ angle }deg ) translate( ${ -r }px, -50% )`;

};

const reverseText = index =>
{
    const offset = index * ( 72 );

    return -( offset );
};

const BottomToggler = styled.button`
    z-index:100000;
    position:fixed;
    width:45px;
    height:45px;
    background: ${ ( { theme } ) => theme.socialBg };    
    right:10px;
    bottom:10px;
    border-radius:50%;
    border:none;
    font-size:2rem;
    transform: ${ props => props.isOpen ? "rotate(90deg)" : "rotate(0)" };
    transition:transform 0.2s linear;
    outline:none;

    @media screen and (min-width:768px)
    {
        display:none;
    }

    > div
    {
        width:5px;
        height:5px;
        border-radius:5px;
        margin: 5px auto;
        background-color: ${ ( { theme } ) => theme.socialText };
    }

`;

const CenterMenu = styled.div`

     position:fixed;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);
     width:${ getMin() }px;
     height:${ getMin() }px;

     .links
     {
        position: relative;
        width: 100%;
        height: 100%;
        transform: translateX(-39px);
     }

        

`;

const StyledLi = styled.li`

    list-style: none;
    text-align: center;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #003848;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    left:50%;
    top:50%;
    transform: rotate(0) translate(-50%,-50%);
    opacity:0;
    transition: transform 0.6s ease-out,    
                opacity 0.4s ease;

    background: ${ ( { theme } ) => theme.socialBg };
    a
    {
        color: ${ ( { theme } ) => theme.socialText } ;
        transform: rotate(${ ( { index } ) => reverseText( index ) }deg)
    }

    ${ props => props.isOpen && css`
         transform: ${ getTransform( props.index ) };
         opacity:1;
        `}; 

`;

function CircleMenu () 
{
    const [ isOpen, setIsOpen ] = useState( false );

    const toggleMenu = () =>
    {
        setIsOpen( !isOpen );
    };

    useEffect( () => 
    {
        const close = () => setIsOpen( false );

        window.addEventListener( "resize", close );

        return () => window.removeEventListener( "resize", close );
    }, [] );

    return (
        <>
            {

                <OverLay
                    isOpen={ isOpen }
                    onClick={ toggleMenu } >

                    <CenterMenu>
                        <ul className="links" >
                            <>
                                {
                                    navList.map( ( item, i ) =>
                                        (
                                            <StyledLi
                                                isOpen={ isOpen }
                                                index={ i }
                                                key={ item } >
                                                <Link
                                                    activeClass="active"
                                                    to={ item }
                                                    spy={ true }
                                                    smooth={ true }
                                                    offset={ -100 }
                                                    duration={ 500 }
                                                    toggle={ toggleMenu }

                                                >
                                                    { item }
                                                </Link>
                                            </StyledLi>
                                        ) )
                                }

                                <StyledLi
                                    isOpen={ isOpen }
                                    index={ 4 }  >

                                    <a
                                        href="http://localhost:3000/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Résumé</a>

                                </StyledLi>


                            </>
                        </ul>

                    </CenterMenu>

                </OverLay>
            }

            <BottomToggler
                isOpen={ isOpen }
                onClick={ toggleMenu }>
                <div ></div>
                <div ></div>
                <div ></div>
            </BottomToggler>
        </>
    );
}

export default CircleMenu;
