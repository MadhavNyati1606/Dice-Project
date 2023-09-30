import React from 'react'
import styled from "styled-components"

function StartGame({toggle}) {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="dices" />
        </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;

    .content h1{
        font-size: 96px;
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`
const Button = styled.button`
width: 220px;
padding: 10px 18px;
border-radius: 5px;
background: #000;
color: white;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 0.3s ease-in;
cursor: pointer;
&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in;
}
`
export default StartGame
