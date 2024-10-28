import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import CartoonDisneyMovies from "./CartoonDisneyMovies";
import RankedMovies from "./RankedMovies";
import NewMoviesForYou from "./NewMoviesForYou";
import RecommendedMovies from "./RecommendedMovies";
import TrendingMalayalamMovies from "./TrendingMalayalamMovies";
import EntertainmentMoviesForYou from "./EntertainmentMoviesForYou";
import HindiActionMovies from "./HindiActionMovies";
import RomanticIndianMovies from "./RomanticIndianMovies";
import PopularLanguageMovies from "./PopularLanguageMovies";
import PopularGenresMovies from "./PopularGenresMovies";
import IndianHorrorMovies from "./IndianHorrorMovies";
import TamilThrillerMovies from "./TamilThrillerMovies";
// import Recommends from "./Recommends";
// import NewDisney from "./NewDisney";
// import MalayalamUpcomingMovies from "./MalayalamLatestMovies";
// import PopularLanguages from "./PopularLanguages";
// import PopularGenres from "./PopularGenres";
// import TamilMovies from "./TamilMovies";
// import MalayalamDramaMovies from "./MalayalamDramaMovies";
// import ComedyRecommends from "./ComedyRecommends";
// import HindiActionMovies from "./HindiActionMovies";

const Home = (props) => {
  return (
    <Container>
      {/* Components removed as per your request */}
      <ImageSlider />
      <Viewers/>
      <RankedMovies/>
      <NewMoviesForYou/>
      <CartoonDisneyMovies/>
      <RecommendedMovies/>
      <TrendingMalayalamMovies/>
      <EntertainmentMoviesForYou/>
      <HindiActionMovies/>
      <RomanticIndianMovies/>
      <PopularLanguageMovies/>
      <PopularGenresMovies/>
      <IndianHorrorMovies/>
      <TamilThrillerMovies/>

      {/* <Recommends/>
      <NewDisney/>
      <MalayalamUpcomingMovies/>
      <PopularLanguages/>
      <PopularGenres/>
      <TamilMovies/>
      <MalayalamDramaMovies/>
      <ComedyRecommends/>
      <HindiActionMovies/> */}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
