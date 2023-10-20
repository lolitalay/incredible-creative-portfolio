(function insertLangDropdownValues() {
  const languages = {
    uk: "ua",
    en: "en",
  };

  const currentLang = document.documentElement.lang;
  const fullUrlPath = window.location.pathname;

  const splittedPath = fullUrlPath.split("/");
  const currentUrlPath = splittedPath[splittedPath.length - 1];

  const choosedLang = document.getElementsByClassName("header__lang-btn"); //choosed lang
  const langList = document.getElementsByClassName("header__lang-opt"); //3 elements
  //   const isLocal = window.location.host === "localhost:5000";

  if (currentLang === "uk") {
    const cleanedUrlPath = currentUrlPath;
    console.log(choosedLang);
    choosedLang[0].innerText = languages.uk;

    langList[0].innerHTML = languages.uk;
    langList[1].innerHTML = languages.en;

    langList[0].setAttribute("href", "");
    langList[1].setAttribute(
      "href",
      !!cleanedUrlPath ? "/en/" + cleanedUrlPath : "/en"
    );
  } else if (currentLang === "en") {
    const cleanedUrlPath = currentUrlPath.replace("/en", "");
    console.log(cleanedUrlPath);
    choosedLang[0].innerText = languages.en;

    langList[0].innerHTML = languages.en;
    langList[1].innerHTML = languages.uk;

    langList[0].setAttribute("href", "");

    langList[0].setAttribute("href", "");
    langList[1].setAttribute("href", "/" + cleanedUrlPath);
  }
})();

function openDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function closeDropdown() {
  const dropdown = document.getElementById("myDropdown");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
}

(function handleDropdown() {
  const buttonLang = document.getElementsByClassName("header__lang-btn")[0]; //choosed lang
  const dropdown = document.getElementById("myDropdown");

  if (window.screen.width < 760) {
    buttonLang.addEventListener("touchstart", openDropdown);
  } else {
    buttonLang.addEventListener("mouseover", openDropdown);
    dropdown.addEventListener("mouseleave", closeDropdown);
  }
})();

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".header__lang-btn")) {
    closeDropdown();
  }
};
