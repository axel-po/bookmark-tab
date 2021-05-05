const tabs = Array.from(document.querySelectorAll(".tab"));
const content = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i] === e.target) {
        tabs[i].classList.add("active-tab");
      } else {
        tabs[i].classList.remove("active-tab");
      }
    }

    for (let i = 0; i < content.length; i++) {
      if (i === tabs.indexOf(e.target)) {
        content[i].classList.add("active-content");
      } else {
        content[i].classList.remove("active-content");
      }
    }
  });
});
