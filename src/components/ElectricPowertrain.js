import React from 'react'
import Reveal from 'react-awesome-reveal'
import styled from 'styled-components'
import Specs from './Specs'
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



function ElectricPowertrain({Data}) {
    console.log(Data)
    return (
        <Container>
            <Reveal keyframes={customAnimation} >
            <Content>
                <h1>
                    
                    Electric Powertrain
                </h1>
                <p>
                    Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
                </p>
                

            </Content>
            <Image>
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5d2ce6ea-7207-4843-9b52-f97deb00a2b2/bvlatuR/std/960x450/Model-S-Performance-Dual-Motor-Mobile" alt="" />
            </Image>
            <EPdivWrapper>
                {Data.EPdata.map(data=>(
                    <EPdiv>
                <h2>{data.heading}</h2>
                <p>{data.description}</p>
                <Specs Data={data}></Specs>
                </EPdiv>

                ))}
                
            </EPdivWrapper>
            </Reveal>
        </Container>
    )
}

export default ElectricPowertrain


const Container=styled.div`

display:flex;
flex-direction:column;
align-items:center;

background-color: whitesmoke;


`


const Content=styled.div`
margin:30px 0px;
width:50vw;

h1,p{
    text-align:left;
}
h1{
    margin-bottom: 30px;
}
@media screen and (max-width:1020px){
    width: 80vw;
}
`

const Image=styled.div`
img{
    width: 70vw;
}
@media screen and (max-width:1020px){
    img{width: 80vw;}
}`

const EPdiv=styled.div`
width:400px;
border-top: 3px solid black;
margin: 30px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
h2,p{
    text-align:left;
    margin: 30px;
}
p{
    
    color: gray;
}
@media screen and (max-width:1020px){
    width: 250px;
    height: 300px;
    
    h2,p{
    text-align:left;
    margin: 0px;
}
h2{
    font-size: 20px;
}
p{
    font-size: 12px;
    margin-top: 12px;
}
}
`
const EPdivWrapper=styled.div`

display: flex;
@media screen and (max-width:1020px){

    flex-direction: column;
}

`