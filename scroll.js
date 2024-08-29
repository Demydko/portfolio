document
  .querySelector('a[href="#portfolio"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = -200; // Отступ в пикселях

    window.scrollTo({
      top: target.offsetTop + offset,
      behavior: "smooth",
    });
  });
