import plugin from "tailwindcss/plugin";

export const truncatePlugin = plugin(({ addUtilities, theme, e }) => {
  const values = theme("lineClamp");
  const utilities = Object.entries(values ?? {}).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`.${e(`truncate-${key}`)}`]: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": `${value}}`,
        " text-overflow": "ellipsis",
      },
    };
  });

  addUtilities(utilities);
}, {});
