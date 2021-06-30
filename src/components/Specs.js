import React from 'react'
import styled from 'styled-components'


function Specs({Data}) {
    return (
        <SpecWrap>
               <Spec>
                   <h1>{Data.pickup} s</h1>
                   <p>0-60 mph</p>
               </Spec>
               <Spec>
                   <h1>{Data.range} mi</h1>
                   <p>range(EPA est.</p>
               </Spec>
               <Spec>
                   <h1>{Data.peakpower} hp</h1>
                   <p>peak power</p>
               </Spec>
        </SpecWrap>
    )
}

export default Specs

const SpecWrap=styled.div`
display:flex;
justify-content: space-between;

margin-bottom: 50px;
`

const Spec=styled.div`
display:flex;
flex-direction: column;

p{
    margin: 0px 30px !important;
    font-family: 'Ubuntu', sans-serif;
    font-size: 12px;
}
h1{
    font-family: 'Ubuntu', sans-serif
}
@media screen and (max-width:1020px){
    h1{
        margin-top: 12px;
        font-size: 12px;
    }
    p{
        font-size: 8px !important;
        margin: 0 !important;
    }
}

`