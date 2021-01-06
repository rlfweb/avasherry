// tell barba to use the css plugin
barba.use(barbaCss);

// initialise barba with a name of my transition
barba.init({
  transitions: [
    {
      name: "fade",
      // add Barba's beforeEnter hook to do things when a new page loads
      beforeEnter({ current, next, trigger }) {
        // variables to grab the three nav links
        const headerLinks = document.querySelectorAll("header a");
        const href = next.url.path;
        // loop over these links to check the href matches Barba's href
        headerLinks.forEach((link) => {
          if (link.getAttribute("href") === href) {
            // if it's the same, add the selected class
            link.classList.add("selected");
          } else {
            // if it isn't the same, remove the class
            link.classList.remove("selected");
          }
        });
        // to get any page to scroll smoothly to the top before it loads
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  ],
});
