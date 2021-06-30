import React from 'react'
import styled from 'styled-components'
import {Fade} from 'react-awesome-reveal';


function Section({title,description,leftBtn,rightBtn,backgroundImg,Downarrow,invert}) {
    return (
        <Container  bgImage={backgroundImg}>
            <Fade direction='up'>
                <Content>
               
                <ContentHead invert={invert}>{title}</ContentHead>
                <ContentDesc invert={invert}>{description}</ContentDesc>
            </Content>
            </Fade>
            


            <ButtonsWrap >
                <Fade  bottom >
                    <Buttons >
                 {leftBtn&&
                 <LeftButton>
                   {leftBtn}
                </LeftButton>
                 
                 }   
                
                {rightBtn&&
                    <RightButton>
                        {rightBtn}
                    </RightButton>
                
                }
                
                </Buttons>
                </Fade>
                {Downarrow &&
                <DownArrow src='/images/down-arrow.svg' />
                
                }
           
        
            </ButtonsWrap>
            </Container>
    )
}

export default Section


const Container=styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image:${props=>`url(${props.bgImage})`};
 display: flex;
 flex-direction:column;
 justify-content:space-between;
 @media screen and (max-width:1020px){
    background-position-x: -200px;
}




`


const Content=styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ContentHead=styled.h1`

color:${props=>props.invert?'lightgray':'#393c41'}
`
const ContentDesc=styled.p`
color:${props=>props.invert?'lightgray':'#393c41'}`
const ButtonsWrap=styled.div`
margin-bottom:20px;
`

const Buttons=styled.div`
display: flex;
justify-content: center;
margin-bottom: 40px;

@media(max-width:760px){
    flex-direction: column;
    align-items:center;
}
`
const LeftButton=styled.div`
background-color: rgba(12,12,12,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content: center;
align-items:center;
border-radius: 100px;
opacity:0.85;
font-size: 12px;
text-transform: uppercase;
cursor: pointer;
margin: 8px;


`

const RightButton=styled(LeftButton)`

background-color: whitesmoke;
  color: #393c41;
`


const DownArrow=styled.img`
height:40px;
width:40px;
animation:upndown 3s infinite ease-in;

`
//108