import React , {Component} from 'react';
import ComingSoon from './coming-soon';
import IComingSoon from '../../models/IComingSoon';
import {Row, Col, Alert} from 'react-bootstrap';
import { LoadingStatus } from '../../models/types';
import LoadingIndicator from '../common/LoadingIndicator';

import {getComingSoon} from "../../services/movies";

type Props = {};

type State = {
    status: LoadingStatus,
    coming?: IComingSoon[],
    error?: Error
};


class ComingSoonList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render(){
        let el;
        const {status, coming, error} = this.state;
        
        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies that are coming soon. Please wait..."
                    />
                );
                break;
            case 'LOADED':  
            el =(
                <Row xs={1} md={3} lg= {6} >
                    {
                        coming?.map(
                            coming =>(
                                <Col key={coming.id} className="d-flex align-items-stretch my-3">
                                    <ComingSoon 
                                    coming={coming} 
                                    />
                                </Col>
                            )
                        )
                    }
                </Row>
            );
            break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger">
                        {error?.message}
                    </Alert>
                );
                break;
        }

        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getComingSoon();
            this.setState({
                status: 'LOADED',
                coming: data
            });
        } catch( error ) {
            this.setState({
                status: 'ERROR_LOADING'
            });
        }
    }
        
    
}

export default ComingSoonList;
