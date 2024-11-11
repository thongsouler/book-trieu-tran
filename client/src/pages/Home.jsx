import { Box } from '@mui/material';
import React, { useEffect, useLayoutEffect } from 'react';
import tmdbConfigs from "../api/configs/tmdb.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";
import uiConfigs from "../configs/ui.configs";
import HomeSlide from '../components/Home/HomeSlide';
import StoryDescription from '../components/Home/StoryDescription';
import ExpansionInfo from '../components/Home/ExpansionInfo';
import StorySlide from '../components/Home/StorySlide';
import PurchaseBook from '../components/Home/PurchaseBook';
import AOS from 'aos';

const Home = () => {


  useLayoutEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'linear',
      delay: 50,
    });
  }, []);

  return (
    <>
      <Box sx={{ marginTop: "4rem" }}> {/* Adjust margin to push HomeSlide down */}
        <HomeSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
      </Box>

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }} id="idScrollDes">
        <Container header="THẦN CHIẾN TRIỀU TRẦN">
          <StoryDescription />
        </Container>

        <Box
          data-aos="fade-up"
          sx={{
            height: "100%",
            alignItems: "center",
            width: "100%",
            marginTop: "60px"
          }}
        >
          <iframe width="100%" height="600" src="https://www.youtube.com/embed/KWMgZ_5_ILo?si=BJSdS3ThFa05Sgv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
        <Container header="ĐỌC THỬ CÁC PHẦN TRUYỆN">
          <ExpansionInfo />
        </Container>
        <PurchaseBook />
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