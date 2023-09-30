import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'
function GamePlay() {
    const [score, setScore] = useState(0);
    const [currentNumber, setCurrentNumber] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const generateRandomNumber = (min, max) =>{
        return Math.floor(Math.random() * (max) + min);
    }
    const resetScore = () =>{
        setScore(0);
        setIsReset(true);
    }
    const rules = () =>{
      setShowRules(!showRules);
    }
    const setDiceNumber = () =>{
      if(!selectedNumber){
        setError("You have not selected a number");
        // console.log(error);
        return;
      }
        setIsReset(false);
        const number = generateRandomNumber(1,6);
        setCurrentNumber(number);

        if(number == selectedNumber){
            setScore((prev)=> prev + number);
            setSelectedNumber(undefined);
        }else{
            setScore((prev)=> prev - 2);
            setSelectedNumber(undefined);
        }
    }
  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore score={score}/>
      <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
      <RollDice rules={rules} isReset={isReset} resetScore={resetScore} currentNumber={currentNumber} setDiceNumber={setDiceNumber} setScore={setScore}/>
      {showRules ? <Rules/> : ""}
    </MainContainer>
  )
}
const MainContainer = styled.div`
    .top_section{
        display: flex;
    justify-content: space-around;
    padding-top: 64px;
    align-items: center;
    }
    
`
export default GamePlay
