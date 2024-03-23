import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CollectionCard from "./CollectionCard";

import nft1 from "../../assets/nft-1.jpg";
import nft2 from "../../assets/nft-2.jpg";
import nft3 from "../../assets/nft-3.jpg";
import nft4 from "../../assets/nft-4.jpg";
import nft5 from "../../assets/nft-5.jpg";
import nft6 from "../../assets/nft-6.jpg";
import depositBg from "../../assets/depositsbg.png";

const Collections = () => {
  const theme = useTheme();
  const nfts = [
    {
      image: nft1,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
    {
      image: nft2,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
    {
      image: nft3,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
    {
      image: nft4,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
    {
      image: nft5,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
    {
      image: nft6,
      name: "Bored Ape Yacht Club",
      size: 9998,
      floorPrice: 25,
      borrow: 12.5,
      ratio: "50%",
    },
  ];
  return (
    <Box className="h-fit w-full relative py-16 px-6 sm:p-16 collections-bg">
      <Box data-aos="fade-left">
        <Typography
          className="poppins text-2xl uppercase press-start"
          sx={{ color: theme.palette.light }}
        >
          Collections
        </Typography>
        <Typography
          className="poppins text-4xl uppercase font-bold press-start"
          sx={{ color: theme.palette.light }}
        >
          To Borrow
        </Typography>
      </Box>
      <Grid container className="pt-14 pb-10">
        {nfts.map((nft, i) => (
          <Grid
            item
            xs={12}
            key={i}
            sm={6}
            md={4}
            className="p-2"
            data-aos="fade-up"
          >
            <CollectionCard nft={nft} />
          </Grid>
        ))}
      </Grid>
      <Grid container className="flex items-center">
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <Typography className="poppins text-xl uppercase press-start" sx={{ color: theme.palette.light }}>
            DEPOSITS AND BORROW
          </Typography>
          <Typography className="poppins text-3xl uppercase press-start font-bold" sx={{ color: theme.palette.light }}>
            TOTAL VALUE LOCKED
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-right">
          <img src={depositBg} alt="bg" className="w-full h-fit" />
        </Grid>
      </Grid>
      <Grid container className="flex items-center">
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <img src={depositBg} alt="bg" className="w-full h-fit" />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-right">
          <Typography
            className="poppins text-xl uppercase press-start"
            sx={{ color: theme.palette.light }}
          >
            DEPOSITS AND BORROW
          </Typography>
          <Typography
            className="poppins text-3xl uppercase font-bold press-start"
            sx={{ color: theme.palette.light }}
          >
            TOTAL VALUE LOCKED
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Collections;
