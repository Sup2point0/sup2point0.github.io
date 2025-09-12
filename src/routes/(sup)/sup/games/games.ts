export interface Game
{
  name: string;

  love: 1 | 2 | 3;

  genres: Genre[];

  platforms: Platform[];

  state: State;

  date: (string | DatePoint)[];
}

type Genre = "rhythm" | "tower defence" | "racing" | "shmup" | "runner" | "puzzle" | "cards" | "sandbox" | "io" | "classics";
type Platform = "mobile" | "desktop" | "arcade" | "console" | "VR";
type State = "active" | "opportunistic" | "intermittent" | "infrequent" | "retired";
type DatePoint = "childhood" | "present";


export const games: Game[] = [
  {
    name: "Minecraft",
    love: 2,
    genres: ["sandbox", "classics"],
    platforms: ["mobile", "console", "desktop"],
    state: "infrequent",
    date: ["childhood", "present"],
  }, {
    name: "Phigros",
    love: 3,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: "active",
    date: ["summer 2023", "present"],
  }, {
    name: "CHUNITHM",
    love: 3,
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: "opportunistic",
    date: ["summer 2024", "present"],
  }, {
    name: "Paradigm: Reboot",
    love: 3,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: "active",
    date: ["summer 2025", "present"],
  }, {
    name: "Arcaea",
    love: 3,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: "active",
    date: ["summer 2024", "present"],
  }, {
    name: "Milthm",
    love: 2,
    genres: ["rhythm"],
    platforms: ["desktop"],
    state: "intermittent",
    date: ["fall 2024", "present"],
  }, {
    name: "DanceCube EVO",
    love: 2,
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: "opportunistic",
    date: ["summer 2025", "present"],
  }, {
    name: "vivid/stasis",
    love: 2,
    genres: ["rhythm"],
    platforms: ["desktop"],
    state: "intermittent",
    date: ["fall 2024", "present"],
  }, {
    name: "DEEMO II",
    love: 1,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: "infrequent",
    date: ["summer 2024", "present"],
  }, {
    name: "Rhythm+",
    love: 1,
    genres: ["rhythm"],
    platforms: ["mobile"],
    state: "retired",
    date: ["fall 2023", "summer 2023"],
  }, {
    name: "maimai",
    love: 1,
    genres: ["rhythm"],
    platforms: ["arcade"],
    state: "infrequent",
    date: ["summer 2023", "present"],
  }, {
    name: "BeatSaber",
    love: 2,
    genres: ["rhythm"],
    platforms: ["VR"],
    state: "opportunistic",
    date: ["2024", "present"],
  }, {
    name: "osu!",
    love: 1,
    genres: ["rhythm", "classics"],
    platforms: ["desktop"],
    state: "infrequent",
    date: ["summer 2023", "present"],
  },

  {
    name: "Bloons TD 6",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["desktop"],
    state: "opportunistic",
    date: ["2020", "present"],
  }, {
    name: "Bloons Pop!",
    love: 3,
    genres: ["puzzle"],
    platforms: ["mobile"],
    state: "infrequent",
    date: ["2021", "present"],
  }, {
    name: "Bloons Super Monkey 2",
    love: 3,
    genres: ["shmup"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood", "2021"],
  }, {
    name: "Bloons TD 5",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood"],
  },

  {
    name: "Yu-Gi-Oh! Master Duel",
    love: 3,
    genres: ["cards"],
    platforms: ["mobile"],
    state: "active",
    date: ["2023", "present"],
  },

  {
    name: "Asphalt 9: Legends",
    love: 3,
    genres: ["racing"],
    platforms: ["mobile"],
    state: "retired",
    date: ["2019", "2021"],
  }, {
    name: "Asphalt 8: Airborne",
    love: 3,
    genres: ["racing", "classics"],
    platforms: ["mobile"],
    state: "retired",
    date: ["2017", "2019"],
  },

  {
    name: "Spider-Man: Unlimited",
    love: 3,
    genres: ["runner"],
    platforms: ["mobile"],
    state: "retired",
    date: ["2016", "2019"],
  }, {
    name: "Minion Rush",
    love: 2,
    genres: ["runner", "classics"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood"],
  }, {
    name: "Temple Run II",
    love: 1,
    genres: ["runner"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood"],
  }, {
    name: "Temple Run",
    love: 2,
    genres: ["runner", "classics"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood"],
  },

  {
    name: "AirAttack 2",
    love: 2,
    genres: ["shmup"],
    platforms: ["mobile"],
    state: "retired",
    date: ["summer 2020"],
  }, {
    name: "AirAttack",
    love: 3,
    genres: ["shmup"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood"],
  },

  {
    name: "Plants vs. Zombies 2",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood", "2020"],
  }, {
    name: "Plants vs. Zombies",
    love: 3,
    genres: ["tower defence", "classics"],
    platforms: ["mobile"],
    state: "retired",
    date: ["childhood"],
  }, {
    name: "保卫萝卜",
    love: 3,
    genres: ["tower defence"],
    platforms: ["mobile"],
    state: "opportunistic",
    date: ["childhood", "present"],
  },


  {
    name: "littlebigsnake.io",
    love: 3,
    genres: ["io"],
    platforms: ["desktop"],
    state: "infrequent",
    date: ["childhood", "present"],
  }, {
    name: "diep.io",
    love: 3,
    genres: ["shmup", "io"],
    platforms: ["desktop"],
    state: "retired",
    date: ["childhood"],
  }, {
    name: "arras.io",
    love: 2,
    genres: ["shmup", "io"],
    platforms: ["desktop"],
    state: "infrequent",
    date: ["childhood", "present"],
  }, {
    name: "zombs.io",
    love: 3,
    genres: ["tower defence", "io"],
    platforms: ["desktop"],
    state: "retired",
    date: ["childhood"],
  }, {
    name: "fightz.io",
    love: 1,
    genres: ["io"],
    platforms: ["desktop"],
    state: "retired",
    date: ["childhood"],
  }
];
