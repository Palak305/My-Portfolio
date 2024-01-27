import React from "react";
import { Grid, Typography, Paper, Box, IconButton } from "@mui/material";
import { Work as WorkIcon } from "@mui/icons-material";

const Experience = () => {
  const experienceData = [
    {
      position: "Intern- Front-End Developer",
      company: "Amoga",
      year: "August 2023 -February 2024",
      details: `Working on cutting-edge projects, implementing responsive web designs, and collaborating with cross-functional teams to deliver high-quality software solutions.`,
    },
    {
      position: "Media and Outreach Lead",
      company: "CodeChef",
      year: "May 2021 -May 2023",
      details:
        "As a Media and Outreach Lead , managed promoting awareness about different benefits of competitive coding as well as delegated tasks of a 370 member active community",
    },
    {
      position: "Intern- Content Writer",
      company: "Uniq Stories",
      year: "March 2020 - May 2020",
      details:
        "Utilized exceptional writing, editing and proofreading skills to produce engaging and plagiarism-free content.",
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="white" gutterBottom>
          🚀 EXPERIENCE
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        {experienceData.map((experience, index) => (
          <Paper
            key={index}
            elevation={3}
            style={{
              background: "linear-gradient(45deg, #0F2027, #203A43,#2C5364)",

              padding: "20px",
              borderRadius: "8px",
              marginBottom: "16px",
              textAlign: "left",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography variant="h6">{experience.year}</Typography>
            <Box mt={1}>
              <Typography variant="subtitle1">{experience.position}</Typography>
              <Typography variant="body2">{experience.company}</Typography>
              <Typography variant="body1">{experience.details}</Typography>
            </Box>
            <Box
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                opacity: 0.8,
              }}
            >
              <IconButton
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                }}
              >
                <WorkIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default Experience;
