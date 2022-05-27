import styled from "styled-components"

export const StyledBotton = styled.button`
   border-radius: 50px;
   border: none;
   box-shadow: 0 0 10px rgba(0,0,0,0.15);
   cursor: pointer;
   font-size: 20px;
   font-weight: 700;
   padding: 1rem 1.5rem;
   background-color: ${props => props.bg || "#fff" };
   color: ${props => props.color || "#333"};

   @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
      font-size: 1rem;
      padding: 8px 1.5rem;
   }
`