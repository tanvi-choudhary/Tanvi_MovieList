import React,{ useEffect, useState } from "react";
 import { RouteComponentProps} from 'react-router-dom';
import { Alert, Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import LoadingIndicator from "../common/LoadingIndicator";

import IMovie from "../../models/IMovie";
import { LoadingStatus } from '../../models/types';
import { getMovieById }  from "../../services/movies";

type Props = {

};


const MovieDetails = ( {match}: RouteComponentProps<{id : string}> ) => {
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ movies, setMovie ] = useState<IMovie | null>( null );
    const [ error, setError ] = useState<Error | null>( null );


    
    useEffect( 
        () => {
            const fetchMovie = async () => {
                try{
                const data  = await getMovieById( +match.params.id);
                    setMovie (data);
                    setStatus('LOADED');
                }catch (error){
                    setStatus('ERROR_LOADING');
                }
            };
            fetchMovie();
        }, 
    [ ]
    );

    let el

    switch ( status) {
        case "LOADING":
            el = <LoadingIndicator size="large" message="Loading Movie details. Please wait...."/>;
            break;
        case "LOADED":
            const { 
                id,
                title,
                year,
                imdbRating, 
                contentRating, 
                averageRating, 
                duration, 
                genres, 
                actors, 
                releaseDate, 
                storyline,
                posterurl 
            } = movies as IMovie;

            el = (
                <>
                    <Row>
                        
                        <Col xs={12} lg={4} className="my-2">
                            <img src={`${posterurl}`}
                                alt={title}
                                className="w-100"
                            />
                        </Col>
                        <Col xs={12} lg={8}>
                        
                            <h1>{title}({year})</h1>
                        
                    
                            <Row xs={8} lg={12} className="text-sm my-5">
                            <div>
                                 <Table borderless responsive='lg'>
                                    <tr>
                                        <td>Imdb Rating </td>
                                        <td>{imdbRating}</td>
                                    </tr>
                                    <tr>
                                        <td>Content Rating </td>
                                        <td>{contentRating}</td>
                                    </tr>
                                    <tr>
                                        <td>Average Rating</td>
                                        <td>{averageRating}</td>
                                    </tr>
                                    <tr>
                                        <td>Duration</td>
                                        <td>{duration}</td>
                                    </tr>
                                    <tr>
                                        <td>Generes</td>
                                        <td>{genres}</td>
                                    </tr>
                                    <tr>
                                        <td>Actors </td>
                                        <td>{actors}</td>
                                    </tr>
                                    <tr>
                                        <td>Release Date </td>
                                        <td>{releaseDate}</td>
                                    </tr>
                                    <tr>
                                        <td>Story Line </td>
                                        <td>{storyline}</td>
                                    </tr>
                                 </Table>
                                
                                </div>
                                
                            </Row>
                        </Col>
                    </Row>

                

                </>
            )
            break;

        case "ERROR_LOADING":
            el = (
                <Alert variant="danger">
                    {error?.message}
                </Alert>
            )
            break;
    }

    return el;
}

export default MovieDetails;