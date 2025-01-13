import React, { useEffect, useState, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {


  // const [apiData, setApiData] = useState([]);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWZhOTdmNzkxYWU4NWYwYTlkZTdhMTE4YWQ0ZWFiNCIsIm5iZiI6MTczNjQyNzk1My4zMzEsInN1YiI6IjY3N2ZjOWIxYzgxYWNhYTYzZGJiNDM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KpckKsy3UIhn9zvN66kD0dsSEYH-r0qtjhNdmiAS7AQ'
  //   }
  // };
  
  // useEffect(()=>{

  //   fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  //   .then(res => res.json())
  //   .then(res => setApiData(res.results)) 
  //   .catch(err => console.error(err));
  // },[])

  return (
      <div className="title-cards">
        <h2>{title?title:"Popular on Netflix"}</h2>
        {/* <h2>Blockbuster Movies</h2> */}
        <div className="card-list">
          {/* {apiData.map((card,index)=>{
              return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </Link>
          })} */}

          {/* Origional code */}

          {cards_data.map((card,index)=>{
            if(card.category === category){
              return <Link to={`/player/${card.redirect}`} className='card' key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </Link>
            }
          })}
        </div>

        {/* <h2>Only on Netflix</h2>
        <div className="card-list">
        {cards_data.map((card,index)=>{
            if(card.category === "popular"){
              return <div className='card' key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
            }
          })}
        </div>
        <h2>Upcoming</h2>
        <div className="card-list">
        {cards_data.map((card,index)=>{
            if(card.category === "upcoming"){
              return <div className='card' key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
            }
          })}
        </div>
        <h2>Top pics</h2>
        <div className="card-list">
        {cards_data.map((card,index)=>{
            if(card.category === "now_playing"){
              return <div className='card' key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
            }
          })}
        </div> */}

        
      </div>
  )
}

export default TitleCards