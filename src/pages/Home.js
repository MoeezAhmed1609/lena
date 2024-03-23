import React from "react";
import { Box, useTheme } from "@mui/material";
// Components
import Wrapper from "../components/Home/Wrapper";
import Collections from "../components/Home/Collections";
import Banner from "../components/Home/Banner";
import Roadmap from "../components/Home/Roadmap";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      className="w-full min-h-screen overflow-x-hidden"
      sx={{
        backgroundColor: theme.palette.main,
      }}
    >
      <Wrapper theme={theme} />
      <Collections theme={theme} />
      <Banner reverse={true} theme={theme} />
      <Banner theme={theme} />
      <Roadmap theme={theme} />
    </Box>
  );
};

export default Home;
