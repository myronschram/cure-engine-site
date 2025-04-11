import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        invert: {
          css: {
            color: theme("colors.white"),
            a: { color: theme("colors.cyan.400"), "&:hover": { color: theme("colors.cyan.300") } },
            strong: { color: theme("colors.white") },
            "ul > li::before": { backgroundColor: theme("colors.white") },
            hr: { borderColor: theme("colors.gray.700") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.cyan.400"),
            },
            h1: { color: theme("colors.cyan.300") },
            h2: { color: theme("colors.cyan.200") },
            h3: { color: theme("colors.cyan.100") },
            code: { color: theme("colors.white") },
            pre: {
              color: theme("colors.gray.100"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.800"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
