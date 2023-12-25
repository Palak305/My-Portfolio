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
const slidein = css`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
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

  text: {
    animation: `${slidein} 3s infinite alternate`,
  },
  anchorLink: {
    textDecoration: "none",
  },
});
export const useStyles = (customprops) => useClasses(styles, customprops);
