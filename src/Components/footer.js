import React from "react";
import styled from 'styled-components'


const StyledDiv = styled.div`
    background: black;
    color: white;
    padding:1px;
`

export default function Footer(props) {
    const { data } = props
  
    return(
        <StyledDiv>
          <footer>
              <p>Copyright: {data.copyright}</p>
          </footer>
        </StyledDiv>
    )

}