import React from 'react';
import {Card, Button} from 'react-bootstrap';
import IMovie from '../../models/IMovie';
import AddFavo from '../common/AddFavo';

type Props = {
    movie: IMovie;
}

const MovieTheater = ( { movie } : Props) => {
  const {
    title,
    posterurl
  }= movie;

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

export default MovieTheater;