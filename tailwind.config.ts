/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        nav: "#FFEFDC", // navbar: social & personal sidebar color
        brand: "#FBEFDF", // background color
        brand_2: "#DFD3C4", // background-2 color
        brand_3: "#E8BA5D", // background-3: painting detail color
        brand_4: "#F8F8E3", // background-4: notification color
        btn: "#F5B263", // button color
        btn_2: "#E5A582", // button-2 color
        btn_3: "#D1C1A1", // button-3 color
        txt: "#7A4405", // text color
        txt_2: "#D9875A", // text-2 color
        txt_3: "#CFC1A1", // text-3 color
        txt_4: "#846425", // text-4 color
        txt_5: "#8E6920", // text-5: friend's name color
        txt_6: "#998D73", // text-6: date color
        txt_7: "#5C574D", // text-7: friend list title color
        txt_8: "#9B7862", // text-8: notification color
        txt_9: "#B18871", // text-9: notification details color
        description: "#D88253", // description color
        bdr: "#7A4405", // border color
        bdr_2: "#E6B555", // border-2 color
        bdr_3: "#A8450F", // border-3: friend list button color
        bdr_4: "#7C5A16", // border-4: painting area color
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        header: "#FBEFDF",
        body: "#D1BE9D",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
