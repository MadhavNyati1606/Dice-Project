import React, { useState } from 'react'
import styled from 'styled-components'
function NumberSelector({selectedNumber, setSelectedNumber, error, setError}) {
    const array = [1,2,3,4,5,6];
    // console.log(isSelected);
  return (
    <NumberContainer>
        <p className='error'>{error}</p>
        <div className="flex">
        {array.map((value,i)=>(
            <Box key={i}
            isSelected = {value == selectedNumber}
            onClick={()=> {
                setSelectedNumber(value)
                setError(null)
            }}>{value}</Box>
        ))}
        </div>
        <p className='select'>Select Number</p>
    </NumberContainer>
  )
}
const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
        margin-bottom: 30px;
    }
    .error{
        color: red;
        font-size: 24px;
        font-weight: 400;
    }
    .select{
        font-size: 24px;
        font-weight: 700;
    }
`
const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;  
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.isSelected ? 'black': 'white'};
    color: ${(props)=> props.isSelected ? 'white': 'black'};
    
`
export default NumberSelector
