fetch("components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });
fetch("components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
