import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, MoviePage } from "utils/requests";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import './styles.css'

const Listing = () => {

    const [ pageNumber,  setPageNumber ] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response => {
                const data = response.data as MoviePage
                setPageNumber(data.number)
        }) 
    }, [])

    return (
        <>
            <div>{pageNumber}</div>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Listing;