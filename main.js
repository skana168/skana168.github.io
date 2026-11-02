(function () {
  var root = document.documentElement;
  var zhTitle = root.dataset.titleZh || document.title;
  var key = "skana:lang";

  function isLang(value) {
    return value === "zh-CN" || value === "en";
  }

  try {
    var stored = localStorage.getItem(key);
    if (isLang(stored)) root.lang = stored;
  } catch (error) {}

  root.classList.add("js");

  function applyLang(lang) {
    if (!isLang(lang)) return;
    root.lang = lang;
    document.title = lang === "en" ? (root.dataset.titleEn || zhTitle) : zhTitle;
    var buttons = root.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.setLang === lang));
    }
  }

  function init() {
    applyLang(root.lang);
    var group = root.querySelector("[data-language-toggle]");
    if (!group) return;
    group.addEventListener("click", function (event) {
      var button = event.target.closest("[data-set-lang]");
      if (!button) return;
      applyLang(button.dataset.setLang);
      try {
        localStorage.setItem(key, root.lang);
      } catch (error) {}
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();