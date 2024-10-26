// NewDisney.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewDisneyMovies, selectNewDisney } from '../features/movies/movieSlice';

const NewDisney = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectNewDisney);

  useEffect(() => {
    dispatch(fetchNewDisneyMovies());
  }, [dispatch]);

  return (
    <Container>
      <h4>New on Disney+</h4>
      <Content>
        {movies && movies.map((movie, key) => (
          <Wrap key={key}>
            <Link to={`/detail/${movie.id}`} onClick={() => console.log(`Navigating to detail page of movie ID: ${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
  overflow-x: hidden; /* Hide overflow outside the container */
`;

const Content = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 10px 0;
  scroll-behavior: smooth; /* Smooth scrolling */

  /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for other browsers */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Wrap = styled.div`
  flex: 0 0 auto; /* Prevent wrapping */
  width: 150px;  /* Reduced width */
  height: 225px; /* Reduced height */
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

export default NewDisney;
