interface SocialsData
{
  title:   string;
  capt:    string;
  link:    string;
  icon:    string;
  colour?: string;
  desc:    string;
}


export const socials_data: Record<string, SocialsData> = {
  GITHUB: {
    title:  "GitHub",
    capt:   "@Sup2point0",
    link:   "https://github.com/Sup2point0",
    icon:   "github.svg",
    colour: "#15f2f3",
    desc:   `all my projects!`,
  },
  SOUNDCLOUD: {
    title:  "SoundCloud",
    capt:   "@Sup2point0",
    link:   "https://soundcloud.com/Sup2point0",
    icon:   "soundcloud.svg",
    colour: "#ff8800",
    desc:   `my music!`,
  },
  REDDIT: {
    title:  "reddit",
    capt:   "u/Sup2pointO",
    link:   "https://reddit.com/u/Sup2pointO",
    icon:   "reddit.svg",
    colour: "#ff4500",
    desc:   `peak degeneracy`,
  },
  YOUTUBE: {
    title:  "YouTube",
    capt:   "@VengeanceVanguard",
    link:   "https://youtube.com/@VengeanceVanguard",
    icon:   "youtube.svg",
    colour: "#ff0000",
    desc:   `rhythm gaming, GarageBand music, programming in Desmos`,
  },
  DISCORD: {
    title:  "Discord",
    capt:   "@sup2.0",
    link:   "https://discord.com/users",
    icon:   "discord.svg",
    colour: "#6b81cc",
    desc:   `add me!`,
  },
};

export const socials_list: SocialsData[] = Object.values(socials_data);
