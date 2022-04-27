import React from 'react'
import {useLocation} from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap'

export default function Details() {
    const { state } = useLocation();
        return (
            <>
            <Container>
                <Row className='my-4'>
                    <Col lg={4}>
                        <img src={state.Poster} alt="" />
                    </Col>
                    <Col lg={4}>
                        <div>
                        <div>{state.movie_id}</div>
                            <span>{state.year}</span>
                            <span>N/A</span>
                            <h2>{state.Title}</h2>
                            <p> <b>Score</b> 7.3 (of 366,771 votes)</p>
                            <p><b>IMDB ID</b> {state.imdbID}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum officia perspiciatis iusto quibusdam sunt est delectus maxime error dolorem, ratione libero voluptatem recusandae numquam molestiae enim ipsum animi aperiam.</p>
                        </div>
                        <div>
                            <h2>Ratings</h2>
                            <p><b>Internet Movie Database</b> 7.3 / 10 </p>
                            {/* <p><b>Internet Movie Database</b> 7.3 / 10 </p>
                            <p><b>Internet Movie Database</b> 7.3 / 10 </p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        )
    // }
}
