import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import depositBg from "../../assets/depositsbg.png";

const Banner = ({ reverse, theme }) => {
  return (
    <Box
      className={`h-fit w-full relative px-16 ${
        reverse ? "collections-reverse-bg" : "collections-bg"
      } `}
    >
      <Grid
        container
        className={`flex items-center ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <img src={depositBg} alt="bg" className="w-full h-fit" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          data-aos="fade-right"
          className="pb-5 sm:pb-0"
        >
          <Typography
            className="poppins text-xl uppercase press-start"
            sx={{ color: theme.palette.light }}
          >
            DEPOSITS AND BORROW
          </Typography>
          <Typography
            className="poppins text-3xl uppercase text-white font-bold press-start"
            sx={{ color: theme.palette.light }}
          >
            TOTAL VALUE LOCKED
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
