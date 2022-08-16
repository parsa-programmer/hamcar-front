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

let isOpen = false;

function openSelectBox(event) {
  if (isOpen) {
    document.querySelector(".select--open").classList.remove("select--open");
    event.currentTarget.classList.remove("select--open");
    isOpen = false;
    document.removeEventListener("click", closeSelectOutsideArea);
  } else {
    event.currentTarget.classList.add("select--open");
    isOpen = true;
    document.addEventListener("click", closeSelectOutsideArea);
  }
}

function selectItem_in_selectBox(event) {
  const thisEl = event.target;
  let selectName =
    thisEl.parentElement.parentElement.previousElementSibling.children[0];
  selectName.textContent = event.target.textContent;
  thisEl.parentElement.parentElement.parentElement.classList.remove(
    "select--open"
  );
  isOpen = false;
}

function closeSelectOutsideArea() {
  const el = document.querySelector(".select--open");
  if (el) {
    if (!el.contains(event.target)) {
      el.classList.remove("select--open");
      isOpen = false;
    }
  }
}

//    DropDown
// const dropdownItems = document.querySelectorAll(".dropdown__item");
// let isDropdownOpen = false;

// dropdownItems.forEach(item => {
//     item.addEventListener("click",selectDropdownItem)
// })
