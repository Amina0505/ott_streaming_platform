// components/RomanticIndianMovies.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchRomanticMoviesByLanguage } from "../services/tmdb"; // Adjust the path as needed
import { Link } from 'react-router-dom';

const ROMANCE_GENRE_ID = 10749; // Romance genre ID

const RomanticIndianMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                // Fetch romantic movies from multiple Indian languages
                const hindiRomance = await fetchRomanticMoviesByLanguage("hi", ROMANCE_GENRE_ID);
                const tamilRomance = await fetchRomanticMoviesByLanguage("ta", ROMANCE_GENRE_ID);
                const teluguRomance = await fetchRomanticMoviesByLanguage("te", ROMANCE_GENRE_ID);
                const malayalamRomance = await fetchRomanticMoviesByLanguage("ml", ROMANCE_GENRE_ID);

                // Combine the movies into one array and limit to 5 from each language
                const combinedMovies = [
                    ...hindiRomance.slice(0, 5),
                    ...tamilRomance.slice(0, 5),
                    ...teluguRomance.slice(0, 5),
                    ...malayalamRomance.slice(0, 5),
                ];

                // Shuffle the combined movies
                const shuffledMovies = combinedMovies.sort(() => Math.random() - 0.5);
                setMovies(shuffledMovies);
            } catch (error) {
                console.error("Failed to load romantic Indian movies:", error);
            }
        };

        loadMovies();
    }, []);

    return (
        <Container>
            <h4>Romantic Movies</h4>
            <Content>
                {movies.map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/movie/${movie.id}`}> {/* Link to movie details */}
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
`;

const Content = styled.div`
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding: 10px 0;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
`;

const Wrap = styled.div`
    flex: 0 0 auto;
    width: 150px;  /* Fixed width */
    height: 225px; /* Fixed height */
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

export default RomanticIndianMovies;
