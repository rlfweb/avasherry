// save body as a variable so can use it thorughout the site
const bodyTag = document.querySelector("body");

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
  views: [
    // Within the namespace of "feed", then before you enter, add the class "feed" to the body tag
    {
      namespace: "feed",
      beforeEnter() {
        bodyTag.classList.add("feed");
      },
      // And then before you leave the "feed" page, remove the class "feed" from the body tag
      beforeLeave() {
        bodyTag.classList.remove("feed");
      },
    },
  ],
});

// Transitions is somethng that doesn't matter what page or area of the site you are going to
// Views is for a particular page or area of the site
