const trips = [
  {
    image: "./assets/img/cards/pexels-axp-photography-500641970-18934678.jpg",
    title: "Discover Egypt",
    description: `  if you are planning a trip to luxor, Egypt, and are looking
                    for an exceptional experience,we highly recommend a day tour
                    to the temples of Dendera and Abydos.`,
  },
  {
    image: "./assets/img/cards/pexels-bycmdcrey-14435169.jpg",
    title: "Luxor Trip",
    description: `  if you are planning a trip to luxor, Egypt, and are looking
                    for an exceptional experience,we highly recommend a day tour
                    to the temples of Dendera and Abydos.`,
  },
  {
    image: "./assets/img/cards/pexels-mahmut-31613544.jpg",
    title: "Luxor Trip",
    description: `  if you are planning a trip to luxor, Egypt, and are looking
                    for an exceptional experience,we highly recommend a day tour
                    to the temples of Dendera and Abydos.`,
  },
  {
    image: "./assets/img/cards/pexels-mahmut-31613544.jpg",
    title: "Luxor Trip",
    description: `  if you are planning a trip to luxor, Egypt, and are looking
                    for an exceptional experience,we highly recommend a day tour
                    to the temples of Dendera and Abydos.`,
  },
  {
    image: "./assets/img/cards/pexels-bycmdcrey-14435169.jpg",
    title: "Luxor Trip",
    description: `  if you are planning a trip to luxor, Egypt, and are looking
                    for an exceptional experience,we highly recommend a day tour
                    to the temples of Dendera and Abydos.`,
  },
  {
    image: "./assets/img/cards/pexels-axp-photography-500641970-18934678.jpg",
    title: "Discover Egypt",
    description: `  if you are planning a trip to luxor, Egypt, and are looking
                    for an exceptional experience,we highly recommend a day tour
                    to the temples of Dendera and Abydos.`,
  },
];
function getTripId() {
  const urlParams = new URLSearchParams(window.location.search);
  const tripId = urlParams.get("id");
  console.log(tripId);

  const card = document.querySelector(".card");
  card.querySelector("img").src = trips[tripId].image;
  card.querySelector(".card-title").innerHTML = trips[tripId].title;
  card.querySelector(".card-text").innerHTML = trips[tripId].description;
}
getTripId();
