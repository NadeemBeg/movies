import React, { useEffect, useState } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { IoSearchSharp } from 'react-icons/io5'
export default function Home() {
    function findmoviesData() {
        var movieName = document.getElementById("movie_name").value;
        console.log("movieName",movieName);
        if (movieName !== null && movieName !== '') {
            const requestOptions1 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ searchField: movieName })
            };
            fetch(`http://localhost:3000/api/searchMovie`, requestOptions1)
                .then(response => response.json())
                .then(moviesData =>{ 
                    console.log("moviesData",moviesData);
                    var status = moviesData.status;
                    if(status == 404){
                        window.location.href = "http://localhost:3000/error";
                    }
                    else{
                        console.log("come");
                        localStorage.setItem("moviesData",JSON.stringify(moviesData.data));
                        window.location.href = "http://localhost:3001/list";
                        // console.log(JSON.parse(moviesData.data));
                    }
                });
        }
    }
    useEffect(() => {
        findmoviesData()
      }, [findmoviesData])
    return (
        <>
            <section className='home_bg'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={4}>
                            <div className='searchDiv'>
                                <div className='inputWrapper'>
                                    <input type="text" id='movie_name' placeholder="search movies..." />
                                    <IoSearchSharp onClick={findmoviesData}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
