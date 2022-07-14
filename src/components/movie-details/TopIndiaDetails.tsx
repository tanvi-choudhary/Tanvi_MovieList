import React,{ useEffect, useState } from "react";
 import { RouteComponentProps} from 'react-router-dom';
import { Alert, Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import LoadingIndicator from "../common/LoadingIndicator";

import ITopIndia from "../../models/ITopIndia";
import { LoadingStatus } from '../../models/types';
import { getTopIndiaId }  from "../../services/movies";

type Props = {

};


const TopIndiaDetails = ( {match}: RouteComponentProps<{title : string}> ) => {
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ moviestopIndia, setMovieTopIndia ] = useState<ITopIndia | null>( null );
    const [ error, setError ] = useState<Error | null>( null );


    
    useEffect( 
        () => {
            const fetchTopIndiaMovie = async () => {
                try{
                const data  = await getTopIndiaId( +match.params.title);
                setMovieTopIndia (data);
                    setStatus('LOADED');
                }catch (error){
                    setStatus('ERROR_LOADING');
                }
            };
            fetchTopIndiaMovie();
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
                title,
                year,
                genres,
                ratings,
                poster,
                contentRating,
                duration,
                releaseDate,
                averageRating,
                originalTitle,
                storyline,
                actors,
                imdbRating,
                posterurl
            } = moviestopIndia as ITopIndia;

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
                                {/* {
                                    moviestopIndia?.map(
                                        TopIndia =>(
                                        <Col key={moviestopIndia.title} className="d-flex align-items-stretch my-3">
                                            <TopIndia 
                                            moviestopIndia={moviestopIndia} 
                                            />
                                        </Col>
                                    )
                                )
                            } */}
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

export default TopIndiaDetails;