window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const nav = document.querySelector(".navbar");
  const navHeight = nav.clientHeight;
  if (scrollPosition >= navHeight) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});
// ===========================
// redirect to details page
function redirectTo(pageLocation, id) {
  window.location.href = `${pageLocation}?id=${id}`;
}
