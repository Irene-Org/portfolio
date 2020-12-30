import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from "../../assets/images/logo.svg";

const frame = keyframes`
{
    0%,100%
    {
        height: 200px;
        width: 270px;
    };

    25%
    {
        height: 150px;
        width: 200px;
    };

    50%
    {
        height: 200px;
        width: 150px;
    };

    75%
    {
        height: 180px;
        width: 80px;

    };
}`;

const button = keyframes`
{  
   0%,100%
   {
    height: 20px;
    width: 80%;
    left: 50%;
    top: calc(100% + 20px);
   }  

   25%
   {
    
    height: 10px;
    width: 80%;
    left: 50%;
    top: calc(100% + 15px);
   }

   50%
   {
    left: 50%;
    height: 12px;
    width: 12px;
    top: 94%;
   }

   75%
   {
    left: 50%;
    height: 6px;
    width: 6px;
    top: 95%;
   }
  
}
`;

const text = keyframes`
    0%,100%
    {
        opacity:0.2
    }

    25%
    {
        opacity:0.4 
    }



    50%
    {
        opacity:0.6 
    }

    
    75%
    {
        opacity:0.8;
    }
`;

const Loader = styled.div`    
    background-color: #484848;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    font-family:"Mulish",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .frame
    {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0E9FA8;
        height: 200px;
        width: 270px;
        border-radius: 8px;
        transition: all;
        animation: ${ frame } 4s cubic-bezier(0.6,1.5,0.6,1) infinite ;

    }

    .screen
    {  
        background-color: #fff;
        height: 86%;
        width: 90%;
        border-radius: 8px; 
        display: flex;
        justify-content: center;
        align-items: center;

        img
        {
            width: 80%;
            height:60%;
        }

    }

    .button-bar
    {
        background-color: #ccc;
        height: 20px;
        width: 80%;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: calc(100% + 20px);
        transform: translateX(-50%);
        animation: ${ button } 4s cubic-bezier(0.6,1.5,0.6,1) infinite ;

    }

    .text
    {
        margin: 0 0 20px;
        font-size:2rem;
        color:#fff;
        opacity:0.2;
        animation: ${ text } 4s cubic-bezier(0.6,1.5,0.6,1) infinite ;

    }
`;

function DeviceLoaders ()
{
    return (
        <Loader>
            <h3 className="text" >Loading ...</h3>
            <div className="frame">
                <div className="screen">
                    <img src={ logo } alt="Irene's logo" />
                </div>
                <div className="button-bar"></div>
            </div>

        </Loader>
    );
}

export default DeviceLoaders;
