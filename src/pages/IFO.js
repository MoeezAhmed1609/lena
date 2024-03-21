import React from "react";
import { Box } from "@mui/material";
import LaunchBanner from "../components/IFO/LaunchBanner";
import IFOSection from "../components/IFO/IFOSection";
import Details from "../components/IFO/Details";
import bg from "../assets/ifo-bg.png";

const IFO = () => {
  return (
    <Box className="w-full h-fit bg-black p-5 pt-28">
      <Box
        className="bg-center bg-no-repeat bg-cover w-full h-fit z-10"
        sx={{ backgroundImage: `url(${bg})` }}
      >
        <LaunchBanner />
        <IFOSection />
        <Details />
      </Box>
    </Box>
  );
};

export default IFO;
