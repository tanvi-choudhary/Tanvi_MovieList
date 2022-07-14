import axios from "axios";
import IMovie from "../models/IMovie";
import IComingSoon from "../models/IComingSoon";
import ITopIndia from "../models/ITopIndia";
import ITopMovies from "../models/ITopMovies";
import IFavo from "../models/IFavo";


const getMovieTheater = () => {
    return axios.get<IMovie[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters`)
    .then(response => response.data)
};

const getMovieById = async ( id : number ) => {
    return  axios.get<IMovie>( `${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters/${id}` )
     .then(response => response.data)
};



const getComingSoon = () => {
    return axios.get<IComingSoon[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming`)
    .then(response => response.data)
};

const getComingSoonId = async ( id : string | number ) => {
    const response = await axios.get<IComingSoon>( `${process.env.REACT_APP_API_BASE_URL}/movies-coming/${id}` );
    return response.data;
};

const getTopIndia = () => {
    return axios.get<ITopIndia[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india`)
    .then(response => response.data)
};

const getTopIndiaId = async ( id : string | number ) => {
    const response = await axios.get<ITopIndia>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-india/${id}` );
    return response.data;
};

const getTopMovies = () => {
    return axios.get<ITopMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies`)
    .then(response => response.data)
};

const getTopMoviesId = async ( id : string | number ) => {
    const response = await axios.get<ITopMovies>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-movies/${id}` );
    return response.data;
};

const getFavo = () => {
    return axios.get<IFavo[]>(`${process.env.REACT_APP_API_BASE_URL}/favourit`)
    .then(response => response.data)
};


export {
    getMovieTheater,
    getMovieById,
    getComingSoon,
    getComingSoonId,
    getTopIndia,
    getTopIndiaId,
    getTopMovies,
    getTopMoviesId,
    getFavo
};