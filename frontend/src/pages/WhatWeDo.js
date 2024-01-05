import React from "react";
import Navbar from "../component/Navbar";
import { CustomHeader } from "../component/CustomHeader";
import { MdArrowRightAlt } from "react-icons/md";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import Footer from "../component/Footer";

export const WhatWeDo = ({ header, para }) => {
  const { palette } = useTheme();

  return (
    <div>
      <Navbar />
      <Box className="customeHeader" sx={{ bgcolor: palette.primary.main }}>
        <Container className="container" style={{ justifyContent: "center", textAlign: "center" }}>
          <div className="headerText " style={{ width: "70%" }}>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
              What We Do
            </h1>
            <div style={{ margin: "auto" }} className="line" data-aos="fade-up" data-aos-anchor-placement="top-center"></div>
            <p data-aos="fade-up" data-aos-anchor-placement="top-center" style={{ fontSize: "1rem" }}>
              Our sole focus is on unlocking better growth for our clients, increasing their long-term sales, value, and profit. We achieve this by optimizing every lever of their commercial strategy
              –product, price, innovation, marketing, and sales. Enabled by deep science and digital capabilities, our projects increase our clients’ profitability by an average of 100 to 500 basis
              points.
            </p>
          </div>
        </Container>
      </Box>
      <Box p={"2rem 0"}>
        <Container
          className="service"
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "stretch",
            justifyContent: "space-between",
            flexWrap: "wrap",
            textAlign: "center",
          }}>
          <Box>
            <img src="https://img.freepik.com/free-photo/pensive-male-customer-looking-away_74855-3601.jpg?w=1380&t=st=1704468350~exp=1704468950~hmac=1afb45e7f2e45ebc97eb96a619dbbf3b4dbba161108bb7a2492db7eefe42d9f4" />
          </Box>
          <Box
            className="test"
            sx={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              textAlign: "center",
            }}>
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
              }}>
              <h4>Commercial Strategy & Pricing Consulting</h4>
            </Box>
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
              }}>
              <h4>Digital Growth – Elevate</h4>
            </Box>
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
              }}>
              <h4>Software For Commercial Growth – Engine</h4>
            </Box>
            <Box
              sx={{
                background: "#ececec",
                padding: "1rem",
                borderRadius: ".3rem",
                height: "8rem",
              }}>
              <h4>Transaction Services & Private Equity</h4>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};
