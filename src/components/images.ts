import { getCollection } from "astro:content";
import { byLocale } from "./translations";

export enum Collection {
  Before,
  During,
  Previous,
}

export async function getImages(c: Collection, loc: string) {
  switch (c) {
    case Collection.Previous:
      return getPreviousExpeditionImages(loc);
    case Collection.Before:
      return getAstroCollectionImages(loc, ({ data }: { data: any }) => {
        return new Date(data.EntryDate) < new Date(2006, 2, 5);
      });
    default:
      return getAstroCollectionImages(loc, ({ data }: { data: any }) => {
        return new Date(data.EntryDate) > new Date(2006, 2, 4);
      });
  }
}

async function getAstroCollectionImages(loc: string, filter: any) {
  const diaryEntries = await getCollection("diary", filter);

  return diaryEntries
    .flatMap((n) => n.data.Images)
    .map((img) => ({
      source: {
        regular: `/images/paivakirja/${img.Id.toString().padStart(3, "0")}.jpeg`,
        thumbnail: `/images/paivakirja/${img.Id.toString().padStart(
          3,
          "0",
        )}-small.jpeg`,
      },
      caption: loc === "fi" ? img.Caption_fi : img.Caption_en,
    }));
}

function getPreviousExpeditionImages(loc: string) {
  const t = byLocale(loc);

  let names = [
    "ahtojaat",
    "ahtojaissa-jermi",
    "ahtojaissa-tero-2",
    "ahtojaissa-tero-ja-jermi",
    "auringonlasku-leirissa",
    "jermi-pesulla",
    "hiihto-vastavaloon",
    "karhun-jalki-ja-mono",
    "kartanlukua-lehteen",
    "kiiltotau",
    "kylma",
    "leiri-lumessa",
    "leirin-pystytys",
    "lvjk2",
    "lvjk1",
    "suomenlippu-oviaukossa",
    "naamat-huurussa",
  ];

  return names.map((n) => ({
    source: {
      regular: `/images/previous-expeditions/600px/${n}.jpg`,
      thumbnail: `/images/previous-expeditions/thumbnails/${n}.jpg`,
    },
    caption: t(`imgs.${n}`),
  }));
}
