import { H1, Image, Logo, P, StyledHeader, StyledNav } from './styled/Header.styled'
import React from 'react'
import { Container } from './styled/Container.styled'
import { StyledBotton } from './styled/Button.styled'
import { Flex } from './styled/Flex.styled'
import { Div } from './styled/Div.styled'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
          <StyledNav>
              <Logo src="./images/logo.svg"/>
              <StyledBotton>Try It Free</StyledBotton>
          </StyledNav>
          <Flex>
             <Div>
                 <H1>Build the Community Your Fans will Love</H1>

                 <P>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</P>

                 <StyledBotton bg="#ff0099" color="#fff">
                     Get Started for free
                 </StyledBotton>
             </Div>
             <Image src="./images/illustration-mockups.svg"/>
          </Flex>
      </Container>
    </StyledHeader>
  )
}
