import React, { useEffect, useState } from 'react'
import Tmbd from './Tmbd';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() =>{
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmbd.getHomeList()
      setMovieList(list)
    }

    loadAll()
  },[])

  return (
    <div className='page'>
     
     {featuredData &&
     <FeaturedMovie />
     }
     
     <section className='lists'>
      {movieList.map((item, key)=>(
      <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
     </section>

    </div>
  );
}
