import { Box } from "@mui/material";
import React from "react";
import Wrapper from "../components/Mint/Wrapper";
import Banner from "../components/Mint/Banner";
import Faq from "../components/Mint/Faq";

const Mint = () => {
  return (
    <Box className="w-full min-h-screen bg-black">
      <Wrapper />
      <Banner reverse={true} />
      <Banner id={"utility"} />
      <Banner reverse={true} id={"leaderboard"} />
      <Faq />
    </Box>
  );
};

export default Mint;
