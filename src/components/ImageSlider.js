import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
    return (

         <Carousel {...settings}>

            <Wrap>
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/118a3cee-9850-437d-b9e8-e88695d58906/bvlatuR/std/2442x1124/MS-Interior-Carousel-C-Desktop" alt="" />
                <Content>
                    <h2>Perfect Environment</h2>
                <p>
                   Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.
                   </p>
                </Content>
                </Wrap>
                <Wrap>
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8dfd0c9e-45d5-4782-a071-c597c372429f/bvlatuR/std/2442x1124/MS-Interior-Carousel-D-Desktop" alt="" />
                <Content>
                    <h2>Redesigned Second Row</h2>
                <p>
                    Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
            
                </Content>
                </Wrap>
                <Wrap>
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/82d678c3-1d60-4827-887b-eb44bbac528f/bvlatuR/std/2442x1124/MS-Interior-Carousel-A-Desktop" alt="" />
                <Content>
                    <h2>17" Cinematic Display</h2>
                <p>
                   With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere.</p>
            
                </Content>
                </Wrap>

            
        </Carousel>

    )
}

export default ImageSlider


const Carousel=styled(Slider)`
margin: 50px;

width: 70vw;
@media screen and (max-width:780px){
    width: 95vw;
}



ul li button{
    &::before{
        font-size: 10px;
        color: rgb(150,158,171);
    }
}


li.slick-active button::before{
    color:white;
}
.slick-list{
    overflow: visible;
}
button{
    margin-left:50px;
    margin-right:50px;
    z-index:1;
}


`
const Wrap=styled.div`
position: relative;
width:100%;
height:100%;


cursor: pointer;
    img{
       
        width:100%;
        height:100%;
       
        transition-duration: 300ms;
        z-index: 1;
        filter: brightness(0.7);
        
    }
    &:hover img{
           transform: scale(1.01);
        }

`
const Content=styled.div`
position: absolute;
bottom: 0px;
z-index: 200;
width:500px;
margin-left: 20px;
margin-bottom: 20px;
h2{
    color: white;
    text-align: left;
    padding-bottom: 20px;
    
}
p{
    color: white;
    text-align: left;
    line-height: 20px;
}
@media screen and (max-width:780px){
    width: 200px;
    h2{
    font-size: 13px;
    padding-bottom: 8px;
    
}
p{
   font-size: 8px;
   line-height: 10px;
}
}


`