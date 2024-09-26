import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
    background: #2F4F4F;
    padding : 5px;
    &:hover{
        color: #340000;
        transform: scale(1.1);
        transition: all 2s ease-in-out;
    }
    
`

export default function Header(props) {
    const { date } = props
    
    return(
        <StyledDiv>
            <h1>Astronomy Photo of the Day</h1>
            <div>Date : {date.date}   </div>
        </StyledDiv>
    )

}