// tell barba to use the css plugin
barba.use(barbaCss);

// initialise barba with a name of my transition
barba.init({
  transitions: [
    {
      name: "fade",
    },
  ],
});
