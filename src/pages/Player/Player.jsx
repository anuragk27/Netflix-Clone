import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
// import cards_data from '../../assets/cards/Cards_data'

const Player = () => {

  const {redirect} = useParams();
  const navigate = useNavigate();

  // const [apiData,setApiData] = useState({
  //   name:"",
  //   key:"",
  //   published_at:"",
  //   type:""
  // })

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWZhOTdmNzkxYWU4NWYwYTlkZTdhMTE4YWQ0ZWFiNCIsIm5iZiI6MTczNjQyNzk1My4zMzEsInN1YiI6IjY3N2ZjOWIxYzgxYWNhYTYzZGJiNDM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KpckKsy3UIhn9zvN66kD0dsSEYH-r0qtjhNdmiAS7AQ'
  //   }
  // };
  
  // useEffect(()=>{
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  //   .then(res => res.json())
  //   .then(res => setApiData(res.results[0]))
  //   .catch(err => console.error(err));
  // },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe width='90%' height='90%'
      // src={`https://www.youtube.com/embed/${apiData.key}`}
      src={`https://www.youtube.com/embed/${redirect}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info' >
        {/* <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p> */}
      </div>
    </div>
  )
}

export default Player