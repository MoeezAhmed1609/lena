import React from "react";
import { Box, Typography } from "@mui/material";

const StyledButton = ({title, gradient}) => {
  return (
    <Box className="button-border-gradient button-shadow w-fit p-[2.5px] rounded-full h-fit cursor-pointer">
      <Box className="h-fit p-2.5 w-48 text-center bg-[#141118] rounded-full bg-opacity-95">
        <Typography className="button-text text-sm font-semibold poppins">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledButton;
