import React from "react";
import { Grid, Typography, Box, Slide } from "@mui/material";
import { motion } from "framer-motion";
import { useStyles } from "./styles";
import EducationDetails from "./components/education";
import Skill from "./components/skill";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Project from "./components/project";
import Contact from "./components/contact";
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
    <Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        spacing={2}
        px={1}
        sx={{
          height: "60px",
          background: "linear-gradient(90deg, #1c92d2,#f2fcfe)",
        }}
      >
        <Grid item>
          <a className={classes.anchorLink} href="#about">
            {" "}
            About Me
          </a>
        </Grid>
        <Grid item>
          <a className={classes.anchorLink} href="#education">
            {" "}
            Education
          </a>
        </Grid>
        <Grid item>
          <a className={classes.anchorLink} href="#skills">
            {" "}
            Skills
          </a>
        </Grid>
        <Grid item>
          <a className={classes.anchorLink} href="#experience">
            {" "}
            Experience
          </a>
        </Grid>
        <Grid item>
          <a className={classes.anchorLink} href="#project">
            {" "}
            Projects
          </a>
        </Grid>
        <Grid item>
          <a className={classes.anchorLink} href="#contact">
            {" "}
            Contact Me
          </a>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "calc(100vh - 40px)" }}

      >
        <Grid
          component={motion.div}
          variants={variantImg}
          initial="hidden"
          animate="visible"
          item
          xs={12}
          sm={4}
        >
          <Typography variant="h4" color="white">
            Hi, I am Palak Periwal.
          </Typography>
          <Typography variant="h6" color="white">
            A Frontend Developer👩‍💻
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.img
            variants={variantImg}
            initial="hidden"
            animate="visible"
            src="https://media.licdn.com/dms/image/D4D03AQE4AFoz78Z2GQ/profile-displayphoto-shrink_800_800/0/1694086768301?e=1709164800&v=beta&t=p7ulrVXr5YbKJbDl2ATPPdSIWWbJHeJ3AVMhK860ugI"
            alt="profile"
            className={classes.profile}
          />
        </Grid>
      </Grid>
      <Grid container direction="column"
        spacing={4} p={1} >
        <Grid id="about" item>
          <AboutMe />
        </Grid>
        <Grid id="education" item>
          <EducationDetails />
        </Grid>
        <Grid id="skills" item >
          <Skill />
        </Grid>
        <Grid id="experience" item >
          <Experience />
        </Grid>
        <Grid id="project" item >
          <Project />
        </Grid>
        <Grid id="contact" item >
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default APP;
