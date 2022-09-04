import React from 'react'
import { HomeSection, HomeSectionTitle, HomeButton } from '../StyledComponents/StyledComponents'
function Home() {
  return (
    <>
    <HomeSection primary>
        <HomeSectionTitle>
            TechspaceX
            <HomeButton>Learn More</HomeButton>
        </HomeSectionTitle>
    </HomeSection>
    </>
  )
}

export default Home