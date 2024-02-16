import styled from "styled-components";
import { Link } from "react-router-dom";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  display: grid;
  background: #fbfefe;
  grid-template-columns: 10% 80% 10%; /* Define the column sizes */
  width: 100vw;
  height: 100vh;
`
///////////////////////////////////////////////////////////////////////////////

//Division of the Wrapper
const DivEven = styled.div`
    height: 100%;
`
/////////////////////////////////////////////////////////////////////////////////

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
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering, if needed */
  font-size: 1em;
  text-align: center;
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

            <DivEven>
            </DivEven>

            <DivEven>
                <Title >
                    You can reach out to me or donate!
                </Title>
                <Card style={{color: 'red'}}>
                    <Button $primary>
                        <Ice to="/manga" style={{color: 'red'}}>
                            todoDiscord
                        </Ice>
                    </Button>
                </Card>
                <Card>
                    <Button $primary>
                        <Ice to="/manga" style={{color: 'red'}}>
                            todoTwitter
                        </Ice>
                    </Button>
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
            </DivEven>

            <DivEven>               
            </DivEven>

        </Wrapper>
        </>        
    );
}
