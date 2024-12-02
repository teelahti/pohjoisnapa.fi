type Translations = { [index: string]: any };

// This format is very simplistic, but works for legacy site
const translations: Translations = {
  fi: {
    // Layout
    expeditionName: "Pohjoisnapa 2006",
    metaKeywords: "retkikunta,pohjoisnapa,hiihto",
    footer:
      'LASKUVARJOJÄÄKÄRIKILLAN POHJOISNAPARETKIKUNTA 2006 &nbsp;&nbsp; design: <a href="http://www.poppicok.fi/">www.poppicok.fi</a> &nbsp;&nbsp; valokuvat: © poppis suomela',
    switchto_en: "In English",

    // Nav
    home: "Etusivu",
    expedition: "Retkikunta",
    expedition_background: "Taustaa",
    expedition_objectives: "Tavoitteet",
    expedition_timetable: "Aikataulu",
    expedition_research: "Tutkimus",
    expedition_equipment: "Varusteet",
    expedition_club: "Laskuvarjojääkärikilta",
    diary: "Päiväkirja",
    diary_all: "Kaikki päiväkirjaotteet",
    diary_data: "Data",
    diary_book: "Kirja",
    gallery: "Kuvagalleria",
    gallery_ice: "Hiihdon aikaiset kuvat",
    gallery_previous: "Kuvia aikaisemmilta retkikunnilta",
    gallery_press: "Lehdistökuvat",
    sponsors: "Tukijat",
    sponsors_list: "Tukijalista",
    sponsors_media: "Medianäkyvyys",
    sponsors_events: "Tapahtumat",
    arctic: "Arktis",
    arctic_history: "Historia",
    arctic_polarBear: "Jääkarhu",
    arctic_climateChange: "Ilmastonmuutos",
    arctic_orienteering: "Suunnistus",
    arctic_photographing: "Valokuvaus",
    arctic_food: "Ruoka",

    // Diary
    data_distance: "Kuljettu matka:",
    data_temperature: "Lämpötila:",
    data_wind: "Tuuli:",
    data_link: "Etenemisdata...",
    diary_prev: "Edellinen päivä",
    diary_next: "Seuraava päivä",
    created: "Päiväkirjamerkintä tallennettu",
    lastmodified: "Muokattu viimeksi",
    distance: "Matka",
    date: "Pvm",
    temperature: "Lämpötila",
    wind: "Tuuli",

    // Images from previous expeditions
    "imgs.ahtojaat": "Ahtojäät",
    "imgs.ahtojaissa-jermi": "Jermi ahtojäissä",
    "imgs.ahtojaissa-tero-2": "Tero ahtojäissä",
    "imgs.ahtojaissa-tero-ja-jermi": "Ahtojäissä Tero ja Jermi",
    "imgs.auringonlasku-leirissa": "Auringonlasku leirissä",
    "imgs.hiihto-vastavaloon": "Hiihto vastavaloon",
    "imgs.jermi-pesulla": "Jermi pesulla",
    "imgs.karhun-jalki-ja-mono": "Karhunjälki",
    "imgs.kartanlukua-lehteen": "Kartan lukua",
    "imgs.kiiltotau": "Hiihto",
    "imgs.kylma": "Kylmä",
    "imgs.leiri-lumessa": "Leiri lumessa",
    "imgs.leirin-pystytys": "Leirin pystytys",
    "imgs.lvjk1": "Kasvo",
    "imgs.lvjk2": "Veto",
    "imgs.naamat-huurussa": "Naamat huurussa",
    "imgs.suomenlippu-oviaukossa": "Suomen lippu",
  },
  en: {
    // Layout
    expeditionName: "North Pole 2006",
    metaKeywords: "expedition,north pole,ski",
    footer:
      'AIRBORNE RANGER CLUB OF FINLAND NORTH POLE EXPEDITION 2006 &nbsp;&nbsp; design: <a href="http://www.poppicok.fi/">www.poppicok.fi</a> &nbsp;&nbsp; photography: © poppis suomela<br />Translated and edited by Peter J. Glithero',
    switchto_fi: "Suomeksi",

    // Nav
    home: "Frontpage",
    expedition: "Expedition",
    expedition_background: "Background",
    expedition_objectives: "Objectives",
    expedition_timetable: "Timetable",
    expedition_research: "Research",
    expedition_equipment: "Equipment",
    expedition_club: "Airborne Ranger Club",
    diary: "Diary",
    diary_all: "All entries",
    diary_data: "Data",
    diary_book: "Book",
    gallery: "Gallery",
    gallery_ice: "Images from the ice",
    gallery_previous: "Images from previous expeditions",
    gallery_press: "Press images",
    sponsors: "Sponsors",
    sponsors_list: "Sponsorlist",
    sponsors_media: "Media",
    sponsors_events: "Events",
    arctic: "Arctic",
    arctic_history: "History",
    arctic_polarBear: "Polar bear",
    arctic_climateChange: "Climate change",
    arctic_orienteering: "Orienteering",
    arctic_photographing: "Photographing",
    arctic_food: "Food",

    // Diary - data
    data_distance: "Distance traveled:",
    data_temperature: "Temperature:",
    data_wind: "Wind:",
    data_link: "Expedition data...",
    diary_prev: "Previous day",
    diary_next: "Next day",
    created: "Entry saved at",
    lastmodified: "Updated at",
    distance: "Distance",
    date: "Date",
    temperature: "Temperature",
    wind: "Wind",

    // Images from previous expeditions
    "imgs.kartanlukua-lehteen": "Studying the map",
    "imgs.kiiltotau": "Skiing",
    "imgs.kylma": "Cold",
    "imgs.leiri-lumessa": "Camp in snow",
    "imgs.leirin-pystytys": "Setting up the camp",
    "imgs.lvjk2": "Pull",
    "imgs.lvjk1": "Face",
    "imgs.suomenlippu-oviaukossa": "The flag of Finland",
    "imgs.naamat-huurussa": "Frosty faces",
    "imgs.ahtojaat": "Packed ice",
    "imgs.ahtojaissa-jermi": "Jermi on packed ice",
    "imgs.ahtojaissa-tero-2": "Tero on packed ice",
    "imgs.ahtojaissa-tero-ja-jermi": "Tero and Jermi on packed ice",
    "imgs.auringonlasku-leirissa": "Sunset at the camp",
    "imgs.hiihto-vastavaloon": "Skiing towards light",
    "imgs.karhun-jalki-ja-mono": "Footprint of a bear",
    "imgs.jermi-pesulla": "Jermi washing up",
  },
};

// Returns a translation function scoped to locale
export function byLocale(l?: string) {
  let locs = translations[l ?? "fi"];

  return (key: string) => {
    return locs.hasOwnProperty(key) ? locs[key] : `TRANSLATE: ${l}/${key}`;
  };
}
