import { Container } from "./styled/Container.styled"
import { Flex } from "./styled/Flex.styled"
import { StyledFooter } from "./styled/Footer.styled"

export const Footer = () => {
    return(
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="logo_white"/>

                <Flex>
                   <ul>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                       <li>+1-430-243-2354</li>
                       <li>example@gmail.com</li>
                   </ul>
                   <ul>
                       <li>About Us</li>
                       <li>What We Do</li>
                       <li>FAQ</li>
                   </ul>
                   <ul>
                       <li>Career</li>
                       <li>Blog</li>
                       <li>Contact us</li>
                   </ul>
                </Flex>
            </Container>
        </StyledFooter>
    )
}