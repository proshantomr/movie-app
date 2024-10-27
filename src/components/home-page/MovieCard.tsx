import React from 'react';
import { FaRegHeart } from "react-icons/fa";


interface MovieCardProps {
    title: string;
    imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl }) => {
    return (
      <div className="bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-red-800">

     <div className="w-full h-96  overflow-hidden">
      <img
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover" // Adjust this to your needs
      />
     </div>
      <div className="p-4 ">
        <h2 className="text-lg font-sans text-red-900 mb-2">{title}</h2>
        <div className="flex justify-between">
          <button className="readme border ">
            Read Me
          </button>
            <div className="flex items-center justify-end">
                <a
                    href="/watch-movie"
                    className="text-blue-600 text-sm hover:underline"
                >
                    Watch Movie
                </a>
                <button className="border border-transparent ml-3 hover:border-red-800 p-2 rounded-full">
                    <FaRegHeart className="text-red-800"/>
                </button>
            </div>
        </div>
      </div>
      </div>

    );
};

export default MovieCard;
