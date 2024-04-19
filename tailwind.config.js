/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d8dadb",
          "300": "#d9d9db",
        },
        dimgray: {
          "100": "#6a6a6b",
          "200": "#5c5c5c",
          "300": "#525252",
        },
        black: "#000",
        darkgray: {
          "100": "#a9aeb8",
          "200": "#989899",
        },
        tomato: "#e56135",
        mediumseagreen: "#02b875",
        royalblue: "#2f6ce5",
        whitesmoke: {
          "100": "#f7f8fa",
          "200": "#f2f2f2",
          "300": "#edeef0",
        },
        gray: {
          "100": "#8a8a8a",
          "200": "#88898a",
          "300": "#808080",
          "400": "rgba(0, 0, 0, 0.7)",
          "500": "rgba(0, 0, 0, 0.6)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        silver: {
          "100": "#b8b8b8",
          "200": "#b6b6b8",
        },
        darkslategray: {
          "100": "#3d3d3d",
          "200": "#2e2e2e",
        },
        honeydew: "#effff4",
        seagreen: "#008a45",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        sm: "14px",
        "2xl": "21px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      smi: "13px",
      mini: "15px",
      "3xl": "22px",
      xs: "12px",
      lgi: "19px",
      base: "16px",
      "17xl": "36px",
      "10xl": "29px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
