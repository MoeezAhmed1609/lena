import React from "react";
import { Box } from "@mui/material";
// Components
import Wrapper from "../components/Home/Wrapper";
import Collections from "../components/Home/Collections";
import Banner from "../components/Home/Banner";
import Roadmap from "../components/Home/Roadmap";

const Home = () => {
  return (
    <Box className="w-full min-h-screen bg-black overflow-x-hidden">
      <Wrapper />
      <Collections />
      <Banner reverse={true} />
      <Banner />
      <Roadmap />
    </Box>
  );
};

export default Home;
