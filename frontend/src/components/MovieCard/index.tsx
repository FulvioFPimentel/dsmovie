import MovieScore from "../MovieScore";
import { Link } from 'react-router-dom';
import "./styles.css"
import { Movie } from "utils/requests";

type Props ={
    movie: Movie;
}

const MovieCard = ( { movie }: Props) => {


    return (
        <div className="dsmovie-card-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    )
}

export default MovieCard;