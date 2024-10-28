import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GENRES = [
    { id: 28, name: "Action" }, // Action
    { id: 35, name: "Comedy" }, // Comedy
    { id: 18, name: "Drama" },  // Drama
    { id: 80, name: "Crime" },  // Crime
    { id: 27, name: "Horror" }, // Horror
    { id: 10749, name: "Romance" } // Romance
];

const PopularGenresMovies = () => {
    const navigate = useNavigate(); // Use navigate hook

    const handleGenreClick = (id) => {
        navigate(`/genre/${id}`);
    };

    return (
        <Container>
            <h4>Popular Genres</h4>
            <Content>
                {GENRES.map((genre) => (
                    <Card key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                        <GenreName>{genre.name}</GenreName>
                    </Card>
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.section`
    padding: 5px;
`;

const Content = styled.div`
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding: 10px 0;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const Card = styled.div`
    flex: 0 0 auto;
    width: 200px; /* Set desired width */
    height: 100px; /* Set desired height */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5A5A5A; /* Background color */
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
        transform: scale(1.05); /* Slight scaling on hover */
        background-color: #898989; /* Change hover color */
    }
`;

const GenreName = styled.span`
    font-weight: bold;
    color: white; /* Text color for visibility */
`;

export default PopularGenresMovies;
