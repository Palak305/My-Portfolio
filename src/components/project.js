import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material";
import Catch from "../images/catchoftheday.png";
import Face from "../images/face.png";

const Project = () => {
  const projectsData = [
    {
      name: "Catch Of The Day",
      description:
        "Used React Framework to build —a real-time app for a trendy seafood market where price and quantity available are variable and can change at a moment’s notice",
      image: Catch,
      link: "https://catch-of-the-day-palak.netlify.app/",
      repoLink: "https://github.com/Palak305/Catch-Of-The-Day",
    },
    {
      name: "Face Detection and Censorship",
      description:
        "Developed a software to detect and Censor faces using Vanilla JavaScript it detects faces by getting the webcam generated media as well as Censors them with the help of CSS along with Vanilla JavaScript.",
      image: Face,
      link: "",
      repoLink: "https://github.com/Palak305/face-detection-censorship",
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="white" gutterBottom>
          🚧 PROJECTS
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} container spacing={2}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: `linear-gradient(45deg, #485563, #29323c)`,

                color: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                style={{ objectFit: "cover", height: "220px" }}
              />
              <CardContent>
                <Typography variant="h5" color={"white"} fontWeight={600}>
                  {project.name}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "10px" }}
                  color={"white"}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.link && (
                  <Button
                    startIcon={<PlayArrowIcon />}
                    variant="outlined"
                    style={{
                      color: "white",
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    }}
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Demo
                  </Button>
                )}

                {project.repoLink && (
                  <Button
                    variant="outlined"
                    style={{
                      color: "white",
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      marginLeft: "10px",
                    }}
                    component="a"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Project;
