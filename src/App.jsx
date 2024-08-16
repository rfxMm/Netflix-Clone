import React from 'react';
import Row from "./components/Row/Row";
import requests from "./pages/Requests/requests";
import Banner from "./pages/Banner/Banner";
import Nav from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />

      <Row title="Trending New" 
      fetchUrl={requests.fetchTrending} 
      />

      <Row title="Top Rated" 
      fetchUrl={requests.fetchTopRated} 
      />

      <Row title="Action Movies" 
      fetchUrl={requests.fetchActionMovies} 
      />

      <Row title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies} 
      />

      <Row title="Horror Movies" 
      fetchUrl={requests.fetchHorrorMovies} 
      />

      <Row title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies} 
      />

      <Row title="Documentaries" 
      fetchUrl={requests.fetchDocumentaries}
      />
      <Footer />
    </div>
  )
}

export default App
