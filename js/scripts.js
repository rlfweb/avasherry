// tell barba to use the css plugin
barba.use(barbaCss);

// initialise barba with a name of my transition
barba.init({
  transitions: [
    {
      name: "fade",
      // add Barba's beforeEnter hook to get any page to scroll smoothly to the top before it loads
      beforeEnter() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  ],
});
