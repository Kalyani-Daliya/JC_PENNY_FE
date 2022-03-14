import Movies from "../components/Movies";
import Poster from "../components/Poster";
import React from 'react'
export const MovieContext = React.createContext();
import axios from 'axios';

export async function getServerSideProps() {
  const endpoint = `http://localhost:8000/api/v1/movies`;
	let data = await axios.get(endpoint);
	let movieDetails = data.data.movies.movies;

	return {
    props: {
      movieData: movieDetails,
    },
  };
  }

const Home = (props) => {
  const setCurrent = (element) => {
    setState({...state, currentSelected: element})
  }

  const initState = {
    currentSelected: props.movieData ? props.movieData[0] : '',
    movies: props.movieData,
    setCurrent: setCurrent
  } 

  const [state, setState] = React.useState(initState)
 
  return (
    <>
      <MovieContext.Provider value={state}>
        <div className="w-full sm:w-1/2 sm:mx-auto flex  justify-center flex-col pt-10 sm:p-20" data-testid="home-page">
          <h1 className=" p-4 text-center bg-black text-white font-extrabold" data-testid="title-content">
            {state.currentSelected ? state.currentSelected.title: 'Movie Catalogue'}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center">
            <Poster />
            <Movies />
          </div>
        </div>
      </MovieContext.Provider>
    </>
  );
};
export default Home;
