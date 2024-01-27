import React from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import { Instagram, LinkedIn, Email } from "@mui/icons-material";

const Contact = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" color="white" gutterBottom>
          📧 Let's Connect!
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box
          style={{
            background: "linear-gradient(45deg, #0F2027, #203A43, #2C5364)",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            color="white"
            style={{ marginBottom: "16px" }}
          >
            Eager to connect and create something awesome together! Choose your
            preferred platform:
          </Typography>
          <IconButton
            color="primary"
            aria-label="Instagram"
            onClick={() =>
              handleIconClick("https://www.instagram.com/palak_periwal/")
            }
            style={{ margin: "0 8px", color: "#E1306C" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="LinkedIn"
            onClick={() =>
              handleIconClick(
                "https://www.linkedin.com/in/palak-periwal-bba97a177/"
              )
            }
            style={{ margin: "0 8px", color: "#0077B5" }}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Email"
            onClick={() => handleIconClick("mailto:palakperiwal304@gmail.com")}
            style={{ margin: "0 8px", color: "#EA4335" }}
          >
            <Email />
          </IconButton>
          <Typography
            variant="body2"
            color="white"
            style={{ marginTop: "16px", fontStyle: "italic" }}
          >
            "Every connection is an opportunity to learn, collaborate, and
            innovate!"
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
