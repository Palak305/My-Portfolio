import React, { useRef, useState, useEffect } from "react";
import { Tabs, Tab, Grid, Typography, Box, Slide } from "@mui/material";
import { motion } from "framer-motion";
import { useStyles } from "./styles";

const variantImg = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const APP = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
        px={1}
        sx={{ height: "60px", background: "red" }}
      >
        <Grid item>
          <a className={classes.anchorLink} href="#about">
            {" "}
            about me
          </a>
        </Grid>
        <Grid item>
          <a className={classes.anchorLink} href="#education">
            {" "}
            Education
          </a>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} justifyContent={"center"} sx={{ height: "calc(100vh - 40px)" }}>
        <p>
          people Call me <b>Miss PP</b>
        </p>
      </Grid>
      <Grid id="education" container alignItems={"center"} justifyContent={"center"} sx={{}}>
        I am education
      </Grid>
    </div>
  );
};

export default APP;
