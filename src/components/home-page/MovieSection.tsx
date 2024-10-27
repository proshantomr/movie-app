'use client'
import React, { useState, useEffect } from 'react';
import MovieCard from '../home-page/MovieCard';
import SearchBar from "@/components/home-page/SearchBar";

interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
}

const MovieSection: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]); // Initialize movies as an array of Movie objects
    const [visibleMovies, setVisibleMovies] = useState<number>(8);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f2b8f0e9d956644014677e8e4fb1b8c")
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    setMovies(data.results); // Ensure data.results exists before setting
                } else {
                    console.error("Unexpected API response format:", data);
                }
            })
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    const handleLoadMore = () => {
        setVisibleMovies((prev) => prev + 4);
    };

    return (
        <div className="font-serif">
            <h1 className="text-center text-red-800 text-4xl py-4">
                Find Your Favorite Movie!
            </h1>
            <SearchBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {movies.slice(0, visibleMovies).map((movie) => (
                    <MovieCard
                        key={movie.id}
                        original_title={movie.original_title}
                        imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                ))}
            </div>
            {visibleMovies < movies.length && (
                <button
                    onClick={handleLoadMore}
                    className="block mx-auto mt-4 px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default MovieSection;
