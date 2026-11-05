const template = document.getElementById("character_gallery_template");
const prequelContainer = document.getElementById("prequel_container");
const originalContainer = document.getElementById("original_container");
const sequelContainer = document.getElementById("sequel_container");
const frame = document.querySelector(".character_frame");
const frameTitle = frame.querySelector(".frame_title h3");
const frameImage = frame.querySelector(".image_container img");
const frameDesc = frame.querySelector(".description");
const blur = document.querySelector(".blur");
const frameExit = document.getElementById("frame_exit");
const prequelSectionBut = document.getElementById("prequel_button");
const originalSectionBut = document.getElementById("original_button");
const sequelSectionBut = document.getElementById("sequel_button");

const prequelCharacters = [
  {
    name: "Anakin Skywalker",
    image: "AnakinSkywalker.jpg",
    desc: "A Jedi Knight believed to be the prophesied 'Chosen One' who would bring balance to the Force. He is famous for his exceptional piloting skills, immense Force potential, and his tragic fall to the Dark Side, which ultimately transformed him into Darth Vader.",
  },
  {
    name: "Obi-Wan Kenobi",
    image: "ObiWanKenobi.jpg",
    desc: "A Jedi Master, former apprentice of Qui-Gon Jinn, and later mentor to Anakin. He is famous as a brilliant negotiator and warrior—defeating Darth Maul and General Grievous, and fighting a dramatic, victorious duel against his fallen apprentice on Mustafar.",
  },
  {
    name: "Yoda",
    image: "Yoda.jpg",
    desc: "The Grand Master of the Jedi Order and one of the oldest and most powerful Force users. He is famous for his unique speech pattern (inverted sentence structure), vast wisdom, and spectacular, acrobatic lightsaber duels with Count Dooku and Chancellor Palpatine.",
  },
  {
    name: "Padme Amidala",
    image: "PadmeAmidala.jpg",
    desc: "A Queen and later the Senator representing the planet Naboo in the Galactic Senate. She is famous for her unwavering fight for peace and democracy, her diplomatic skills, and her secretly kept marriage to Anakin, which resulted in the birth of Luke and Leia.",
  },
  {
    name: "Mace Windu",
    image: "MaceWindu.jpg",
    desc: "A powerful Master and one of the leaders of the Jedi Council. He is famous for his rare purple lightsaber, his strict, uncompromising demeanor, and being the only one to almost completely defeat Darth Sidious in direct lightsaber combat.",
  },
  {
    name: "Sheev Palpatine",
    image: "Palpatine.jpg",
    desc: "The Supreme Chancellor of the Republic who secretly operated for years as the Dark Lord of the Sith. He is famous for his brilliant, decades-long conspiracy—manipulating the entire galaxy, sparking the Clone Wars, initiating the Jedi purge (Order 66), and crowning himself Emperor.",
  },
  {
    name: "Darth Maul",
    image: "DarthMaul.jpeg",
    desc: "A Sith assassin and Palpatine's first on-screen apprentice. He is famous for his demonic appearance (red and black tattoos, horns on his head), his aggressive fighting style using a double-bladed lightsaber, and killing Master Qui-Gon Jinn during the duel on Naboo.",
  },
  {
    name: "Qui-Gon Jinn",
    image: "QuiGonJinn.png",
    desc: "A Jedi Master with a highly independent mind, former apprentice of Count Dooku, and mentor to Obi-Wan Kenobi. He is famous for discovering young Anakin Skywalker on Tatooine (immediately recognizing him as the Chosen One) and frequently defying the Jedi Council. By focusing on the Living Force, he became the first Jedi to retain his consciousness after death, later teaching this art to Yoda and Obi-Wan.",
  },
];
const originalCharacters = [
  {
    name: "Luke Skywalker",
    image: "LukeSkywalker.jpg",
    desc: "The hero of the Rebel Alliance and initially a simple moisture farmboy from Tatooine. He is famous for destroying the first Death Star, undergoing difficult training with Yoda on the swamps of Dagobah, and ultimately defeating the Emperor by turning his father, Darth Vader, back to the Light Side of the Force.",
  },
  {
    name: "Leia Organa",
    image: "LeiaOrgana.jpg",
    desc: "The princess of the destroyed planet Alderaan and one of the greatest leaders of the Rebel Alliance. She is famous for delivering the stolen Death Star plans to the droid R2-D2, strangling Jabba the Hutt with a chain during a rescue mission, and discovering that she is Luke Skywalker's twin sister.",
  },
  {
    name: "Han Solo",
    image: "HanSolo.jpg",
    desc: "A smuggler, gambler, and the captain of the famous Millennium Falcon. He is famous for his cynical personality, unexpectedly saving Luke during the Battle of Yavin, his romance with Princess Leia, and being frozen in carbonite by the order of Jabba the Hutt.",
  },
  {
    name: "Chewbacca",
    image: "Chewbacca.jpg",
    desc: "A powerful Wookiee warrior, loyal friend, and co-pilot to Han Solo. He is famous for his characteristic roar, wielding a powerful energy bowcaster, his immense physical strength (capable of pulling arms out of their sockets), and his invaluable talent for repairing the constantly breaking Millennium Falcon.",
  },
  {
    name: "Lando Calrissian",
    image: "LandoCalrissian.jpg",
    desc: "A gambler, former owner of the Millennium Falcon, and the Baron Administrator of Cloud City on the planet Bespin. He is famous for initially betraying Han Solo after striking a deal with Darth Vader, but then fully redeeming himself—joining the Rebellion and piloting the Falcon as a general during the destruction of the second Death Star.",
  },
  {
    name: "Darth Vader",
    image: "DarthVader.jpg",
    desc: "A Dark Lord of the Sith and the ruthless enforcer of Emperor Palpatine's will (formerly Jedi Knight Anakin Skywalker). He is famous for his terrifying, life-supporting black armor, Force-choking incompetent officers from afar, and one of the most iconic plot twists in cinema history when he revealed the truth about his parentage to Luke.",
  },
  {
    name: "Boba Fett",
    image: "BobaFett.jpg",
    desc: "A silent and deadly bounty hunter hired by the Empire and Jabba the Hutt (in reality, the unaltered cloned son of Jango Fett). He is famous for his iconic Mandalorian armor, jetpack, outsmarting Han Solo, and delivering him in carbonite to Tatooine.",
  },
];
const sequelCharacters = [
  {
    name: "Rey",
    image: "Rey.jpg",
    desc: "A scrap scavenger from the desert planet Jakku who discovers a powerful connection to the Force. She is famous for finding the missing Luke Skywalker, rapidly mastering Jedi abilities, possessing a unique mystical bond with Kylo Ren (a Force Dyad), and ultimately defeating the resurrected Emperor Palpatine.",
  },
  {
    name: "Finn (FN-2187)",
    image: "Finn.jpg",
    desc: "A former First Order stormtrooper who deserts after an awakening of conscience during his first combat mission. He is famous for his daring rescue of pilot Poe Dameron, fighting Kylo Ren with a lightsaber (despite having no Jedi training), and leading the final ground assault against the Star Destroyers on Exegol.",
  },
  {
    name: "Poe Dameron",
    image: "PoeDameron.jpeg",
    desc: "The best X-wing pilot in the Resistance and General Leia Organa's most trusted officer. He is famous for his cocky yet heroic demeanor, masterful aerial maneuvers, destroying Starkiller Base, and taking over main command of the remnants of the Rebellion.",
  },
  {
    name: "BB-8",
    image: "BB8.jpeg",
    desc: "A small, spherical astromech droid belonging to Poe Dameron. He is famous for his adorable design, great cleverness in solving technical problems, storing a crucial piece of the map leading to Luke Skywalker, and loyally accompanying the main characters on their most dangerous missions.",
  },
  {
    name: "Kylo Ren",
    image: "KyloRen.jpg",
    desc: "The son of Leia Organa and Han Solo, and former apprentice of Luke, who fell to the Dark Side and became the Supreme Leader of the First Order. He is famous for his unstable crossguard lightsaber, a mask inspired by Darth Vader, killing his own father, and his ultimate redemption when he returned to the Light Side to sacrifice his life for Rey.",
  },
  {
    name: "Snoke",
    image: "Snoke.jpg",
    desc: "The mysterious, Dark Side-wielding leader of the First Order. He is famous for his severely scarred face, communicating via giant holograms, pulling Ben Solo to the Dark Side, and his shocking death when he was betrayed and cut in half by his own apprentice.",
  },
  {
    name: "Armitage Hux",
    image: "Hux.jpg",
    desc: "A fanatical and ruthless military officer of the First Order, constantly competing with Kylo Ren for Snoke's favor. He is famous for his furious, fascist speech right before the destruction of the Hosnian system, and his later betrayal—becoming a Resistance spy solely out of his pathological hatred for Kylo Ren.",
  },
];

prequelSectionBut.addEventListener("click", () => {
  document.querySelector(".section_prequel").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
originalSectionBut.addEventListener("click", () => {
  document.querySelector(".section_original").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
sequelSectionBut.addEventListener("click", () => {
  document.querySelector(".section_sequel").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
//////////////////////////////
const openFrame = () => {
  blur.classList.add("on");
  frame.classList.add("open");
};
const closeFrame = () => {
  blur.classList.remove("on");
  frame.classList.remove("open");
};

frameExit.addEventListener("click", () => {
  closeFrame();
});

document.addEventListener("click", (event) => {
  if (!frame.contains(event.target)) {
    closeFrame();
  }
});

prequelCharacters.forEach((char) => {
  const newBox = template.cloneNode(true);
  newBox.removeAttribute("id");

  newBox.querySelector(".char_name p").textContent = char.name;
  const newBoxImage = newBox.querySelector("img");
  // newBox.querySelector("img").src = `./images/characters/${char.image}`;
  // newBox.querySelector("img").alt = `${char.name} image`;
  newBoxImage.src = `./images/characters/${char.image}`;
  newBoxImage.alt = `${char.name} image`;

  newBox.display = "block";

  prequelContainer.appendChild(newBox);

  newBox.addEventListener("click", (event) => {
    event.stopPropagation();
    frameTitle.textContent = char.name;
    frameDesc.textContent = char.desc;
    frameImage.src = `./images/characters/${char.image}`;
    frameImage.alt = `${char.name} image`;

    openFrame();
  });
});

originalCharacters.forEach((char) => {
  const newBox = template.cloneNode(true);
  newBox.removeAttribute("id");

  newBox.querySelector(".char_name p").textContent = char.name;
  newBox.querySelector("img").src = `./images/characters/${char.image}`;
  newBox.querySelector("img").alt = `${char.name} image`;
  newBox.display = "block";

  originalContainer.appendChild(newBox);

  newBox.addEventListener("click", (event) => {
    event.stopPropagation();
    frameTitle.textContent = char.name;
    frameDesc.textContent = char.desc;
    frameImage.src = `./images/characters/${char.image}`;
    frameImage.alt = `${char.name} image`;

    openFrame();
  });
});

sequelCharacters.forEach((char) => {
  const newBox = template.cloneNode(true);
  newBox.removeAttribute("id");

  newBox.querySelector(".char_name p").textContent = char.name;
  newBox.querySelector("img").src = `./images/characters/${char.image}`;
  newBox.querySelector("img").alt = `${char.name} image`;
  newBox.display = "block";

  sequelContainer.appendChild(newBox);

  newBox.addEventListener("click", (event) => {
    event.stopPropagation();
    frameTitle.textContent = char.name;
    frameDesc.textContent = char.desc;
    frameImage.src = `./images/characters/${char.image}`;
    frameImage.alt = `${char.name} image`;

    openFrame();
  });
});
