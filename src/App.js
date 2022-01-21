import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import netflix_loading from './netflix_loading.gif';

export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredMovieInfo, setFeaturedMovieInfo] = useState(null);
  const [blackheader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async() => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedMovieInfo(chosenInfo);
      console.log(chosenInfo)
    }
    
    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 100){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='page'>
      {movieList.length <= 0 && 
        <div className='loading'>
        <img src={netflix_loading} alt='Loading'></img>
        </div>
      }
      
      < Header black={blackheader}/>

      { featuredMovieInfo &&
        < FeaturedMovie movie={featuredMovieInfo}/>
      }
      
      <section className="lists">
        {movieList.map(
          (item, key) => (
          < MovieRow key={key} title={item.title} items={item.items}/>)
        )
        }
      </section>
      <footer>
        Feito por Ericson Matheus <br/>
        Diretos de imagem Netflix <br/>
        Dados Pegos do site Themoviedb.org
      </footer>
    </div>
    
  )
}
