import React, { useState } from 'react'
import styled from 'styled-components'
function RollDice({rules, isReset,resetScore,currentNumber, setDiceNumber, setScore}) {
    
  return (
    <DiceContainer>
        <div className='img'>
        <img onClick={setDiceNumber} src={isReset ?`/images/dice/dice_1.png`:`/images/dice/dice_${currentNumber}.png`} alt="dice" />
        </div>
      <p>Click on Dice to roll</p>
      <div className="buttons">
      <button className='top-button' onClick={resetScore}>Reset Score</button>
      <button className='down-button' onClick={rules}>Show Rules</button>
      </div>
      
    </DiceContainer>
  )
}
const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img{
        cursor: pointer;
    }
    .buttons{
        gap: 24px;
        display: flex;
        flex-direction: column;
        margin-top: 36px;
    }
    .top-button{
        width: 220px;
        padding: 10px 18px;
        border-radius: 5px;
        border: 1px solid black;
        background-color: white;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    .down-button{
        width: 220px;
        padding: 10px 18px;
        background-color: black;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`
export default RollDice
