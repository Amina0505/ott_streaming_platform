import React from 'react';
import styled from 'styled-components';

const PopularGenres = () => {
  const popularGenres = [
    { code: 'action', name: 'Action' },
    { code: 'comedy', name: 'Comedy' },
    { code: 'drama', name: 'Drama' },
    { code: 'horror', name: 'Horror' },
    { code: 'thriller', name: 'Thriller' },
    { code: 'romance', name: 'Romance' },
    // Add more genres as needed
  ];

  return (
    <Container>
      <h4>Popular Genres</h4>
      <Content>
        {popularGenres.map((genre) => (
          <Card key={genre.code}>
            <GenreName>{genre.name}</GenreName>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
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
  width: 200px; /* Width of the card */
  height: 100px; /* Height of the card */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a5a5a; /* Original background color */
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
    transform: scale(1.05); /* Slight scaling on hover */
    background-color: #898989; /* Change hover color to #898989 */
  }
`;

const GenreName = styled.span`
  font-weight: bold;
  color: white; /* Text color for better visibility */
`;

export default PopularGenres;
