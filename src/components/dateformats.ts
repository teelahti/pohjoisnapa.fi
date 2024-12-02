export default function formatsByLocale(locale: string) {
  return formats[locale] ?? formats["fi"];
}

type LocaleToFormat = Record<string, any>;

const formats: LocaleToFormat = {
  fi: createFormats("fi-FI"),
  en: createFormats("en-GB"),
};

function createFormats(iso: string) {
  return {
    full: new Intl.DateTimeFormat(iso, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
    date: new Intl.DateTimeFormat(iso, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    time: new Intl.DateTimeFormat(iso, {
      hour: "numeric",
      minute: "numeric",
    }),
  };
}
