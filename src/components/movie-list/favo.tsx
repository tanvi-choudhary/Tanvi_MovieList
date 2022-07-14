import React from 'react';
import {Card, Button} from 'react-bootstrap';
import IFavo from '../../models/IFavo';
import AddFavo from '../common/AddFavo';

type Props = {
    // favo: IFavo;
}

const Favo = ( ) => {


  const cardStyle = {
    height: "80%"
  };
  
    return(
        <Card style={ { width: "18rem"}}>
  {/* <Card.Img variant="top" {...cardStyle} src={} /> */}
  <Card.Body>
    <Card.Text></Card.Text>
    <AddFavo />
  </Card.Body>
</Card>
    );
}

export default Favo;