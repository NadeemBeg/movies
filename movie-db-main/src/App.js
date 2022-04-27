import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<MovieList />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
