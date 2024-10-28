// components/PopularLanguageMovies.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LANGUAGES = [
    { code: "en", name: "English" },
    { code: "ml", name: "Malayalam" },
    { code: "ta", name: "Tamil" },
    { code: "hi", name: "Hindi" },
    { code: "te", name: "German" },
    { code: "te", name: "France" },
    { code: "te", name: "Korean" }
];

const PopularLanguageMovies = () => {
    const navigate = useNavigate();

    const handleLanguageClick = (languageCode) => {
        navigate(`/movies/${languageCode}`);
    };

    return (
        <Container>
            <h4>Popular Languages</h4>
            <Content>
                {LANGUAGES.map((language) => (
                    <Card key={language.code} onClick={() => handleLanguageClick(language.code)}>
                        <LanguageName>{language.name}</LanguageName>
                    </Card>
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.div`
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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5A5A5A; /* Background color */
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        background-color: #898989; /* Hover color */
    }
`;

const LanguageName = styled.span`
    font-weight: bold;
    color: white; /* Set text color for visibility */
`;

export default PopularLanguageMovies;
