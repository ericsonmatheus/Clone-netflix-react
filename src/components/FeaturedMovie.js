import React from "react";
import './FeaturedMovie.css';


export default ({movie}) => {
    
    let yearPremiere = new Date(movie.first_air_date);
    let genres = [];
    for(let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }
    let description = movie.overview;
    if(description.length > 180) {
        description = description.substring(0, 180) + '...';
    }
    let nameOfMovie = movie.original_name;
    if(nameOfMovie.length > 35) {
        nameOfMovie = nameOfMovie.substring(0, 35) + '...';
    }
    
    return (
        <section className="featuredMovie" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}>
            <div className="featuredMovie--vertical">
                <div className="featuredMovie--horizontal">
                <div className="featuredMovie--name">{nameOfMovie}</div>
                <div className="featuredMovie--info">
                    <div className="featuredMovie--point">{movie.vote_average} Pontos</div>
                    <div className="featuredMovie--year">{yearPremiere.getFullYear()}</div>
                    <div className="featuredMovie--seasons">{movie.number_of_seasons} Temporada{movie.number_of_seasons !== 1 ? 's' : ''}</div>
                </div> 
                <div className="featuredMovie--description">{description}</div>
                <div className="featuredMovie--buttons">
                    <a href="" className="featuredMovie--play">► Assistir</a>
                    <a href="" className="featuredMovie--addMovie">+ Minha Lista</a>
                </div>
                <div className="featuredMovie--genres"><strong>Gênero: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}