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
        justifyContent="space-around"
        spacing={2}
        px={1}
        sx={{ height: "60px", background: "#A8A196" }}
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
          <a className={classes.anchorLink} href="#experirence">
            {" "}
            Experience
          </a>
        </Grid>  
        <Grid item>
          <a className={classes.anchorLink} href="#projects">
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
      <Grid container alignItems={"center"} justifyContent={"center"} sx={{ height: "calc(100vh - 40px)" }}>
        <Grid component={motion.div} variants={variantImg} initial="hidden" animate="visible" item xs={12} sm={4}>
          <Typography variant="h4" color="white">
            Hi, I am Palak Periwal.
          </Typography>
          <Typography variant="h6" color="white">
            A Frontend ReactJS Developer👩‍💻
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
      <Grid id="about" container alignItems={"center"} justifyContent={"space-between"}>
      <Grid item>
          <Typography variant="h4" color="white">
            About Me
          </Typography>
        </Grid>
        <Grid item>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Box
              border={1}
              borderRadius={8}
              borderColor="#91C8E4"
              p={2}
              style={{ width: "100%", boxSizing: "border-box" }}
            >
              <Typography>
                👋 Hi there! I'm Palak, a passionate and creative Front-End Developer with a keen eye for design and a
                love for crafting seamless user experiences. 🌐 My expertise lies in HTML, CSS, and JavaScript, and I'm
                well-versed in modern front-end frameworks like React. 🚀 In addition to technical skills, I'm a strong
                communicator and a collaborative team player. I believe in the power of teamwork and open communication
                to deliver exceptional results. 🌟 If you're looking for a front-end developer who is not only skilled
                but also passionate about their work, I'd love to connect and explore how I can contribute to your
                team's success. Let's build something awesome together!
              </Typography>
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
};

export default APP;
