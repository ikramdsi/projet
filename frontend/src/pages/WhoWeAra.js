import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import { CustomHeader } from "../component/CustomHeader";
import Container from "@mui/material/Container";
import Footer from "../component/Footer";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
export const WhoWeAra = () => {
  const { palette } = useTheme();
  return (
    <>
      <Navbar />
      <CustomHeader />
      <Box className="whoWeAre">
        <Container>
          <p data-aos="zoom-out-down">
            Welcome to BMyC, your dedicated partner in shaping professional journeys. We're more than an online platform; we're a dynamic space for job seekers, career transitioners, and recent
            graduates. Our advanced tests and AI create a comprehensive profile, guiding you to the right career path. Personalized recommendations consider your skills, preferences, and market
            opportunities. We identify skill gaps, suggest additional training, and offer real-time tracking. Our intuitive dashboard presents results, recommendations, and training opportunities.
            BMyC is about more than finding a job; it's building a fulfilling career. Join us, click, and boost your career seamlessly.
          </p>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
