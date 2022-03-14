import React from 'react'
import Image from 'next/image'
import {MovieContext} from '../pages/index'

const Poster = () => {
	const data = React.useContext(MovieContext);  
	const movieDetails = data['currentSelected'];
	const src = movieDetails.image

	return (
		<>
			<div className="flex w-full flex-col">
				<div className=" flex  justify-center p-5 h-96">
					{
						src?<img className='rounded-3xl' src={`${src}`} alt="panda" />:null
					}
				</div>
				<div className="flex justify-center">
					<span className='font-bold'>{movieDetails.title} ({movieDetails.made})</span>
				</div>
				<div className="flex text-center flex-col justify-center mt-4">
					<span className="w-full flex justify-center items-center"><p className="text-center p-1 font-bold">Director :</p> <span className='font-medium'>{movieDetails.director}</span></span>
					<span className="w-full flex justify-center items-center"><p className="text-center p-1 font-bold">Caste :</p> <span className='font-medium'>{movieDetails.caste}</span></span>
					<span className="w-full flex justify-center items-center"><p className="text-center p-1 font-bold">Genere :</p> <span className='font-medium'>{movieDetails.genere}</span></span>
				</div>
			</div>
		</>
	)
}

export default Poster