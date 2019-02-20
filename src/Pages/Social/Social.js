import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import "./Social.css";
import Insta from "./instagram.png";

const Social = (props) => {
  return (
    <div className="container">
    <br/>
    <Container className="tennisContainer">
      <br/>      
      <Jumbotron className="text-center color-blue">
       <h1>Join us on Instagram!</h1>
        <br />
        <p> Share your new tennis gears, practice, serves, and tutorial videos with us!</p>
        <a
          href="https://www.instagram.com/secondcitytennis/"
          title="Go to Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="instalogo" key="instalogo" src={Insta} alt="instagram" />
       </a>
        
        
      </Jumbotron>
      <br/>
    </Container>
      
    </div>
  );
};

export default Social;