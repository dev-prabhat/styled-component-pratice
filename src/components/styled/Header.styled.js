import styled from "styled-components"

const StyledHeader = styled.div`
  background-color: ${({theme}) => theme.colors.header};
  padding: 20px;
`

const StyledNav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 5rem;

   @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
     flex-direction: column;
   }
`

const Logo = styled.img`
    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
        margin-bottom: 3rem;
    }

`

const H1 = styled.h1`
    font-size: 2rem;
    line-height: 2rem;
    margin: 2rem 0;

    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
      font-size: 1.5rem;
      line-height: 1.5rem;
      margin: 1rem 0;
    }
`

const P = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 1rem 0;

    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 8px 0;
    }
`

const Image = styled.img`
    width: 40%;
    margin-left: 5rem;

    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
      width: 70%;
      margin: 1rem auto;
    }
`


export {StyledHeader,StyledNav,Logo,Image,H1,P}