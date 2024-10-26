import React from 'react';
import styled from 'styled-components';

const PopularLanguages = () => {
  const popularLanguages = [
    { code: 'en', name: 'English' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    // Add more languages as needed
  ];

  return (
    <Container>
      <h4>Popular Languages</h4>
      <Content>
        {popularLanguages.map((language) => (
          <Card key={language.code}>
            <LanguageName>{language.name}</LanguageName>
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
  width: 200px; /* Increased width of the card */
  height: 100px; /* Set desired height */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5A5A5A; /* Original background color */
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
    transform: scale(1.05); /* Slight scaling on hover */
    background-color: #898989; /* Change hover color to #898989 */
  }
`;


const LanguageName = styled.span`
  font-weight: bold;
`;

export default PopularLanguages;
