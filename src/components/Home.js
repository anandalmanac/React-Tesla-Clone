import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
             title='Model S'
             description='Order Online for Touchless Delivery'
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop'
             leftBtn='Custom order'
             rightBtn='Existing inventory'
             Downarrow
            
            />

            <Section 
             title='Model Y'
             description='Order Online for Touchless Delivery'
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70'
             leftBtn='Custom order'
             rightBtn='Existing inventory'
            
            />

            <Section 
             title='Model 3'
             description='Order Online for Touchless Delivery'
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D'
             leftBtn='Custom order'
             rightBtn='Existing inventory'
            
            />
            <Section 
             title='Model X'
             description='Order Online for Touchless Delivery'
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D'
             leftBtn='Custom order'
             rightBtn='Existing inventory'
            
            />
             <Section 
             title='Solar Panels'
             description='Lowest Cost Solar Panels in America'
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/a86dcec8-ff70-4ae5-b1b2-d598575698bc/bvlatuR/std/2880x1800/us_homepage_sp_hero_d?quality=70'
             leftBtn='ORDER NOW'
             rightBtn='learn more'
            
            />
            <Section 
             title='Solar Roof'
             description='Produce Clean Energy From Your Roof'
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/27ae57a3-3a1d-480c-b557-cd9caf51b96e/bvlatuR/std/2880x1620/solar-roof-hero-desktop?quality=70'
             leftBtn='ORDER NOW'
             rightBtn='learn more'
            
            />
            <Section 
             title='Accessories'
             description=''
             backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories'
             leftBtn='shop NOW'
             
            
            />
        </Container>
    )
}

export default Home


const Container=styled.div`

`