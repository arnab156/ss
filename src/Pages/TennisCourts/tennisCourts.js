import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import "./tennisCourts.css";
import Map from "../../Components/GoogleMap/Map";
// import {Link} from "react-router-dom";

const Courts = (props) => {
  return (
    <div>
    <div className="container">
    <br/>
    <Container className="tennisContainer1">
      <br/>      
      <Jumbotron>
        <Map />
      </Jumbotron>
      <br/>
    </Container>
    </div>
    <div className="container">
    <Container className="tennisContainer1">
      <br/>      
      <Jumbotron>
        <h1>Chicago Park District Courts</h1>
        <p>Additional to the recommended courts above you can also visit many of Chicago Park District Managed courts.
        If you are unhappy with the condition of Chicago Park District courts,file a complaint at the Park District's 
        website and call your Alderman.
        </p>
        <a
          href="https://www.chicagoparkdistrict.com/parks-facilities/find-park-facility?search_by=keyword&keyword=tennis"
          title="Go to Chicago Park District"
          target="_blank"
          rel="noopener noreferrer">Find Court</a>
        {/* https://www.chicagoparkdistrict.com/parks-facilities/find-park-facility?search_by=keyword&keyword=tennis */}

      </Jumbotron>
      <br/>
    </Container>
      
    </div>
    </div>
  );
};

export default Courts;