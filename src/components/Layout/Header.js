import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import MobileDrawer from "./MobileDrawer";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(0);
  const pages = [
    { name: "Home", link: "/" },
    { name: "Mint", link: "/mint" },
    { name: "Utility", link: "/mint#utility" },
    { name: "Leaderboard", link: "/mint#leaderboard" },
    { name: "FAQ", link: "/mint#faq" },
    { name: "Roadmap", link: "/#roadmap" },
    { name: "Docs", link: "/docs" },
  ];
  return (
    <Box className="w-full header-bg h-16 fixed z-50 flex items-center sm:justify-center px-6">
      <MobileDrawer pages={pages} />
      <img
        src={logo}
        alt="logo"
        className="w-fit h-10 static sm:absolute ms-4 sm:ms-0 sm:left-5"
      />
      <Box className="justify-center gap-x-12 hidden sm:flex">
        {pages.map((page, i) => (
          <Link className="text-white no-underline" to={page.link}>
            <Typography
              key={i}
              className={`text-base hover:border-b-2 border-white hover:-mb-1 text-white roboto ${
                active === i && "border-b-2 -mb-1"
              }`}
            >
              {page.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
