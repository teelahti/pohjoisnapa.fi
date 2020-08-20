module.exports = [
  {
    // Only one item MUST have the "default: true" key
    default: true,
    code: "fi",
    path: "",
    switchText: "Suomeksi",
    resources: require("./fi.js"),
    formats: createFormats("fi-FI"),
  },
  {
    code: "en",
    path: `/en`,
    switchText: "In English",
    resources: require("./en.js"),
    formats: createFormats("en-GB"),
  },
];

function createFormats(locale) {
  return {
    full: new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
    date: new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    time: new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      minute: "numeric",
    }),
    relative: Intl.RelativeTimeFormat
      ? new Intl.RelativeTimeFormat(locale, {
          style: "long",
          numeric: "auto",
        })
      : null,
  };
}
