import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchTamilThrillerMovies } from "../services/tmdb"; // Adjust the path as needed
import { Link } from 'react-router-dom';

const TamilThrillerMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const moviesData = await fetchTamilThrillerMovies();
                setMovies(shuffleArray(moviesData).slice(0, 10)); // Shuffle and display the first 10 random movies
            } catch (error) {
                console.error("Failed to load Tamil thriller movies:", error);
            }
        };

        loadMovies();
    }, []);

    // Function to shuffle the array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <Container>
            <h4>Thriller Movies</h4>
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

const Container = styled.section`
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

export default TamilThrillerMovies;
