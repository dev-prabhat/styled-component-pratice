import styled from "styled-components"

export const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.footer};
  color: ${({theme}) => theme.colors.body};
  padding: 4rem;

  ul{
      list-style-type: none;
  }

  ul li {
      margin-bottom: 1rem;
  }

  p{
      text-align: right;
  }

  @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}) {
        text-align: center;
        ul{
            padding: 0;
        }
        p{
            text-align: center;
        }
  }
`