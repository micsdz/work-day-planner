var themeSwitcher = $("#theme-switcher");
var backgroundTheme = $(".backgroundTheme");
var calendarBtn = $("#calendarBtn")
var mainContent = $("#maincontent");
// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.click(function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    backgroundTheme.attr("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    backgroundTheme.attr("class", "dark");
  }
});
calendarBtn.click(function() {
    mainContent.innerHTML = "";
    calendarContent()
})
function calendarContent() {
    // Used to clear start button at beginning and clear previous question;
    mainContent.innerHTML = "";
    const calendarEl = $("<body></body>");
    calendarEl.innerHTML = calendar;
}