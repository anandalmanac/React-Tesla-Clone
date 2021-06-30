import { Close } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'

function Header() {
    const [menu,setMenu]=useState(false);


    const handleclose=()=>{
        if(menu){
            setMenu(false);
        }else{
            setMenu(true);
        }
    }
    useEffect(()=>{
        if(menu){
            console.log('close')
        }

    },[menu])
    return (
        <Container>
           
                 <Logo>
                <Link to="/">
                <img src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a-450x300.png" alt="" />
                </Link>
                 </Logo>
            <Menu>
                <Link to="/models">Model S</Link>
                <Link to="/model3">Model 3</Link>
                <Link to="/modelx">Model X</Link>
                <Link to="/modely">Model Y</Link>
                
            </Menu>

          
           
            <RightMenu>
                <a href="" className="rm-h">Shop</a>
                <a href="" className="rm-h">Account </a>
                <a onClick={handleclose}>Menu</a>
            </RightMenu>
            <BurgerNav show={menu}>
                <li className='closebtn'>
                    <Button onClick={handleclose}>
                    <Close />
                    </Button>
                </li>
                <li><Link to="/models">Model S</Link></li>
                <li><Link to="/model3">Model 3</Link></li>
                <li><Link to="/modelx">Model X</Link></li>
                <li><Link to="/modely">Model Y</Link></li>
                <li><a href="">Find Us</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Support</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container=styled.div`
min-height:60px;
position: fixed;
display: flex;
align-items: center;

padding: 0 20px;
top:0;
left: 0;
right:0;
z-index:5;
@media screen and (max-width:1020px){
    min-height: 40px;
}




    .closebtn{
            align-items: flex-end !important;
            margin-bottom: 60px;
        }
        
 

`
const Logo=styled.div`
flex: 25%;
display: flex;
justify-content: flex-start;
img{
    height: 80px;
}
@media screen and (max-width:1020px){
    img{
        height: 50px;
    }
}
`
const Menu=styled.div`
flex: 50%;
display:flex;
align-items: center;

justify-content: center;

a{
    color: black;
    font-weight:600;
    
    padding: 0 18px;
    font-size: 15px;
    transition: all .2s ease-in-out;
    &:hover{
        font-size:15.3px ;
        text-decoration: underline;
    }

}
@media screen and (max-width:1020px){
    display: none;
}



`
const RightMenu=styled.div`
flex:25%;
display: flex;
justify-content: flex-end;
@media screen and (max-width:1020px){
    a{font-size:10px !important;}
}


@media screen and (max-width:1020px){
    .rm-h{
        display: none;
    }
}

a{
     color: black;
    font-weight:600;
    
    margin-left: 18px;
    font-size: 15px;
    cursor: pointer;
    transition: all .2s ease-in-out;
      &:hover{
        font-size:15.3px ;
        text-decoration: underline;
    }


}

`


const BurgerNav=styled.div`
position:fixed;
top: 0;
right: 0;
bottom: 0;
background-color: white;
width: 300px;
z-index:10;
padding-top: 30px;
padding-left: 20px;
transition: all .2s ease-in-out;

transform: ${props=>props.show?'translateX(0)':'translateX(100%)'};

    


li{
    width: 260px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 6px;




    a{
        width:100%;
        text-align: left;
        font-size: 16px;
        padding: 8px 10px;
        transition:all .2s ease-in-out;
         &:hover{
        background-color: whitesmoke;
        transform: scale(1.02);
        border-radius: 10px;
    }
    }
}
    
   
`

//2