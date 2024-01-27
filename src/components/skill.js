import React from "react";
import { Typography, Box, Rating, Grid } from "@mui/material";

import ReactLogo from "../images/react.png";
import JSLogo from "../images/js.png";
import MuiLogo from "../images/mui.png";
import HtmlLogo from "../images/html.png";
import ContentLogo from "../images/content.png";

const Skill = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="white" gutterBottom>
          👩‍💻 SKILLS
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={6}
        style={{
          background: `linear-gradient(45deg, #485563, #29323c)`,

          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {[
          { logo: ReactLogo, label: "React", rating: 4 },
          { logo: JSLogo, label: "JavaScript", rating: 4 },
          { logo: MuiLogo, label: "MUI", rating: 4 },
          { logo: HtmlLogo, label: "HTML CSS & JS", rating: 4 },
          { logo: ContentLogo, label: "Content Writing", rating: 5 },
        ].map((skill, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              mb={2}
              className="rating-box"
            >
              <img
                src={skill.logo}
                alt={`${skill.label} Logo`}
                width="40"
                height="40"
              />
              <Box mt={1}>
                <Typography variant="subtitle1" color="white">
                  {skill.label}
                </Typography>
                <Rating
                  name={`${skill.label.toLowerCase()}-rating`}
                  value={skill.rating}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skill;
