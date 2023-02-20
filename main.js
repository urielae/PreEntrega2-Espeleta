// DOM DINOSAURS

let tRex = document.getElementById("tRex");
let compi = document.getElementById("compi");
let anky = document.getElementById("anky");
let brachi = document.getElementById("brachi");
let cera = document.getElementById("cera");
let cory = document.getElementById("cory");
let dilo = document.getElementById("dilo");
let galli = document.getElementById("galli");
let igua = document.getElementById("igua");
let mame = document.getElementById("mame");
let oura = document.getElementById("oura");
let pachy = document.getElementById("pachy");
let para = document.getElementById("para");
let ptera = document.getElementById("ptera");
let spino = document.getElementById("spino");
let stego = document.getElementById("stego");
let trice = document.getElementById("trice");
let velo = document.getElementById("velo");

// DOM PERSONEL

let hammond = document.getElementById("hammond");
let arnold = document.getElementById("arnold");
let nedry = document.getElementById("nedry");
let wu = document.getElementById("wu");
let muldoon = document.getElementById("muldoon");

// DOM NAV BAR

let dnaLab = document.getElementById("dnaLab");
let jpSecurity = document.getElementById("jpSecurity");
let jpPersonel = document.getElementById("jpPersonel");
let siteB = document.getElementById("siteB");

// DOM BUTTONS LOGIN

let buttonLogDna = document.getElementById("buttonLogDna");
let buttonSecurity = document.getElementById("buttonSecurity");
let inputDna = document.getElementById("inputDna");
let logUserDna = document.getElementById("logUserDna");
let passDna = document.getElementById("passDna");
let logUserSecurity = document.getElementById("logUserSecurity");
let passSecurity = document.getElementById("passSecurity");
let btnSearchDino = document.getElementById("btnSearchDino");
let btnSearchPersonel = document.getElementById("btnSearchPersonel");

// OPTION 2: SEARCH PERSONEL OF JP COMPLEX //

class users {
  constructor(name, userName, userPass, charge) {
    this.name = name;
    this.user = userName;
    this.pass = userPass;
    this.charge = charge;
  }
}

const user1 = new users("John Hammond", "tim.lex", 1423, "Park Owner");

const user2 = new users("John Arnold", "hate_hackers", 5943, "Head Engineer");

const user3 = new users(
  "Dennis Nedry",
  "dennis.nedry",
  1993,
  "Computer Technician"
);

const user4 = new users("Henry Wu", "better_than_god", 2470, "Geneticist");

const user5 = new users(
  "Robert Muldoon",
  "clever.girl",
  7682,
  "The Park's Game Warden"
);

const showUsers = [user1, user2, user3, user4, user5];

showUsers.forEach((users) => {});

const searchUser = [
  { name: "John Hammond", charge: "Park Owner" },
  { name: "John Arnold", charge: "Head Engineer" },
  { name: "Dennis Nedry", charge: "Computer Technician" },
  { name: "Henry Wu", charge: "Geneticist" },
  { name: "Robert Muldoon", charge: "The Parks game warden" },
];

function search() {
  let searchName = prompt(
    "Insert the full name of the employee to start the search"
  );
  let search = searchUser.filter(
    (elem) => elem.name.toLowerCase() == searchName.toLowerCase()
  );
  console.log(search);
  if (search.length == 0) {
    console.log(
      "Sorry, the parameters didn't match. Please check the data again"
    );
  }
}

// OPTION 3: JP SYSTEM SECURITY //

function systemSecurity() {
  let keyWord = false;
  let attemps = 0;

  do {
    let logIn = prompt("Insert your username");
    let password = parseInt(prompt("Insert four digit password"));

    if (logIn == user3.user && password == user3.pass) {
      keyWord = true;
      alert(`ACCESS GRANTED, WELCOME ${user3.name}`.toUpperCase(user3.name));
      function userLogIn() {}
      userLogIn(user3.user);
    } else {
      alert("PERMISSION DENIED");
      attemps = attemps + 1;
      if (attemps == 3)
        alert(
          "PERMISSION DENIED...AND...YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD!"
        );
    }
  } while (!keyWord && attemps < 3);
}

//OPTION 4: ACCESS TO DNA LAB SYSTEM//

function DnaLab() {
  let labKeyWord = false;
  let attempsLab = 0;

  do {
    if (logUserDna == user4.user && passDna == user4.pass) {
      labKeyWord = true;
      alert(`ACCESS GRANTED, WELCOME ${user4.name}`.toUpperCase(user4.name));
      function inputDna() {
        alert(
          "Welcome to JP DNA Lab System. Remember to not share your username and password with nobody. Keep the park safe."
        );
      }
      inputDna(user4.user);
    } else {
      alert("PERMISSION DENIED");
      attempsLab = attempsLab + 1;
      if (attempsLab == 3) {
      }
    }
  } while (!labKeyWord && attempsLab < 3);
}

// OPTION 5: DINOSAURS LIST //

class dinosaurs {
  constructor(
    nameMeaning,
    codeName,
    diet,
    heightMeters,
    lenghtMeters,
    weightKg,
    jpId
  ) {
    this.nameMeaning = nameMeaning;
    this.codeName = codeName;
    this.diet = diet;
    this.heightMeters = heightMeters;
    this.lenghtMeters = lenghtMeters;
    this.weightKg = weightKg;
    this.jpId = jpId;
  }
}

const dino1 = new dinosaurs(
  "Tyrant lizard/reptile king",
  "Tyrannosaurus rex",
  "Carnivore",
  3.4,
  11.5,
  9800,
  1
);

const dino2 = new dinosaurs(
  "Elegant jam",
  "Compsognathus",
  "Carnivore, occasional scavenger",
  0.3,
  1.0,
  0.83,
  2
);

const dino3 = new dinosaurs(
  "Fused lizard/reptile",
  "Ankylosaurus",
  "Herbivore",
  2,
  8,
  4000,
  3
);

const dino4 = new dinosaurs(
  "Arm lizard/reptile",
  "Brachiosaurus",
  "Herbivore",
  18,
  26,
  38000,
  4
);

const dino5 = new dinosaurs(
  "Horned lizard/reptile",
  "Ceratosaurus",
  "Carnivore",
  3.65,
  9.3,
  1000,
  5
);

const dino6 = new dinosaurs(
  "Corinthion helmet/Helmet lizard/reptile",
  "Corythosaurus",
  "Herbivore",
  4,
  9,
  4000,
  6
);

const dino7 = new dinosaurs(
  "Double-crested lizard/reptile",
  "Dilophosaurus",
  "Carnivore",
  3,
  6,
  1000,
  7
);

const dino8 = new dinosaurs(
  "Chicken/Fowl/Rooster mimic/ Lizard-Reptile from Sanchu or Sanchu lizard/reptile",
  "Gallimimus",
  "Omnivore/Herbivore",
  2,
  8,
  160,
  8
);

const dino9 = new dinosaurs(
  "Iguana tooth/teeth",
  "Iguanodon",
  "Herbivore",
  3,
  10,
  3400,
  9
);

const dino10 = new dinosaurs(
  "Mamenchi lizard/reptile",
  "Mamenchisaurus",
  "Herbivore",
  14,
  15,
  27215.54,
  10
);

const dino11 = new dinosaurs(
  "Brave lizard/reptile",
  "Ouranosaurus",
  "Herbivore",
  3,
  8.3,
  4400,
  11
);

const dino12 = new dinosaurs(
  "Thick-headed lizard",
  "Pachycephalosaurus",
  "Herbivore",
  2,
  4.5,
  450,
  12
);

const dino13 = new dinosaurs(
  "Near crested lizard",
  "Parasaurolophus",
  "Herbivore",
  4,
  10,
  4000,
  13
);

const dino14 = new dinosaurs(
  "Toothless wing",
  "Pteranodon",
  "Carnivore, Piscivore",
  2,
  8,
  25,
  14
);

const dino15 = new dinosaurs(
  "Spine lizard",
  "Spinosaurus",
  "Carnivore",
  4.9,
  13.3,
  8000,
  15
);

const dino16 = new dinosaurs(
  "Roofed lizard",
  "Stegosaurus",
  "Herbivore",
  4,
  10,
  3400,
  16
);

const dino17 = new dinosaurs(
  "Three horned face",
  "Triceratops",
  "Herbivore",
  3,
  9,
  7000,
  17
);

const dino18 = new dinosaurs(
  "Swift thief",
  "Velociraptor",
  "Carnivore",
  1.68,
  3,
  150,
  18
);

const showDino = [
  dino1,
  dino2,
  dino3,
  dino4,
  dino5,
  dino6,
  dino7,
  dino8,
  dino9,
  dino10,
  dino11,
  dino12,
  dino13,
  dino14,
  dino15,
  dino16,
  dino17,
  dino18,
];

const searchDino = [
  { codeName: "Tyrannosaurus rex", diet: "Carnivore", jpId: "1" },
  { codeName: "Compsognathus", diet: "Carnivore", jpId: "2" },
  { codeName: "Ankylosaurus", diet: "Herbivore", jpId: "3" },
  { codeName: "Brachiosaurus", diet: "Herbivore", jpId: "4" },
  { codeName: "Ceratosaurus", diet: "Carnivore", jpId: "5" },
  { codeName: "Corythosaurus", diet: "Herbivore", jpId: "6" },
  { codeName: "Dilophosaurus", diet: "Carnivore", jpId: "7" },
  { codeName: "Gallimimus", diet: "Omnivore", jpId: "8" },
  { codeName: "Iguanodon", diet: "Herbivore", jpId: "9" },
  { codeName: "Mamenchisaurus", diet: "Herbivore", jpId: "10" },
  { codeName: "Ouranosaurus", diet: "Herbivore", jpId: "11" },
  { codeName: "Pachycephalosaurus", diet: "Herbivore", jpId: "12" },
  { codeName: "Parasaurolophu", diet: "Herbivore", jpId: "13" },
  { codeName: "Pteranodon", diet: "Carnivore", jpId: "14" },
  { codeName: "Spinosaurus", diet: "Carnivore", jpId: "15" },
  { codeName: "Stegosaurus", diet: "Herbivore", jpId: "16" },
  { codeName: "Triceratops", diet: "Herbivore", jpId: "17" },
  { codeName: "Velociraptor", diet: "Carnivore", jpId: "18" },
];

function findDinoByCodeName() {
  let dinoName = prompt("Insert the name of the dinosaur to start the search");
  let searchingDino = searchDino.filter(
    (dino) => dino.codeName.toLowerCase() == dinoName.toLowerCase()
  );
  console.log(searchingDino);
  if (searchingDino.length == 0) {
    console.log(
      "Sorry, the parameters didn't match. Please check the data again"
    );
  }
}
function findDinoByDiet() {
  let DietDino = prompt("Insert the food and energy requirements");
  let searchingDinoDiet = searchDino.filter(
    (dinoDiet) => dinoDiet.diet.toLowerCase() == DietDino.toLowerCase()
  );
  console.log(searchingDinoDiet);
  if (searchingDinoDiet.length == 0) {
    console.log(
      "Sorry, the parameters didn't match. Please check the data again"
    );
  }
}
function findDinoById() {
  let dinoId = prompt("Insert the ID of the dinosaur to start the search");
  let searchingDinoId = searchDino.filter(
    (idDinos) => idDinos.jpId.toLowerCase() == dinoId.toLowerCase()
  );
  console.log(searchingDinoId);
  if (searchingDinoId.length == 0) {
    console.log(
      "Sorry, the parameters didn't match. Please check the data again"
    );
  }
}

// OPTION 6: JP MAP (UNDER CONSTRUCTION) //

// LOCAL STORAGE

localStorage.setItem("searchUser", JSON.stringify(searchUser));
localStorage.setItem("searchDino", JSON.stringify(searchDino));

// SESSION STORAGE

sessionStorage.setItem("showUsers", JSON.stringify(showUsers));

// EVENTOS //

//LOGINS

document
  .getElementById("buttonLogDna")
  .addEventListener("click", function (dnaLab) {
    dnaLab.preventDefault();
    const logUserDna = document.getElementById("logUserDna").value;
    const passDna = document.getElementById("passDna").value;

    if (logUserDna === "better_than_god" && passDna === "2470") {
      window.location.href = "dnaLab.html";
    } else {
      Swal.fire({
        icon: "error",
        title: "WARNING!",
        text: "Please verify your user and pass",
      });
    }
  });

let attempts = 0;

document
  .getElementById("buttonSecurity")
  .addEventListener("click", function (systemSecurity) {
    systemSecurity.preventDefault();
    const logUserSecurity = document.getElementById("logUserSecurity").value;
    const passSecurity = document.getElementById("passSecurity").value;

    if (logUserSecurity === "dennis.nedry" && passSecurity === "1993") {
      window.location.href = "jpSystemSecurity.html";
    } else {
      attempts += 1;
      if (attempts === 3) {
        Swal.fire({
          icon: "error",
          title: "PERMISSION DENIED!",
          text: "PERMISSION DENIED...AND...YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD! YOU DIDN'T SAY THE MAGIC WORD!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Permission denied",
        });
      }
    }
  });
