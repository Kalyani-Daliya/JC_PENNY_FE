import React from 'react'
import {MovieContext} from '../pages/index'

const Movies = () => {
	const data = React.useContext(MovieContext);  
	const MovieData = data['movies'];
	const [text, setText] = React.useState(MovieData ? MovieData[0].title : '');
	
	return (
		<>
			<div className="flex pb-20 sm:pb-0 flex-col w-full bg-gray-300 mt-5">
				{MovieData  && MovieData.map((val,key)=>{
					return(
						<div onClick={()=>{data.setCurrent(val);setText(val.title)} } key={key} className="mt-1 cursor-pointer w-full">
							<span className={`pl-4 w-full block  ${text == val.title ? 'font-bold bg-slate-400' : ''}`}>{val.title}</span>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Movies
