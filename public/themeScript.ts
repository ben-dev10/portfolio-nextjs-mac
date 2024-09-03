(function () {
  try {
    var savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("dark"); //default to dark-theme
    }
  } catch (err) {
    console.error("Error accessing localStorage", err);
    document.documentElement.classList.add("dark"); //  Fallback to dark theme
  }
})();
