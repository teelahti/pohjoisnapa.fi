import React from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../Layout";

// Create a map between the supported two letter languages we use in page contexts, and
// the full locale used in formats.
const formats = {
  fi: {
    full: new Intl.DateTimeFormat("fi-FI", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
    date: new Intl.DateTimeFormat("fi-FI", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    time: new Intl.DateTimeFormat("fi-FI", {
      hour: "numeric",
      minute: "numeric",
    }),
    relative: Intl.RelativeTimeFormat
      ? new Intl.RelativeTimeFormat("fi-FI", {
          style: "long",
          numeric: "auto",
        })
      : null,
  },
  en: {
    full: new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
    date: new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    time: new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      minute: "numeric",
    }),
    relative: Intl.RelativeTimeFormat
      ? new Intl.RelativeTimeFormat("en-GB", {
          style: "long",
          numeric: "auto",
        })
      : null,
  },
};

export const FormattedDate = ({ value }) => (
  <LocaleContext.Consumer>
    {language => <time>{formats[language].date.format(new Date(value))}</time>}
  </LocaleContext.Consumer>
);

FormattedDate.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export const FormattedTime = ({ value }) => (
  <LocaleContext.Consumer>
    {language => <time>{formats[language].time.format(new Date(value))}</time>}
  </LocaleContext.Consumer>
);

FormattedTime.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export const FormattedDateTime = ({ value }) => (
  <LocaleContext.Consumer>
    {language => <time>{formats[language].full.format(new Date(value))}</time>}
  </LocaleContext.Consumer>
);

FormattedDateTime.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export const FormattedRelative = ({ value }) => {
  if (!Intl.RelativeTimeFormat) {
    // fallback
    return <FormattedDateTime value={value} />;
  }

  // Calculate what units we want
  let target = new Date(value);
  let now = new Date();

  let msDiff = target - now;
  let ms = Math.abs(msDiff);
  let showDiff = 0;
  let unit = "";

  // Possible values are: "year", "quarter", "month", "week", "day", "hour", "minute", "second"
  if (ms / 1000 < 60) {
    unit = "second";
    showDiff = msDiff / 1000;
  } else if (ms / 1000 / 60 < 60) {
    unit = "minute";
    showDiff = msDiff / 1000 / 60;
  } else if (ms / 1000 / 60 / 60 < 24) {
    unit = "hour";
    showDiff = msDiff / 1000 / 60 / 60;
  } else if (ms / 1000 / 60 / 60 / 24 < 31) {
    unit = "day";
    showDiff = msDiff / 1000 / 60 / 60 / 24;
  } else {
    unit = "month";
    showDiff = msDiff / 1000 / 60 / 60 / 24 / 31;
  }

  return (
    <LocaleContext.Consumer>
      {language => (
        <time>
          {formats[language].relative.format(Math.floor(showDiff), unit)}
        </time>
      )}
    </LocaleContext.Consumer>
  );
};

FormattedRelative.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};
