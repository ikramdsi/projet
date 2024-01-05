import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export const CustomHeader = () => {
  const { palette } = useTheme();
  return (
    <Box className="customeHeader" sx={{ bgcolor: palette.primary.main }}>
      <Container className="container">
        <div className="headerText">
          <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
            Welcome to BMyC
          </h1>
          <div className="line" data-aos="fade-up" data-aos-anchor-placement="top-center"></div>
          <p data-aos="fade-up" data-aos-anchor-placement="top-center">
            Embrace Patience, Achieve Excellence{" "}
          </p>
          <button data-aos="fade-up" data-aos-anchor-placement="top-center">
            Join us
            <span>
              <MdArrowRightAlt />
            </span>
          </button>
        </div>
        <div className="headerImages">
          <img data-aos="fade-right" src="./img3.png" alt="img" />
          <img src="./img2.png" alt="img" />
          <img data-aos="fade-left" src="./img1.png" alt="img" />
        </div>
      </Container>
    </Box>
  );
};
