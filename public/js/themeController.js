console.log(
  "%cCreated By Mohammad Ashrafi",
  "color: #007acc;",
  " -> https://www.instagram.com/mohammad_ashrafi80"
);
console.log(
  "%cCreated By Mohammad Ashrafi",
  "color: green;",
  " -> https://www.instagram.com/mohammad_ashrafi80"
);
console.log(
  "%cCreated By Mohammad Ashrafi",
  "color: red;",
  " -> https://www.instagram.com/mohammad_ashrafi80"
);
console.log(
  "%cCreated By Mohammad Ashrafi",
  "color: gray;",
  " -> https://www.instagram.com/mohammad_ashrafi80"
);

let theme = localStorage.getItem("theme");
if (!theme) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // dark mode
    localStorage.setItem("theme", "dark");
    theme = "dark";
  } else {
    localStorage.setItem("theme", "light");
    theme = "light";
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      localStorage.setItem("theme", newColorScheme);
      setTheme(newColorScheme);
    });
}
setTheme(theme);

function setTheme(themeValue) {
  themeValue ??= "light";
  document
    .getElementsByTagName("html")[0]
    .setAttribute("data-theme", themeValue);
}
