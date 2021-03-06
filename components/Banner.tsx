import { BiInfoCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'

import Image from "next/image";
import { Movie } from '../typings'

interface Props {
    netflixOriginals: Movie[]
  }
  
function Banner({ netflixOriginals }: Props){
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() => {
        setMovie(
          netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
      }, [netflixOriginals])
    return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 pl-4 lg:pl-16">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 h-[95vh] w-full">
          <Image
            layout='fill'
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            objectFit="cover"
          />
        </div>
  
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>
        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-6 md:w-6" />
            Play
          </button>
  
          <button
            className="bannerButton bg-[gray]/70"
          >
            <BiInfoCircle className="h-5 w-5 md:h-8 md:w-8" /> More Info
          </button>
        </div>
      </div>
    )
}

export default Banner
