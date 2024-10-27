'use client'
import React, { useState, useEffect }  from 'react';
import MovieCard from '../home-page/MovieCard';
import SearchBar from "@/components/home-page/SearchBar";

const MovieSection = () => {
    // const movies = [
    //     { title: 'Joker', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cddfa585-0197-4c1c-a6ba-b75632f25625/dg10uie-88afa96a-1505-4aed-ab94-28d793f4b54f.jpg/v1/fill/w_1920,h_1920,q_75,strp/jocker__concept_art_by_exclusiveartmaker193_dg10uie-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkZGZhNTg1LTAxOTctNGMxYy1hNmJhLWI3NTYzMmYyNTYyNVwvZGcxMHVpZS04OGFmYTk2YS0xNTA1LTRhZWQtYWI5NC0yOGQ3OTNmNGI1NGYuanBnIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvY2RkZmE1ODUtMDE5Ny00YzFjLWE2YmEtYjc1NjMyZjI1NjI1XC9leGNsdXNpdmVhcnRtYWtlcjE5My00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.nTSNToaeMRIQvTvbEmgZ8NGtCBXmlFm-RhgqAVm8XDU' },
    //     { title: 'Encanto', imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg' },
    //     { title: 'The Wild Robot', imageUrl: 'https://static.ipic.com/filmimage/HO00003020/20240830/The_Wild_Robot.jpg?width=400&maxWidth=400' },
    //     { title: 'Upcoming', imageUrl: 'https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg' },
    //     { title: 'Venom', imageUrl: 'https://amc-theatres-res.cloudinary.com/v1717422655/amc-cdn/production/2/movies/68100/68093/PosterDynamic/165390.jpg' },
    //     { title: 'Shang-chi', imageUrl: 'https://beebom.com/wp-content/uploads/2023/08/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg?w=600' },
    //     { title: 'Love again', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjViZDc3N2MtZThlNi00ZTc3LThiNzctZTg3YTM3YzExZGQxXkEyXkFqcGc@._V1_.jpg' },
    //     { title: 'BatMan', imageUrl: 'https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=2048,f=jpeg,q=85/posts/images/620004204764772843/fada58e5-fbd0-4766-934e-62dd1e669555.jpg' },
    // ];


    const [movies, setMovie] = useState(null);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f2b8f0e9d956644014677e8e4fb1b8c", {
            method: "GET",

        })
            .then((response) => response.json())
            .then((data) => {
                setMovie(data[0].movies);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);



    const [visibleMovies, setVisibleMovies] = useState(4);

    const handleLoadMore = () => {
        setVisibleMovies((prev) => prev + 100);
    };

    return (
        <div className="font-serif">
            <h1 className="text-center text-red-800 text-4xl py-4">
                Find Your Favorite Movie!
            </h1>
            <SearchBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {movies.slice(0, visibleMovies).map((movie, index) => (
                    <MovieCard key={index} title={movie.original_title} imageUrl={movie.imageUrl} />
                ))}
            </div>
            {visibleMovies < movies.length && (
                <button onClick={handleLoadMore} className="block mx-auto mt-4 px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700">
                    Load More
                </button>
            )}
        </div>
    );
};

export default MovieSection;
