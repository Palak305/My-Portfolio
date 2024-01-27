import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { useMemo } from "react";

const useClasses = (stylesElement, customprops) => {
  const theme = useTheme();
  return useMemo(() => {
    const rawClasses = typeof stylesElement === "function" ? stylesElement(theme) : stylesElement;
    const prepared = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value);
    });

    return prepared;
  }, [stylesElement, theme, customprops]);
};

const styles = (theme, customprops) => ({
  profile: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
  },
  tabs: {
    "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
      color: "white",
    },
    backgroundColor: "#9BA4B5",
  },


  anchorLink: {
    textDecoration: "none",
    color: "black", // Default color
    "&:hover": {
      color: "white",

    },
    "&:active": {
      color: "white",
    },
  },
  aboutContainer:{

        // background:
        //   "linear-gradient(45deg, #5f72be, #9b23ea)", // Add gradient background
        // padding: "20px", // Adjust padding as needed
        // borderRadius: "8px", // Add border radius

  },
  aboutBox: {
    border: `1px solid black`,
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#394249",
    color: "#ffffff",
    transition: "transform 0.3s ease-in-out",
    '&:hover': {
      transform: 'scale(1.05)',
    },
    background: `linear-gradient(45deg, #485563, #29323c)`,

  },
  highlightText: {
    color: "#FFE000", // Highlight color
    fontWeight: "bold",
  },

});
export const useStyles = (customprops) => useClasses(styles, customprops);
