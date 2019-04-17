const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.locals.locations = [
  {
    ficName: "Metropolis",
    realName: "New York City",
    id: 0,
    lat: 40.7128,
    long: -74.006,
    cat: "DC",
    reason: `Over the years, Metropolis' features have greatly changed in the comics; however, Metropolis is always presented as being a global city. It is often referred to as "The Big Apricot" just as New York City is nicknamed "The Big Apple." It is commonly portrayed as having an Art Deco style of architecture, much like New York City. The skyline and many of the notable landmarks in Metropolis are based on real-life landmarks in New York City. Frank Miller has said that "Metropolis is New York in the daytime; Gotham City is New York at night."`
  },
  {
    ficName: "Gotham",
    realName: "New Jersey",
    id: 1,
    lat: 41.8781,
    long: -87.6298,
    cat: "DC",
    reason: "Gotham City, like other cities in the DC Universe, has varied in its portrayals over the decades, but the city's location is traditionally depicted as being in the state of New Jersey. In Amazing World of DC Comics #14 (March 1977), publisher Mark Gruenwald discusses the history of the Justice League and indicates that Gotham City is located in New Jersey."
  },
  {
    ficName: "Themyscira",
    realName: "Isle of Linosa, Italy",
    id: 2,
    lat: 35.8661,
    long: 12.8687,
    cat: "DC",
    reason: "It was originally implied, but not yet fully confirmed, that Paradise Island was located somewhere in the Pacific Ocean. Then in the 1970s television incarnation (as portrayed by Lynda Carter), Paradise Island's location was set in the Bermuda Triangle. And the 2009 animated movie version had set it in the Aegean Sea. "
  },
  {
    ficName: "Mordor",
    realName: "Death Valley, California",
    id: 3,
    lat: 36.5323,
    long: -116.9325,
    cat: "Lord of the Rings",
    reason: "Three sides of Mordor were bounded by great mountain ranges, arranged in a rough rectangle: the Ered Lithui (translated as 'Ash Mountains') on the north, and the Ephel Dúath on the west and the south."
  },
  {
    ficName: "The Shire",
    realName: "Matamata, New Zealand",
    id: 4,
    lat: 37.8109,
    long: 175.7765,
    cat: "Lord of the Rings",
    reason: "In The Lord of the Rings motion picture trilogy, the Shire appeared in both The Fellowship of the Ring and The Return of the King. The Shire scenes were shot at a location in Matamata, New Zealand. Following the shooting, the area was returned to its natural state, but even without the set from the movie the area became a prime tourist location."
  },
  {
    ficName: "Rivendell",
    realName: "Lauterbrunnen, Switzerland",
    id: 5,
    lat: 46.5935,
    long: 7.9091,
    cat: "Lord of the Rings",
    reason: "The physical appearance of the valley of Rivendell may be based upon the Lauterbrunnental in Switzerland, where J. R. R. Tolkien had hiked in 1911.The homes, including the waterfalls flowing beneath them, bear a striking similarity to Beatenberg which is located in the same region."
  },
  {
    ficName: "Hogwarts",
    realName: "Northern Scotland",
    id: 6,
    lat: 57.4216,
    long: 4.6656,
    cat: "Harry Potter",
    reason: "Most exterior scenes were shot on location at Alnwick Castle, but views of the exterior of the entire school were created from shots of Durham Cathedral with a digital spire added to the towers. Durham Cathedral also served as a set for Hogwarts interiors."
  },
  {
    ficName: "Diagon Alley",
    realName: "London, England",
    id: 7,
    lat: 51.5074,
    long: 0.1278,
    cat: "Harry Potter",
    reason: "Diagon Alley is a high street located in London. It is accessible to the wizarding world, to which it is something of an economic hub, but hidden from Muggles (non-magical people). However, Muggles are allowed access to it if they need to accompany their Muggle-born magical children. If a wizard or witch needs something, chances are that it can be found in Diagon Alley."
  },
  {
    ficName: "The Burrow",
    realName: "Devon, England",
    id: 8,
    lat: 50.7156,
    long: 3.5309,
    cat: "Harry Potter",
    reason: "The Weasleys' home, known as the Burrow, is located outside the village of Ottery St Catchpole, also near the home of the Lovegoods, the Diggorys and the Fawcetts."
  },
  {
    ficName: "Hogsmeade",
    realName: "Yorkshire, England",
    id: 9,
    lat: 53.7306,
    long: 1.2345,
    cat: "Harry Potter",
    reason: "Hogsmeade Village, or simply Hogsmeade, is the only settlement in Britain inhabited solely by wizards, witches, and other magical beings, and is located to the northwest of Hogwarts School of Witchcraft and Wizardry. It was founded by medieval wizard Hengist of Woodcroft who fled to Scotland to escape Muggle persecution of wizards in Northumberland. "
  },
  {
    ficName: "Jurassic Park",
    realName: "Costa Rica",
    id: 10,
    lat: 9.7489,
    long: 83.7534,
    cat: "Jurassic Park",
    reason: "International Genetic Technologies, Inc. (InGen) is a fictional company based in Palo Alto, California and has one location in Europe. Nevertheless, most of InGen's research took place on the fictional islands of Isla Sorna and Isla Nublar, near Costa Rica."
  },
  {
    ficName: "Hoth",
    realName: "Antarctica",
    id: 11,
    lat: -82.8628,
    long: -135.0000,
    cat: "Star Wars",
    reason: "Hoth is the sixth planet of a remote system of the same name. It is a small, terrestrial planet blanketed by snow and ice. The freezing climate, although habitable, is too cold for intelligent life to develop."
  },
  {
    ficName: "Naboo",
    realName: "Lake Como, Italy",
    id: 12,
    lat: 46.0160,
    long: 9.2572,
    cat: "Star Wars",
    reason: "The surface of Naboo is covered by dense swamps, rolling grass plains, and verdant hills. The largest mountain chain, the Gallo Mountains, bisect the singular continent and divide the great grass plains of the north from the Lianorm Swamp in the south. "
  },
  {
    ficName: "Tatooine",
    realName: "Tunisia, North Africa",
    id: 13,
    lat: 33.8869,
    long: 9.5375,
    cat: "Star Wars",
    reason: "George Lucas, accompanied by producer Gary Kurtz visited the Tunisian Island of Djerba with them and were impressed by the desert landscape and the unusual architecture, and selected Tunisia to provide the desert planet setting."
  },
  {
    ficName: "Coruscant",
    realName: "Shanghai, China",
    id: 14,
    lat: 31.2304,
    long: 121.4737,
    cat: "Star Wars",
    reason: `The word itself originates in the late 15th century from the Latin coruscant- 'vibrating, glittering', from the verb coruscare. It is described in the Concise Oxford Dictionary as a poetic and literary adjective meaning 'glittering; sparkling'.[3] The word "coruscant" is also a French adjective which means glittering, sparkling and, as a literary adjective, can be used to describe a decadent and overcomplicated language, decorum or community. `
  },
  {
    ficName: "Wakanda",
    realName: "Democratic Republic of the Congo",
    id: 15,
    lat: -4.3224,
    long: 15.3070,
    cat: "Marvel",
    reason: "Wakanda is located in East Africa, although its exact location has varied throughout the nation's publication history: some sources place Wakanda just north of Tanzania, while others – such as Marvel Atlas #2 – show it at the north end of Lake Turkana, in between South Sudan, Uganda, Kenya and Ethiopia (and surrounded by fictional countries like Azania, Canaan, and Narobia). In the Marvel Cinematic Universe (The Black Panther), on-screen maps use the location given in Marvel Atlas #2."
  },
  {
    ficName: "Asgard",
    realName: "Tromsø, Norway",
    id: 16,
    lat: 69.6492,
    long: 18.9553,
    cat: "Marvel",
    reason: "The primary sources regarding Asgard come from the Prose Edda, written in the 13th century by Icelandic historian Snorri Sturluson, and the Poetic Edda, compiled in the 13th century from a basis of much older Skaldic poetry. "
  },
  {
    ficName: "Sakaar",
    realName: "Alang, India",
    id: 17,
    lat: 21.3996,
    long: 72.1740,
    cat: "Marvel",
    reason: "The ship-breaking yards in Alang, India were a perfect example of thriving communities despite being a 'waste capital', such as Sakaar."
  },
  {
    ficName: "Pandora",
    realName: "Zhangjiajie National Forest Park, China",
    id: 18,
    lat: 29.3153,
    long: 110.4348,
    cat: "Avatar",
    reason: "Avatar is primarily an action-adventure journey of self-discovery, in the context of imperialism and deep ecology. Cameron said his inspiration was 'every single science fiction book I read as a kid', and that he was particularly striving to update the style of Edgar Rice Burroughs's John Carter series and the deep jungles of Pandora were visualized from Disney's 37th animated film, Tarzan."
  },
  {
    ficName: "Alladin",
    realName: "Baghdad, Iraq",
    id: 19,
    lat: 33.3152,
    long: 44.3661,
    cat: "Disney",
    reason: "As with Woolverton's screenplay, several characters and plot elements were based on the 1940 version of The Thief of Bagdad,though the location of the film was changed from Baghdad to the fictional Arabian city of Agrabah."
  },
  {
    ficName: "Frozen",
    realName: "Oslo, Norway",
    id: 20,
    lat: 59.9139,
    long: 10.7522,
    cat: "Disney",
    reason: "To create the look of Frozen, Giaimo began pre-production research by reading extensively about the entire region of Scandinavia and visiting the Danish-themed city of Solvang near Los Angeles, but eventually zeroed in on Norway in particular because '80 percent' of the visuals that appealed to him were from Norway."
  },
  {
    ficName: "Moana",
    realName: "Samoa, Oceania",
    id: 21,
    lat: 13.7590,
    long: 172.1046,
    cat: "Disney",
    reason: "Clements and Musker set the film at that point in time, about two thousand years ago, on a fictional island in the central Pacific Ocean, which drew inspiration from elements of the real-life island nations of Fiji, Samoa, and Tonga."
  },
  {
    ficName: "C-137",
    realName: "Seattle, Washington",
    id: 22,
    lat: 47.6062,
    long: -122.3321,
    cat: "Rick and Morty",
    reason: "According to Justin Roiland, the family lives outside of Seattle in the U.S. state of Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities."
  },
  {
    ficName: "Gazorpazorp",
    realName: "Atacama Desert, Chile",
    id: 23,
    lat: -23.8634,
    long: -69.1328,
    cat: "Rick and Morty",
    reason: "Gazorpazorp is a planet that most closely resembles Mars. The traiing ground for NASA Mars-related missions in the Atacama Desert, in Chile."
  },
  {
    ficName: "Kings Landing",
    realName: "Dubrovnik, Croatia",
    id: 24,
    lat: 42.6507,
    long: 18.0944,
    cat: "Game of Thrones",
    reason: "In season two, filming for King's Landing and the Red Keep shifted from Malta to the historic parts of Dubrovnik and the Minčeta, Bokar, and Lovrijenac fortresses in Croatia, which allowed for more exterior shots of an authentic walled medieval city."
  },
  {
    ficName: "Dorne",
    realName: "Seville, Spain",
    id: 25,
    lat: 37.3891,
    long: -5.9845,
    cat: "Game of Thrones",
    reason: "In the show, Dornish scenes were filmed in the Alcázar of Seville, Seville, Spain."
  },
  {
    ficName: "The Iron Islands",
    realName: "Murlough Bay, Northern Ireland",
    id: 26,
    lat: 55.1959,
    long: -6.6493,
    cat: "Game of Thrones",
    reason: "Pyke is the seat of House Greyjoy. The television adaptation filmed the scenes of Pyke's port at Lordsport Harbour in Ballintoy Harbour, in Northern Ireland's County Antrim. The sea has worn away much of the rock on which Pyke originally stood, so the castle now consists mostly of a main keep on the main island and smaller towers perched on rocks"
  },
  {
    ficName: "The Wall",
    realName: "Vatnajökull, Iceland ",
    id: 27,
    lat: 64.4220,
    long: -16.7902,
    cat: "Game of Thrones",
    reason: "The TV adaptation used Iceland as filming location for the lands Beyond the Wall."
  },
  {
    ficName: "Dragonstone",
    realName: "Bakio, Spain",
    id: 28,
    lat: 43.4272,
    long: 2.8127,
    cat: "Game of Thrones",
    reason: "In Season 7 of the show, filming for Dragonstone took place at several locations in the Basque region of Spain: the islet of Gaztelugatxe in Bermeo, Itzurun Beach in Zumaia, and Muriola Beach in Barrika."
  },
  {
    ficName: "Winterfell",
    realName: "CastleWard, Northern Ireland",
    id: 29,
    lat: 54.3698,
    long: 5.5557,
    cat: "Game of Thrones",
    reason: "To depict Winterfell, both the pilot and season 1 of the television adaptation used the 16th century clock tower and ancient courtyard of the Clearsky Adventure Centre located at Castle Ward in County Down, Northern Ireland."
  }
];

app.set("port", process.env.PORT || 3000);
app.locals.title = "Feather";

app.get("/api/v1/locations", (request, response) => {
  response.status(200).json(app.locals.locations);
});

export default app;
