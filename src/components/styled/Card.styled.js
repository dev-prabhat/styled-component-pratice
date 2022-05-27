import styled from "styled-components"

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.15);
    padding: 1.5rem ;
    margin: 1rem 0 ;
    flex-direction: ${({layout}) => layout || "row"};

    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
      flex-direction: column;
      text-align: center
    }
`

export const Content = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`

export const CardImage = styled.img`
   width: 40%;
   padding: 0 1rem;
   margin: 0 auto;

   @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
    width: 70%;
    margin: 1rem auto;
   }
`