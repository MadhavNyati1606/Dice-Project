import React from 'react'
import styled from 'styled-components'
function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then  2 point will be deducted</p>
    </RulesContainer>
  )
}
const RulesContainer = styled.div`
background-color: #FBF1F1;
padding: 20px;

width: 50%;
margin: 20px auto;
h2{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}
p{
    font-size: 16px;
    font-weight: 500;
}
`
export default Rules
