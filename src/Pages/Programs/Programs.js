import React from "react";
import "./Programs.css";
import { Container } from "reactstrap";
import SummerSingles from "../../Components/SummerSingles/SS"

export default class Programs extends React.Component {


  render() {
    return (
      <Container className="font">
      <br/>
        <Container fluid className="tennisContainer">
        <br/>
         <SummerSingles />
         <br />  
          </Container>
        
      </Container>
    );
  }
}
