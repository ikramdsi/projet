import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from "../images/jobbg.jpg";
import SearchInputEl from "./SearchInputEl";

const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    backgroundImage: `url(https://img.freepik.com/free-photo/we-are-hiring-collage-concept_23-2150726439.jpg?w=1380&t=st=1704463647~exp=1704464247~hmac=06f1cd0338f4cf6f85860c9ca4c5b77e7919bf0b703e51d13b3b321ced50bc1d)`,
    // backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundColor: theme.palette.secondary.main,
  }));
  return (
    <>
      <StyleHeader>
        <SearchInputEl />
      </StyleHeader>
    </>
  );
};

export default Header;
