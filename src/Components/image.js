import React from "react";
import Details from './details'
import styled, {keyframes} from 'styled-components'

// const kf = keyframes`
//   100%{
//     opacity:1
//   }
// `

const StyledDiv = styled.div`
    background: #2F4F4F;
    padding : 5px;
    
    img{
      max-width:75%;
      height: auto;
      &:hover{
        opacity:0.75;
        transform: scale(1.1);
      }
      border: 4px solid black;
      transition: all 1s ease-in-out;
    }
    
`

export default function Image(props) {
  const { data } = props

  return (
  <StyledDiv  >
    <a target='_blank' href={data.hdurl}><img src ={data.url}  alt ='loading'/> </a>
  <Details data={data} italic />
  </StyledDiv>
  )

}