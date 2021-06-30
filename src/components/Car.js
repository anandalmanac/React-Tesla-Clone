import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import CountUp from 'react-countup';
import Slider from './ImageSlider';
import Features from './Features';
import ElectricPowertrain from './ElectricPowertrain';
import Footer from './Footer'
import data from '../data';

function Car({model}) {
    let Data=model;;
    console.log(Data)
    return (
        <Container>
             <Section 
             title={Data.title}
             description={Data.description}
             backgroundImg={Data.carbg}
             invert={Data.invert}
            
            
            />
            <Specs>
                <SpecWrap>
                <Spec>
                    <h1><CountUp className='counter' end={Data.range} duration={5}/>mi</h1>
                    <p>Range (est.)</p>
                </Spec>
                <Spec>
                    <h1><CountUp  className='counter' start={1.00} end={Data.pickup} decimals={2} duration={5}/>s</h1>
                    <p>0-60 mph*</p>
                </Spec>
                <Spec>
                    <h1><CountUp  className='counter' end={Data.topSpeed} duration={5}/>mph</h1>
                    <p>Top Speed</p>
                </Spec>
                <Spec>
                    <h1><CountUp  className='counter' start={900} end={Data.peakPower} duration={5}/>hp</h1>
                    <p>Peak Power</p>
                </Spec>
                </SpecWrap>
           
                <Order>
                    <Spec>
                    <a href="">Order Now</a>
                    </Spec>
                </Order>
               
            </Specs>
            <Graddiv>
        
            </Graddiv>
            <Interior>
                <h1>All-New Interior</h1>
            </Interior>
            <Graddiv>
        
            </Graddiv>
            <SliderWrapp>
                <Slider />
            </SliderWrapp>
            <Features />

            <ElectricPowertrain Data={Data} />
            <Footer Data={Data}/>
            
        </Container>
    )
}

export default Car

const Container=styled.div`
background-color: black;

`
const Specs=styled.div`
position: absolute;
bottom:20px;
width: 100%;
justify-content: space-between;
align-items: center;
display: flex;


@media screen and (max-width:1020px){
    flex-direction: column;
    bottom:50px;
}
`

const Spec=styled.div`

position: relative;
z-index:2;

a{
    color: rgba(255,255,255,0.5);
    border: 2px gray solid ;
    padding: 12px 24px;
    border-radius: 40px;
    transition: .2s all ease-in-out;
    
    
    &:hover{
        transform: scale(1.01);
        color: lightgray;
        border: 2px lightgray solid ;
    }
}
h1,p,.counter{

    color: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    z-index:2;

    
}
&:hover h1,&:hover p,&:hover .counter{
color: lightgray;
}


    @media screen and (max-width:1020px){
        h1{
            font-size: 25px;
           
        }
        a{
            padding: 12px 20vw;
        }
    
}

 @media screen and (max-width:720px){
     h1{
         font-size: 16px;
     }
     p{
         font-size: 8px;
     }
 }


`

const SpecWrap=styled.div`
width: 80%;
display:flex;
justify-content: space-evenly;

 @media screen and (max-width:1020px){
       margin-bottom: 50px;
 }

`
const Order=styled.div`

margin-right: 20px;

`



const Graddiv=styled.div`
    height: 500px;
    position: absolute;
    width: 100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1),rgba(0,0,0,0));
    
    margin-top: -250px;

`

const Interior=styled.div`
    height:100vh;
    background-image: url(https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1{
        padding-top: 50px;
        width: 100%;
        color: white;
        position: absolute;
        text-align: center;
    }

`

const SliderWrapp=styled.div`

width: 70vw;
overflow: hidden;
display: flex;
justify-content: center;
margin-left: auto;
margin-right: auto;
@media screen and (max-width:780px){
    width: 95vw;
}

`