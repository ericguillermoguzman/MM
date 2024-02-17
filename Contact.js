import styled from "styled-components";
import { Link } from "react-router-dom";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url('page_2.png');
    background-size: cover;
    background-position: center;
`

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  display: flex;
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering, if needed */
  height: 10%;
  font-size: 1.5em;
  color: #010018;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

// Content within the divs
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#010018" : "white"};
  color: ${props => props.$primary ? "white" : "#010018"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #31cfe4;
  border-radius: 30px;  
`

//What decorates a Head(er)? Jewelry! What's a short word for Jewelry? Ice! lol, lmao.
const Ice = styled(Link)`
padding: 10px 15px;
text-decoration: none;
font-size: 18px;
color: white;
display: block;
`

export default function Contact() {
    return(
        <>

        <Wrapper>
                
                <Card style={{color: 'red'}}>

                    <Ice to="/manga" style={{color: 'red'}}>
                        <img src="logodiscord.png" style={{width: '50px', background: 'red'}} alt="X"></img>
                    </Ice>

                </Card>
                <Card>
                    
                        <Ice to="/manga" style={{color: 'red'}}>
                        <img src="logoX.jpg" style={{width: '50px', background: 'red'}} alt="X"></img>
                        </Ice>
                    
                </Card>
                <Card>
                <Button $primary>
                        <Ice to="/manga" style={{color: 'red'}}>
                            todoEmail
                        </Ice>
                    </Button>
                </Card>
                <Card>
                    <Button $primary>
                        <Ice to="/manga" style={{color: 'red'}}>
                            todoDonate
                        </Ice>
                    </Button>
                </Card>   
                
        </Wrapper>
        </>        
    );
}
