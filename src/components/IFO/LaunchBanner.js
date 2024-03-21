import React from "react";
import { Box, Button, Typography } from "@mui/material";
import candy from "../../assets/candy.png";
import bg from "../../assets/candy-wrapper-bg.png";

const LaunchBanner = () => {
  return (
    <Box
      className="w-full h-fit md:h-56 lg:h-44 py-5 px-8 border-2 rounded-2xl border-[#505050] bg-cover bg-no-repeat bg-center flex flex-col sm:flex-row justify-between"
      sx={{ backgroundImage: `url(${bg})` }}
    >
      <Box className="w-full sm:w-1/2 h-full">
        <Box className="flex items-center gap-x-4">
          <img src={candy} alt="candy" className="h-12 w-fit" />
          <Typography className="poppins text-3xl font-semibold capitalize text-white">
            Candy Fair Launch
          </Typography>
          <Box className="flex text-xs py-1 px-3 rounded-md gap-x-2 font-semibold items-center uppercase poppins bg-[#353648] text-[#fff4ad]">
            <Box className="w-2 h-2 rounded-full bg-[#fff4ad]" />
            Ended
          </Box>
        </Box>
        <Typography className="poppins text-sm text-[#cdcccc] mt-4">
          Participate and Power Up Your Liquidity with $CANDY
        </Typography>
        <Button
          className="h-fit w-32 py-1.5 bg-[#272728] mt-2.5 rounded-lg border border-[#cdcccc] text-[#cdcccc] capitalize poppins text-xs"
          variant="outlined"
        >
          Find Out More
        </Button>
      </Box>
      <Box className="w-full sm:w-1/2 h-full mt-8 sm:mt-0 flex justify-center items-center">
        <Typography className="poppins text-3xl text-center font-semibold capitalize text-white">
          Fair Ended
        </Typography>
      </Box>
    </Box>
  );
};

export default LaunchBanner;
