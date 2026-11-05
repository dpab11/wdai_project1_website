const template = document.getElementById("planets_box_template");
const container = document.querySelector(".section_planets");

const planets = [
  {
    name: "Tatooine",
    image: "Tatooine.webp",
    desc: "A desert planet orbiting twin suns, controlled by crime syndicates (mostly the Hutts). It is famous for being the childhood home of both Anakin and Luke Skywalker, as well as the location of the Mos Eisley spaceport.",
  },
  {
    name: "Naboo",
    image: "Naboo.webp",
    desc: "A picturesque planet with green plains, classical architecture, and underwater Gungan cities. It is famous as the homeworld of Queen Padmé Amidala and Sheev Palpatine, and the site of the Trade Federation invasion involving Darth Maul.",
  },
  {
    name: "Kashyyyk",
    image: "Kashyyyk.webp",
    desc: "A planet dominated by giant wroshyr trees and a dangerous jungle. It is famous as the homeworld of the Wookiee species (including Chewbacca) and the site of the defense against the droid invasion during the Clone Wars, commanded by Yoda.",
  },
  {
    name: "Mustafar",
    image: "Mustafar.webp",
    desc: "A volcanic world covered with rivers of flowing lava, ash, and minerals. It is famous as the site of the tragic duel where Obi-Wan Kenobi defeated Anakin Skywalker, and in later years, it became Darth Vader's personal fortress.",
  },
  {
    name: "Coruscant",
    image: "Coruscant.webp",
    desc: "A city-planet (ecumenopolis) entirely covered by a massive metropolis reaching deep below the surface. It is famous as the political center of the galaxy (capital of the Republic, and later the Empire) and the headquarters of the main Jedi Temple.",
  },
  {
    name: "Alderaan",
    image: "Alderaan.webp",
    desc: "A peaceful, pacifist planet renowned for its beautiful mountain landscapes, art, and diplomacy. It is famous as the home of Princess Leia Organa's adoptive family and as the victim of a demonstrative, total destruction by the first Death Star's superlaser.",
  },
  {
    name: "Dagobah",
    image: "Dagobah.webp",
    desc: "A swampy, fog-shrouded world overgrown with dense jungle, emanating a massive amount of the Force. It is famous as the place of Grand Master Yoda's voluntary exile and the site of Luke Skywalker's intense Jedi training.",
  },
  {
    name: "Hoth",
    image: "Hoth.webp",
    desc: "A freezing, isolated planet completely covered in snow and glaciers. It is famous as the temporary hideout of the Rebel Alliance (Echo Base) and the site of an epic battle featuring Imperial AT-AT walkers.",
  },
  {
    name: "Jakku",
    image: "Jakku.webp",
    desc: "A harsh, desert planet resembling Tatooine, serving as a massive graveyard for crashed spaceships. It is famous as the remnant of the final major battle with the Empire and the place where Rey grew up scavenging scrap from wrecked Star Destroyers.",
  },
  {
    name: "Exegol",
    image: "Exegol.webp",
    desc: "A dark, stormy planet hidden in the Unknown Regions, rooted in an ancient Dark Side cult. It is famous as the secret headquarters of the Sith Eternal cult, the final base of the resurrected Palpatine, and the shipyard for a fleet of planet-destroying Star Destroyers.",
  },
];

planets.forEach((planet) => {
  const newBox = template.cloneNode(true);
  newBox.removeAttribute("id");

  newBox.querySelector(".description").textContent = planet.desc;
  newBox.querySelectorAll(".name").forEach((el) => {
    el.textContent = planet.name;
  });
  const boxImage = newBox.querySelector("img");
  boxImage.src = `./images/planets/${planet.image}`;
  boxImage.alt = `${planet.name} image`;

  container.appendChild(newBox);
  newBox.display = "block";

  newBox.addEventListener("click", () => {
    newBox.querySelector(".box").classList.toggle("flip");
  });
});
