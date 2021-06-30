import React from 'react'
import styled from 'styled-components'
import {Reveal} from 'react-awesome-reveal'


import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0, 0, 0);
  }
`;


function Features() {
    return (
        <Container>
            <Reveal keyframes={customAnimation} >
                 <Feature>
                <Left>
                     <img src="./images/game.jpg" alt="" />
                </Left>

               
                <Right>
                    <h2>Game from Anywhere</h2>
                    <p>
                     Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.
               
                    </p>
                   
                 </Right>

            </Feature>
            </Reveal>
           


                         <Reveal keyframes={customAnimation} >
                 <Feature style={{flexDirection:'row-reverse'}}>
                <Left>
                     <img src="./images/audio.jpg" alt="" />
                </Left>

               
                <Right>
                    <h2>Your Best Audio System</h2>
                    <p>
                     
                    A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.
                    </p>
                   
                 </Right>

            </Feature>
            </Reveal>

                        <Reveal  keyframes={customAnimation}>
                 <Feature >
                <Left>
                     <img src="./images/connected.jpg" alt="" />
                </Left>

               
                <Right>
                    <h2>Stay Connected</h2>
                    <p>
                     
Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.
                    </p>
                   
                 </Right>

            </Feature>
            </Reveal>


                        <Reveal  keyframes={customAnimation}>
                 <Feature style={{flexDirection:'row-reverse'}}>
                <Left>
                     <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop" alt="" />
                </Left>

               
                <Right>
                    <h2>Real Storage</h2>
                    <p>
                     With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.
                    </p>
                   
                 </Right>

            </Feature>
            </Reveal>


        </Container>
    )
}

export default Features



const Container=styled.div`
display: flex;
flex-direction: column;
align-items:center;
padding-bottom: 50px;


`
const Feature=styled.div`
width:80vw;
display: flex;

@media screen and (max-width:1020px){
    width: 100vw;
    flex-direction: column !important;
    h2,p{
        margin: 0 !important;
        padding: 20px;
    }
    h2{
        font-size: 16px;
        padding-bottom: 0;
    }
    p{
        font-size:12px;
        width: 300px;
    }
}



`
const Left=styled.div`
flex:0.5;

img{
    width:100%;
    
}


`
const Right=styled.div`


flex:0.5;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
h2{ 
    margin-left: 80px;

    color:white;
    margin-bottom:30px;
}
p{
    text-align:left;
    color:lightgray;
    margin-left: 80px;
}


`