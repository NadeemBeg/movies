import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap'
import {IoSearchSharp} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
export default function MovieList() {
    const navigate = useNavigate();
    const [moviesData, setMoviesData] = useState([]);
    // console.log("moviesData", moviesData);
    const createPost = () => {
        navigate('/details',
            {
                state: {
                    Title: 'App',
                    Year: '2013',
                    imdbID: 'tt2536436',
                    Type: 'movie',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxMzc4NTEyN15BMl5BanBnXkFtZTgwNDgyMjA3MTE@._V1_SX300.jpg'
                }
            });
    }
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
                        // console.log("come",JSON.stringify(moviesData.data.Search));
                        var a = moviesData.data.Search;
                        console.log("aaaaaaa",a);
                        setMoviesData(a);
                        // moviesData.push(JSON.stringify(moviesData.data.Search));
                        // localStorage.setItem("moviesData",JSON.stringify(moviesData.data));
                        // window.location.href = "http://localhost:3001/list";
                        // console.log(JSON.parse(moviesData.data));
                    }
                });                
        }
    }
    useEffect(()=>{
        console.log("moveise",moviesData);
    },[moviesData])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="my-4">
                        <div className='searchDiv1'>
                            <div className='inputWrapper'>
                                <input type="text"  id='movie_name' placeholder="search movies..." />
                                <IoSearchSharp onClick={findmoviesData}/>
                            </div>
                        </div>
                    </Col>
                    {/* {reptiles.map(reptile => (
                        <li key={reptile}>{reptile}</li>
                    ))} */}
                    {moviesData.map((data,index) => {
                        return <Col lg={4} key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data.Poster} />
                                <Card.Body>
                                    <Card.Text>{data.Year}</Card.Text>
                                    <Card.Title>{data.Title}</Card.Title>
                                    {/* <a  href="/details">Details-</a> */}
                                    <button onClick={() => { createPost() }}>
                                        Details -
                                    </button>
                                    {/* <Link to={{ pathname: '/details',state:{id:1,name:'sabaoon'}}}>Details - </Link> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                    
                    {/* // <Col lg={4}>
                    //     <Card style={{ width: '18rem' }}>
                    //         <Card.Img variant="top" src="holder.js/100px180" />
                    //         <Card.Body>
                    //             <Card.Title>Card Title</Card.Title>
                    //             <a href="/">Details</a>
                    //         </Card.Body>
                    //     </Card>
                    // </Col>
                    // <Col lg={4}>
                    //     <Card style={{ width: '18rem' }}>
                    //         <Card.Img variant="top" src="holder.js/100px180" />
                    //         <Card.Body>
                    //             <Card.Title>Card Title</Card.Title>
                    //             <a href="/">Details</a>
                    //         </Card.Body>
                    //     </Card>
                    // </Col> */}
                </Row>
            </Container>
        </>
    )
}
