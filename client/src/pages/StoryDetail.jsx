import { Box, Toolbar, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonMediaGrid from "../components/common/PersonMediaGrid";
import tmdbConfigs from "../api/configs/tmdb.configs";
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import personApi from "../api/modules/person.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../redux/features/globalLoadingSlice";

const StoryDetail = () => {
  const { storyId } = useParams();
  const [storyContent, setStoryContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the HTML file from the public folder
    fetch(`/story/${storyId}.html`)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const content = doc.querySelector("body").innerHTML;
        setStoryContent(content);
      })
      .catch((error) => console.error("Error fetching story:", error));
  }, []);

  return (
    <>
      <Toolbar />
      <>
        {storyContent &&
          <Box sx={{ ...uiConfigs.style.mainContent }}>
            <Box sx={{
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", md: "row" }
            }}>
              <div
                dangerouslySetInnerHTML={{ __html: storyContent }}
                style={{ padding: "16px" }}
              />
            </Box>
          </Box>}
      </>
    </>
  );
};

export default StoryDetail;