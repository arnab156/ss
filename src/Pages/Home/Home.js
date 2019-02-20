import React from 'react';
import AboutUs from "../../Components/AboutUs/AboutUs";
import Headlines from "../../Components/Headlines/Headlines";
import { Container } from 'reactstrap';
import "./Home.css";

const Home = (props) => {
  return (
    <div className="container">
    <br/>
    <Container>
      <AboutUs />
      <br/>
      <Headlines />
    </Container>
      
    </div>
  );
};

export default Home;