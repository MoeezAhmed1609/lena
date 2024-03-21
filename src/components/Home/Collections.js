import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CollectionCard from "./CollectionCard";

import nft1 from "../../assets/nft1.avif";
import nft2 from "../../assets/nft2.avif";
import nft3 from "../../assets/nft3.avif";
import depositBg from "../../assets/depositsbg.png";

const Collections = () => {
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
  ];
  return (
    <Box className="h-fit w-full relative py-16 px-6 sm:p-16 collections-bg">
      <Box data-aos="fade-left">
        <Typography className="poppins text-2xl uppercase button-text">
          Collections
        </Typography>
        <Typography className="poppins text-4xl uppercase text-white font-bold">
          To Borrow
        </Typography>
      </Box>
      <Grid container className="pt-14 pb-10">
        {nfts.map((nft, i) => (
          <Grid item xs={12} key={i} sm={6} md={4} className="p-2" data-aos="fade-up">
            <CollectionCard nft={nft} />
          </Grid>
        ))}
      </Grid>
      <Grid container className="flex items-center">
        <Grid item xs={12} sm={6} data-aos="fade-left">
          <Typography className="poppins text-2xl uppercase button-text">
            DEPOSITS AND BORROW
          </Typography>
          <Typography className="poppins text-4xl uppercase text-white font-bold">
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
          <Typography className="poppins text-2xl uppercase button-text">
            DEPOSITS AND BORROW
          </Typography>
          <Typography className="poppins text-4xl uppercase text-white font-bold">
            TOTAL VALUE LOCKED
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Collections;
