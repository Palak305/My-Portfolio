import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const variantHover = {
  opacity: 0.8,
  scale: 1.1,
};

const EducationTimeline = () => {
  const [activeEducation, setActiveEducation] = useState(null);

  const educationData = [
    {
      icon: <SchoolRoundedIcon sx={{ color: "white" }} />,
      year: "2019-2023",
      title: "Heritage Institute Of Technology, 2019-2023",
      subtitle: "B.Tech in Computer Science",
      grade: "DGPA: 9.4",
      details: `I honed technical skills, demonstrated leadership through various roles, and emerged with a comprehensive understanding of computer science principles`,
    },
    {
      icon: <SchoolRoundedIcon sx={{ color: "white" }} />,
      year: "2017-2019",

      title: "Sushila Birla Girls School, 2017-2019",
      subtitle: "Higher Secondary Education",
      grade: "Marks: 93%",
      details: `I enriched my academic knowledge as well as through active participation in extracurricular activities, I developed strong organizational and interpersonal skills, laying a foundation for my future academic and leadership endeavors.`,
    },
  ];

  const handleHover = (index) => setActiveEducation(index);
  const handleLeave = () => setActiveEducation(null);

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="white" gutterBottom>
          👩🏼‍🎓 EDUCATION
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          background: "linear-gradient(45deg, #0F2027, #203A43,#2C5364)",

          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {educationData.map((education, index) => (
          <React.Fragment key={index}>
            <Typography variant="h6" color="#52D3D8">
              {" "}
              {education.year}
            </Typography>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "20px",
                marginLeft: "10px",
                paddingLeft: "20px",
                borderLeft:
                  index === activeEducation
                    ? "4px solid #52D3D8"
                    : "2px solid #fff",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              variants={variantHover}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {education.icon}
                <Typography variant="subtitle1" color="white">
                  {education.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {education.subtitle}
                </Typography>
                <Typography variant="body2" color="white">
                  {education.grade}
                </Typography>
              </Box>
              {activeEducation === index && (
                <motion.div
                  style={{
                    marginLeft: "30px",
                    marginTop: "10px",
                  }}
                >
                  <Typography variant="body1" color="white">
                    {education.details}
                  </Typography>
                </motion.div>
              )}
            </motion.div>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default EducationTimeline;
