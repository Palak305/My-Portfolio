import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useStyles } from "../styles"; // Adjust the path accordingly

const AboutMe = () => {
  const classes = useStyles(); // Using the styles hook

  return (
    <Grid
      id="about"
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.aboutContainer}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="white" gutterBottom>
          🌟 ABOUT ME
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          border={1}
          borderRadius={8}
          borderColor="#91C8E4"
          p={3}
          className={classes.aboutBox}
        >
          <Typography color="white">
            👋 Hello! I'm <span className={classes.highlightText}>Palak</span>,
            a meticulous Front-End Developer adept in{" "}
            <span className={classes.highlightText}>HTML</span>,{" "}
            <span className={classes.highlightText}>CSS</span>, and{" "}
            <span className={classes.highlightText}>JavaScript</span>, with a
            passion for creating aesthetically pleasing user interfaces,
            particularly in <span className={classes.highlightText}>React</span>
            . 🌐 My commitment to refined design and seamless user experiences
            is evident in my projects. As a communicative and collaborative team
            member, I am eager to contribute to your team's achievements. Let's
            connect and explore how I can bring a blend of creativity and
            technical excellence to enhance your projects. 🚀✨
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
