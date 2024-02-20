import styled from "styled-components";
// import { Link } from "react-router-dom";
import React, { useState } from 'react';


// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;    
    align-items: center;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
`

const MainToon = styled.img`
    width: auto; // Set your desired width
    height: 550px; // Maintain aspect ratio
`
const MidNav = styled.div`
    position: fixed;
    bottom: 10vh;
    right: 40vw;
    width: 10vw; 
    height: 10vh;
    // background-color: white; /* Or any color you prefer */
    color: red;
    display: flex;
    align-items: center; /* This vertically centers the content if you have any */
    justify-content: space-evenly; /* This horizontally centers the content */
`

const BotNav = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 10vw; 
    height: 10vh;
    // background-color: white; /* Or any color you prefer */
    color: white;
    display: flex;
    align-items: center; /* This vertically centers the content if you have any */
    justify-content: space-evenly; /* This horizontally centers the content */

`

const Alt = styled.img`
    width: 50px; // Set your desired width
    height: auto; // Maintain aspect ratio
    cursor: pointer; /* Changes the cursor to indicate clickability */
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Smooth transition for feedback */
    &:hover {
        transform: scale(1.55); /* Slightly enlarges the image on hover */
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.9); /* Adds a shadow for depth */
      }
`

const Synopsis = styled.div`
    display: flex;
    align-items: center; /* Vertically centers the content */
    justify-content: center; /* Horizontally centers the content */
    width: 650px;
    height: 300px;
    background:  linear-gradient(to bottom, rgba(1, 0, 24, 0.6), rgba(1, 0, 24, 0.6));
    border-radius: 33px;
    color: white;
`
// Content within the divs
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#010018" : "white"};
  color: ${props => props.$primary ? "white" : "#010018"};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #31cfe4;
  border-radius: 30px;  
`

export default function Home() {
    // State to hold the current background
    const [backgroundUrl, setBackgroundUrl] = useState('background1.png');

    // State to hold the current fruit
    const [mainUrl, setmainUrl] = useState('fruit1.png');

    const synopsis1 = "lol lmao it's an apple"
    const synopsis2 = "lol lmao it's an orange"
    const synopsis3 = "lol lmao it's a banana"
    
    // State to hold the current fruit
    const [mainSynopsis, setSynopsis] = useState(synopsis1);
  
    // Function to change the background
    const changeBackground = (newBackground, newfruit, newSynopsis) => {
      setBackgroundUrl(newBackground);
      setmainUrl(newfruit)
      setSynopsis(newSynopsis);
    };

    

    return(
        <Wrapper background={backgroundUrl}>
            <MainToon src={mainUrl}></MainToon>
            <Synopsis>{mainSynopsis}</Synopsis>
            <MidNav>
                <Button $primary>Read Now</Button>
            </MidNav>
            <BotNav>
                <Alt src={'fruit1.png'} alt="Background 1" onClick={() => changeBackground('background1.png', 'fruit1.png', synopsis1)}></Alt>
                <Alt src={'fruit2.png'} alt="Background 2" onClick={() => changeBackground('background2.png', 'fruit2.png', synopsis2)}></Alt>
                <Alt src={'fruit3.png'} alt="Background 3" onClick={() => changeBackground('background3.png', 'fruit3.png', synopsis3)}></Alt>
            </BotNav>
        </Wrapper>

    );
}