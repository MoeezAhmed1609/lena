import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import candy from "../../assets/candy.png";
import eth from "../../assets/eth.png";

const IFOSection = () => {
  const theme = useTheme();
  return (
    <Grid container className="h-fit w-full py-10">
      <Grid item xs={12} sm={6} className="pe-2.5 h-full">
        <Box className="w-full h-full border border-[#cdcccc] rounded-2xl p-5">
          <Box className="w-full h-fit py-5 rounded-xl bg-[#0e131c] gap-y-2.5 flex flex-col justify-center items-center">
            <img src={candy} alt="candy" className="h-40 w-fit" />
            <Typography className="uppercase poppins font-semibold text-lg text-[#9b9b9b] text-center">
              Your Allocation
            </Typography>
            <Typography className="uppercase poppins font-semibold text-5xl text-white text-center">
              0 $PLEB
            </Typography>
          </Box>
          <Box className="h-fit w-full block sm:flex items-center justify-between my-5">
            <Box className="flex gap-x-3 items-center">
              <Typography className="text-white poppins uppercase text-lg font-semibold">
                Deposit
              </Typography>
              <Typography className="text-white poppins text-sm">
                Min. deposit is:{" "}
                <span className="text-[#47a1ff]">0.1 PLEBE</span>
              </Typography>
            </Box>
            <Typography className="text-white poppins uppercase text-lg font-semibold">
              Balance: 0 PLEBE
            </Typography>
          </Box>
          <Box className="rounded-lg border border-[#cdcccc] my-3 bg-[#393a4a] w-full ps-3 flex gap-x-2.5 items-center py-2.5">
            <img src={eth} alt="eth" className="h-6 w-fit" />
            <Typography className="poppins font-semibold text-lg text-white">
              0
            </Typography>
          </Box>
          <label className="poppins text-white text-sm flex items-center gap-x-2.5 mb-5">
            <input type="checkbox" name="checkbox" value="value" />
            Please confirm you have read and understand PLEBE's ICO rules.
          </label>
          <Box className="button-border-gradient button-shadow w-full p-[2.5px] rounded-lg h-fit cursor-pointer">
            <Box
              className="h-fit py-3 w-full text-center rounded-lg"
              sx={{ backgroundColor: theme.palette.dark }}
            >
              <Typography
                sx={{ color: theme.palette.light }}
                className="text-[10px] font-semibold press-start"
              >
                Deposit
              </Typography>
            </Box>
          </Box>
          <Box className="h-fit w-full flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-between items-center my-5 px-5">
            <Button className="w-full lg:w-[44%] py-3 rounded-full bg-[#1e242d] text-white poppins capitalize gap-x-2 flex items-center">
              Share on <XIcon className="text-lg" />
            </Button>
            <Box className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-[#141118] rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                  Redeem to wallet
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="h-fit w-full flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-between items-center my-5 px-5">
            <Box className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-[#141118] rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                  Check In
                </Typography>
              </Box>
            </Box>
            <Box className="button-border-gradient w-full lg:w-[44%] p-[2.5px] rounded-full h-fit cursor-pointer">
              <Box className="h-fit p-2.5 w-full text-center bg-[#141118] rounded-full bg-opacity-95">
                <Typography className="text-white text-sm poppins">
                  Referrals
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} className="ps-2.5 h-full">
        <Box className="flex flex-col items-center justify-between h-full gap-y-16 w-full sm:ps-8 pe-2.5 pt-6 sm:pt-0">
          <Box className="rounded-lg bg-[#393a4a] flex items-center justify-evenly w-full py-2.5">
            <Box>
              <Typography className="poppins font-semibold text-lg text-white text-center">
                Raised (ETH)
              </Typography>
              <Box className="flex items-center">
                <img src={eth} alt="eth" className="h-5 w-fit" />
                <Typography className="poppins font-semibold text-lg text-white text-center">
                  853.1049
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="poppins font-semibold text-lg text-white text-center">
                Total (USD)
              </Typography>
              <Typography className="poppins font-semibold text-lg text-white text-center">
                $ 3,004,888
              </Typography>
            </Box>
          </Box>
          <Box className="rounded-lg bg-[#231c27] border border-[#cdcccc] flex items-center justify-evenly w-full py-4">
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              PRIVATE PHASE (MAX. 100 ETH)
            </Typography>
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              0.00020 ETH
            </Typography>
          </Box>
          <Box className="rounded-lg bg-[#231c27] border border-[#cdcccc] flex items-center justify-evenly w-full py-4">
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              WHITELIST PHASE (MAX. 500 ETH)
            </Typography>
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              0.00025 ETH
            </Typography>
          </Box>
          <Box className="rounded-lg bg-[#231c27] border border-[#cdcccc] flex items-center justify-evenly w-full py-4">
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              PUBLIC PHASE (MAX. 600 ETH)
            </Typography>
            <Typography className="poppins text-sm font-semibold text-[#9d9d9d] text-center">
              0.00030 ETH
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IFOSection;
