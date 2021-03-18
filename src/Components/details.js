import React from "react";
import styled from 'styled-components'


const StyledDiv = styled.div`
    p{
      
    }
    font-style: ${pr => pr.italic ? 'italic' : 'initial'};
    &:hover{
      color: white;
    }
`

export default function Details({ data, italic }) {
  // const { data, italic } = props

  return (
    <StyledDiv italic={italic}>
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
    </StyledDiv>
)  

}