import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ITopIndia from '../../models/ITopIndia';
import AddFavo from '../common/AddFavo';

type Props = {
    india: ITopIndia;
}

const TopIndia = ( { india } : Props) => {
  const {
    title,
    posterurl
  }= india;

  const cardStyle = {
    height: "80%"
  };
  
    return(
        <Card style={ { width: "18rem"}}>
  <Card.Img variant="top" {...cardStyle} src={`${posterurl}`} />
  <Card.Body>
    <Card.Text>{title}</Card.Text>
    <AddFavo />
  </Card.Body>
</Card>
    );
}

export default TopIndia;