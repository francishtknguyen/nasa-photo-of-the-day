import React from "react";
import Details from './details'
import styled from 'styled-components'


const StyledDiv = styled.div`
    background: #2F4F4F;
    padding : 5px;
    img{
      max-width:75%;
      height: auto;
    }
`

export default function Image(props) {
  const { data } = props

  return (
  <StyledDiv>
  <img src ={data.url} alt ='photo of the day'/> 
  <Details data={data} />
  </StyledDiv>
  )

}