export function RangeSlider() {
  console.log("ss");
  var parent = document.querySelector("#rangeSlider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("input[type=range]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }
    };
  });
}

export const searchAdvert = () => {
  const dropdownItems = document.querySelectorAll(".dropdown__item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", selectDropdownItem);
  });
  function selectDropdownItem() {
    const thisEl = event.currentTarget;
    let dropdownInput =
      thisEl.parentElement.parentElement.previousElementSibling
        .lastElementChild;
    dropdownInput.value = thisEl.textContent;
    thisEl.parentElement.parentElement.previousElementSibling.classList.remove(
      "dropdown-box--open"
    );
    isDropdownOpen = false;
  }
  const filters = document.querySelectorAll(".filter__header");
  const filterListBtn = document.querySelector(".filter-list-btn");
  const filtersPage = document.querySelector(".filters-page");
  const navCloseBtn = document.querySelector(".nav__icon--close-icon");
  filterListBtn.addEventListener("click", function () {
    filtersPage.style.display = "block";
    document.documentElement.style.overflow = "hidden";
  });
  navCloseBtn.addEventListener("click", function () {
    filtersPage.style.display = "none";
    document.documentElement.style.overflow = "auto";
  });
  filters.forEach((filter) => {
    filter.addEventListener("click", addOpenClass);
  });
  function addOpenClass(e) {
    let parentEl = e.currentTarget.parentElement;
    parentEl.classList.toggle("filter--open");
  }
};
export function openDropdown() {
    if (isDropdownOpen) {
      document
        .querySelector(".dropdown-box--open")
        .classList.remove("dropdown-box--open");
      event.currentTarget.classList.remove("dropdown-box--open");
      isDropdownOpen = false;
    } else {
      event.currentTarget.classList.add("dropdown-box--open");
      isDropdownOpen = true;
    }
  }
