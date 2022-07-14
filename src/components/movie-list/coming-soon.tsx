import React from 'react';
import {Card, Button} from 'react-bootstrap';
import IComingSoon from '../../models/IComingSoon';
import AddFavo from '../common/AddFavo';

type Props = {
    coming: IComingSoon;
}

const ComingSoon = ( { coming } : Props) => {
  const {
    title,
    posterurl
  }= coming;

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

export default ComingSoon;