import React from 'react';
import { Card, Button, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Example = (props) => {
  return (
    <div >
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt=" cap very nice" />
        <CardLink>1</CardLink>s
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;