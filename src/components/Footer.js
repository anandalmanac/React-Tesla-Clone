import React from 'react'
import styled from 'styled-components'

function Footer({Data}) {
    console.log(Data)
    return (
        <Container invert={Data.invert}>
            <Content>
                <Heading invert={Data.invert}>{Data.title}</Heading>
                <Buttons >
                    <Btn href="" invert={Data.invert}>order now</Btn>
                    <Btn href="" invert={Data.invert}>compare</Btn>
                </Buttons >
            </Content>
            <Image>
                <img src={Data.footerImg} alt="" />

            </Image>
        </Container>
    )
}

export default Footer


const Container=styled.div`
height: 100vh;
display: flex;
background-color: ${props=>props.invert?'black':'white'};

`

const Content=styled.div`
flex:0.5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



a{
    
    margin: 10px;
    border:2px black solid;
    padding: 8px 48px;
    border-radius: 20px;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: black;
        color: white;
    }
}
@media screen and (max-width:1020px){
    a{
        font-size: 8px;
        padding: 8px 38px;
        margin:5px;
    }
}

`
const Heading=styled.h1`
color: ${props=>props.invert?'lightgray':'black'};

`
const Buttons=styled.div`
margin-top:30px;
@media screen and (max-width:1020px){
    display: flex;
    flex-direction: column;
    margin-top: 0;
}

`
const Btn=styled.a`

color: ${props=>props.invert?'lightgray':'black'};
border-color: ${props=>props.invert?'lightgray':'black'} !important;



`
const Image=styled.div`
flex:0.5;
display: flex;
align-items: center;
img{
    width: 100%;

}


`