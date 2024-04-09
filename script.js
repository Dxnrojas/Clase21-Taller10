const render = () => {
const digimones = [
    {
      name: "Koromon",
      img: "https://digimon.shadowsmith.com/img/koromon.jpg",
      level: "In Training"
    },
    {
      name: "Tsunomon",
      img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
      level: "In Training"
    },
    {
      name: "Yokomon",
      img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
      level: "In Training"
    },
    {
      name: "Motimon",
      img: "https://digimon.shadowsmith.com/img/motimon.jpg",
      level: "In Training"
    },
    {
      name: "Patamon",
      img: "https://digimon.shadowsmith.com/img/patamon.jpg",
      level: "Rookie"
    },
    {
      name: "Kuwagamon",
      img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
      level: "Champion"
    },
    {
      name: "Greymon",
      img: "https://digimon.shadowsmith.com/img/greymon.jpg",
      level: "Champion"
    },
    {
      name: "Tanemon",
      img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
      level: "In Training"
    }
  ];

  const digimonClassify = (digimones) => {
    let digimonInTraining = [];
    let digimonRookie = [];
    let digimonChampion = [];

    for (digomns of digimones){
        if (digimon.level === 'In Training'){
            digimonInTraining.push(digimon);
        } else if (digimon.level === 'Rookie'){
            digimonRookie.push(digimon);
        } else {
            digimonChampion.push(digimon);
        }
    }
  }
}
