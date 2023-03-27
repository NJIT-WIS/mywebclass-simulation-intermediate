module.exports = {
  ci: {
    collect: {
      staticDistDir: "./nextjs-tailwind/out", // Update this with the directory where your static site files are located
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
