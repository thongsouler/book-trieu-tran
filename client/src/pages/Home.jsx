import { Box } from '@mui/material';
import React from 'react';
import tmdbConfigs from "../api/configs/tmdb.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";
import uiConfigs from "../configs/ui.configs";
import HomeSlide from '../components/Home/HomeSlide';
import StoryDescription from '../components/Home/StoryDescription';
import ExpansionInfo from '../components/Home/ExpansionInfo';
import StorySlide from '../components/Home/StorySlide';

const Home = () => {
  return (
    <>
      <HomeSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="Descend into the Dark">
          <StoryDescription />
        </Container>

        <Box
          sx={{
            height: "100%",
            alignItems: "center",
            width: "100%",
            marginTop: "20px"
          }}
        >
          <iframe src="https://www.youtube.com/embed/JuP47fRBsWg?wmode=opaque&amp;enablejsapi=1" height="480" width="100%" scrolling="no" frameborder="0" allowfullscreen="" id="yui_3_17_2_1_1730799240738_106"></iframe>
        </Box>
        <Container header="Hollow Knight Expands with 4 Giant Free Content Packs">
          <ExpansionInfo />
        </Container>

        <StorySlide />

        {/* <Container header="top rated movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

        <Container header="top rated series">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container> */}
      </Box>
    </>
  );
};

export default Home;