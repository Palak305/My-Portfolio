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
});
export const useStyles = (customprops) => useClasses(styles, customprops);
