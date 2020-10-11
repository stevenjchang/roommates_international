module.exports = {
  purge: ["src/**/*.js", "public/**/*/html"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

//NOTE: purge only runs in production
//To manually build with purge, use command: `NODE_ENV=production npm run build`
