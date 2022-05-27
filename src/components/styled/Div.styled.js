import styled from "styled-components"

export const Div = styled.div`
    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
      width: 80%;
      margin: 1rem auto;
   }
`