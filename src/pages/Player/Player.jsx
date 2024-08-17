import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/cards/back-arrow.png"
import { useParams } from 'react-router-dom'

const player = () => {

  const {id} = useParams();

  const [ apiData, setApiData] = useState({
    name:"",
    key: "",
    publishe_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODZkZWVjNmI4ZjMxNzBkNmE1MDBjZjM4YzFlZmZlNyIsIm5iZiI6MTcyMzg4NTYyMi43Mjk1ODEsInN1YiI6IjY2M2M4ZTA1YWM3M2FkOGU2MDg5MGZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NH-n1uNfImWoRRRRCGI2bouYZjuj2gILBPsaOdgFuko'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />

      <iframe width="90%" 
      height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameBorder="0"
      allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.publishe_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default player
