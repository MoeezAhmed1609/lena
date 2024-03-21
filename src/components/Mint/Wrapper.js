import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import StyledButton from "../StyledButton";
import bg from "../../assets/mint-bg.png";

const Wrapper = () => {
  return (
    <Grid container className="bg-black w-full h-fit sm:h-screen pt-[20%] sm:pt-0 px-[13%] relative">
      <Grid item xs={12} sm={6} md={4} className="h-full w-full">
        <Box className="w-full h-full flex flex-col justify-end gap-y-4">
          <Typography className="poppins text-4xl font-semibold capitalize text-white">
            Your premier card for Web3 liquidity.
          </Typography>

          <Typography className="poppins text-base text-[#bababb]">
            Your gateway to LENA network with the perfect blend of membership
            and utility.
          </Typography>
          <Box className="h-28 sm:h-[28%] w-fit bg-transparent flex flex-col justify-between mt-6">
            <StyledButton title={"Mint Ended"} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={8} className="p-2.5 h-full">
        <Box className="flex justify-center items-center h-full">
          <img src={bg} alt="mint" className="h-48 sm:h-[70%] w-fit" />
        </Box>
      </Grid>
      <Box className="absolute w-full bg-black h-28 bottom-0 left-0 px-[8%] py-3 hidden sm:flex items-center">
        <Box className="flex items-center justify-center w-[20%] h-full gap-y-4 border-r border-white">
          <Box className="text-center">
            <Typography className="poppins text-base text-[#bababb]">
              Mint Date
            </Typography>
            <Typography className="poppins text-2xl font-semibold text-white">
              2023-07-10
            </Typography>
          </Box>
        </Box>
        <Box className="flex items-center justify-center w-[20%] h-full gap-y-4 border-r border-white">
          <Box className="text-center">
            <Typography className="poppins text-base text-[#bababb]">
              Supply
            </Typography>
            <Typography className="poppins text-2xl font-semibold text-white">
              Unlimited
            </Typography>
          </Box>
        </Box>
        <Box className="flex items-center justify-center w-[20%] h-full gap-y-4 border-r border-white">
          <Box className="text-center">
            <Typography className="poppins text-base text-[#bababb]">
              Price
            </Typography>
            <Typography className="poppins text-2xl font-semibold text-white">
              Free
            </Typography>
          </Box>
        </Box>
        <Box className="flex items-center justify-center w-[20%] h-full gap-y-4 border-r border-white">
          <Box className="text-center">
            <Typography className="poppins text-base text-[#bababb]">
              Characteristics
            </Typography>
            <Typography className="poppins text-xl font-semibold text-white">
              Level 1 Member pass
            </Typography>
          </Box>
        </Box>
        <Box className="flex items-center justify-center w-[20%] h-full gap-y-4">
          <Box className="text-center">
            <Typography className="poppins text-base text-[#bababb]">
              Network
            </Typography>
            <Typography className="poppins text-xl font-semibold text-white">
              Polygon Testnet (Mumbai)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Wrapper;
